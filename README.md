# climatemind.org

Welcome! To find out more about the progress we have already made, have a look at our other Climate Mind repositories: https://github.com/ClimateMind

## Technical infos

The current setup relies on a legacy version of Node (verion 8.17.0). For the initial setup make sure to have this version installed and then run the following commands:

- `nvm use 8.17.0` (useful if you easily want to be able to switch between node versions)
- `yarn` (installs the environment)
- `gulp` (starts your local dev server, in case you don't have gulp installed, refer to the [Gulp Quick Start guide](https://gulpjs.com/docs/en/getting-started/quick-start/#install-the-gulp-command-line-utility))

In case you make changes to JavaScript files, you can run `gulp publish` to uglify the code. In most cases, it will be sufficient to only run `gulp` while working locally. 

## Update instructions

To update the landing page of climatemind.org, change the respective file in the `/src/` folder (e.g. `src/index.pug`), run `gulp` (to start your local dev server), and then commit + push the changes to GitHub. 
