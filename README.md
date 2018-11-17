# Learning Handlebars

Using this project to get a better understanding of core Handlebars.js principles and use cases. The main project will use a blog example to illustrate concepts.

## Data
All data will be stored in the data subfolder as JSON files.

### Current data
* Entries.json

## Pre-compilation instructions
1. Create Handlebars templates in js/templates.
  * Each file should end in .handlebars extension
2. Compile templates into templatesCompiled.js file
  * Open command line
  * Run `handlebars -m js/templates/ -f js/templates/templatesCompiled.js`
    * This will take all Handlebars templates in the templates folder and compile into the templatesCompiled.js file.
    * The -m flag minifies the output.
