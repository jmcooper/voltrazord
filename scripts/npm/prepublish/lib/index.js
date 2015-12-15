var fs = require('fs');

module.exports = {
  printLn: require('./print'),
  confirm: require('./confirm'),
  getGitStatus: require('./gitStatus'),
  build: require('./build'),
  publish: require('./publish'),
  git: require('./git'),
  getNpmVersion: require('./getNpmVersion'),
  pkg: JSON.parse(fs.readFileSync('package.json', 'utf8')),
  option: require('./getArgs')
}

process.on('SIGINT', function() {
  printLn.error('OMG ABORT EVERYTHING.');
  process.exit(1);
});
