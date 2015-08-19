Dailymotion Legal tools
=======================

This projects aims to simplify and improve how Dailymotion's legal contracts are handed.


The process of updating/creating a contract is fairly simple:

1. Legal team creates a file in the appropriate folder.
The folder structure is _/[LANG]/[CATEGORY]/[CONTRACT_NAME].md_
For instance, we have _/en/partner/self-billing.md_

2. Legal team opens a Jira ticket for developer to update contracts.

3. Dev team runs the html compiler which turns the .md files into .html files, and then copy the html folder into /views/legal/contracts in the Dailymotion Git repository.


This process brings several advantages:

1. You may now view changes between any 2 changes at any time since the contracts were first added

2. The formatting of contracts become uniform and does not require additional front end development time to create/update

3. Changes are tracked by author, time, and content and can always be reverted/observed
