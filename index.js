#!/usr/bin/env node

const program = require('commander');
const inquirer = require('inquirer');

const download = require('./download');

program.version('0.0.3', '-v, --version');

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
        inquirer
          .prompt([
            {
              type: 'list',
              name: 'template',
              message: '请选择 NodeJS 模板',
              choices: ['server', 'mock'],
            },
          ])
          .then((answers) => {
            switch (answers.template) {
              case 'server':
                download('github:Yingkaixiang/ykx-template-node-server', name);
                break;
              case 'mock':
                download('github:Yingkaixiang/ykx-mock', name);
                break;
            }
          });
      }
    });
});

program.parse(process.argv);
