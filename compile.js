var readdirp = require('readdirp'),
    path = require('path'),
    through2 = require('through2'),
    compiler = require('marked'),
    fs = require('fs-extra'),
    es = require('event-stream'),

    inputDir = 'contracts',
    outputDir = 'html';

    var Transform = require('stream').Transform;

// fs.emptyDir(outputDir);


readdirp(
    { root: inputDir, fileFilter: '*.md'},
    function(fileInfo) {
        fs.readFile(inputDir + '/' +fileInfo.path, function(err, markdown){
            var html = compiler(markdown.toString('utf8'));
            var fileName = fileInfo.path.replace('.md', '.html');
            fs.outputFile(outputDir + '/' + fileName, html, function(err){
                if(err){
                    console.error(err);
                }
                else{
                    console.log(fileName + ' was written.');
                }
            });
        });
    },
    function (err, res) {
        // console.log('Ready!', res);
    }
);
