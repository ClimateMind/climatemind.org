# climatemind.org

Welcome! To find out more about the progress we have already made, have a look at our other Climate Mind repositories: https://github.com/ClimateMind

## Technical infos

The current setup relies on a legacy version of Node (verion 8.17.0). For the initial setup make sure to have this version installed and then run the following commands:

- `nvm use 8.17.0` (temporary workaround, needed for legacy version of gulp)
- `yarn` (installs the environment)
- `gulp` (starts your local dev server, in case you don't have gulp installed, refer to the [Gulp Quick Start guide](https://gulpjs.com/docs/en/getting-started/quick-start/#install-the-gulp-command-line-utility))

To publish everything, run `gulp publish` and commit the changes (via a pull request) to master.

In the near future we are planning to migrate the entire web app over to React and the latest stable version of Node.

## Update instructions

To update the landing page of climatemind.org, change the respective file in the `/src/` folder (e.g. `src/index.pug`), run `gulp` (to start your local dev server), and then commit + push the changes to GitHub. 

## Remarks

Our cloud computing is proudly sponsored by Microsoft through an [AI for Earth grant](https://www.microsoft.com/ai/ai-for-earth).
