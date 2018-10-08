const chalk = require('chalk');
const symbols = require('log-symbols');
const ora = require('ora');
const download = require('download-git-repo');

module.exports = (repo, name) => {
  const spinner = ora('下载模板中...');
  spinner.start();
  download(repo, name, { clone: true }, (err) => {
    if (!err) {
      spinner.succeed();
      console.log(symbols.success, chalk.green('项目创建成功'));
    } else {
      spinner.fail();
      console.log(symbols.error, chalk.red('项目创建失败'));
      console.log(symbols.error, chalk.red(err));
    }
  });
};
