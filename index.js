#!/usr/bin/env node

const program = require('commander');
const download = require('download-git-repo');
const inquirer = require('inquirer');
const ora = require('ora');
const chalk = require('chalk');
const symbols = require('log-symbols');

program.version('0.0.2', '-v, --version');

program.command('create <name>').action((name) => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'type',
        message: '请选择项目类型',
        choices: ['React', 'NodeJS'],
      },
    ])
    .then((answers) => {
      if (answers.type === 'NodeJS') {
        const spinner = ora('下载模板中...');
        spinner.start();
        download(
          'github:Yingkaixiang/ykx-template-node-server',
          name,
          { clone: true },
          (err) => {
            if (!err) {
              spinner.succeed();
              console.log(symbols.success, chalk.green('项目创建成功'));
            } else {
              spinner.fail();
              console.log(symbols.error, chalk.red('项目创建失败'));
            }
          },
        );
      }
    });
});

program.parse(process.argv);
