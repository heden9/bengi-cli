const fs = require('fs-extra')
const chalk = require('chalk')

function success(message) {
  console.error(chalk.green(message));
}
exports.run = function(name) {
  const projectName =  name;
  const dest = process.cwd();
  fs.pathExists(projectName, (err, exists) => {
      if (exists) {
          console.log(chalk.red('Existing directory here, please run new command for an empty folder! 😢'))
      } else {
          fs.copy('/usr/local/lib/node_modules/bengi-cli/packages/dvaSSR', projectName, err => {
              if (err) return console.error(err)
      
              printSuccess();
          })

      }
  })
  function printSuccess() {
    success(`
Success! Created ${chalk.keyword('orange')(projectName)} at ${chalk.yellow(dest)}.
Inside that directory, you can run several commands:
  * npm run dev:client: Starts the development server.
  * npm run dev:server: Starts the SSR server.
  * npm run build: Bundles the app into dist for production.
We suggest that you begin by typing:
  cd ${chalk.yellow(dest)}
  npm i
Happy hacking!`);
}
};

