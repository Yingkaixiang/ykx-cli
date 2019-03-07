#!/usr/bin/env node

const program = require('commander');
const inquirer = require('inquirer');

const download = require('./download');

program.version('0.0.5', '-v, --version');

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
      } else if (answers.type === 'React') {
        inquirer
          .prompt([
            {
              type: 'list',
              name: 'type',
              message: '请选择 React 模板',
              choices: ['web-app', 'component'],
            },
          ])
          .then((answers) => {
            switch (answers.type) {
              case 'web-app':
                download('github:Yingkaixiang/ykx-template-react', name);
                break;
              case 'component':
                download(
                  'github:Yingkaixiang/ykx-template-react-component',
                  name,
                );
                break;
            }
          });
      }
    });
});

program.parse(process.argv);
