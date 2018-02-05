#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const create = require('../src/bengi-create');

/**
 * Usage.
 */

program
  .command('create')
  .description('quick create your project')
  .alias('c')
  .action(function (name) {
    create.run(name);
  });
program.parse(process.argv);
