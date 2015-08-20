Dailymotion Legal tools
=======================

This projects aims to simplify and improve how Dailymotion's legal contracts are handed.


The process of updating/creating a contract is fairly simple:

1. Legal team creates a file in the appropriate folder.
The folder structure is _contracts/[LANG]/[CATEGORY]/[CONTRACT_NAME].md_
For instance, we have _contracts/en/partner/self-billing.md_

2. Legal team opens a Jira ticket for developer to update contracts.

3. Dev team runs the html compiler which turns the .md files into .html files, and then copy the html folder into /views/legal/contracts in the Dailymotion Git repository. (dev isntructions: $ node compile.js)
