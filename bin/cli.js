#! /usr/bin/env node
require = require('esm')(module);

const program = require('commander')
const { version } = require('../package.json');

program
  .storeOptionsAsProperties(true)
  .passCommandToAction(false)
  .version(version)

program.parse(process.argv)
