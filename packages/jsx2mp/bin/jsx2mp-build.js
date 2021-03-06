#!/usr/bin/env node
const { resolve } = require('path');
const program = require('commander');

program
  .action((cmd) => {
    const workDirectory = resolve(process.env.CWD || process.cwd());
    const distDirectory = resolve(workDirectory, 'dist');

    require('..')(workDirectory, distDirectory, false);
  });

program.parse(process.argv);
