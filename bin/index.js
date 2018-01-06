#!/usr/bin/env node

const chalk = require('chalk')
process.title = 'bengi';

require('commander')
  .version(require('../package').version)
  .usage('<command> [options]')
  .command('new', 'Create a new project for bengi-cli (short-cut alias: "n")')
  .parse(process.argv)

require('./bengi');
