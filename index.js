#!/usr/bin/env node

const program = require('commander');
const { prompt } = require('inquirer');
const algorithms = require('./src/algorithms');

const questions = [
  {
    type: 'list',
    name: 'algorithm',
    message: 'Which algorithm do you wan to run?',
    choices: Object.getOwnPropertySymbols(algorithms).map(s => ({
      name: `${Symbol.keyFor(s)} : ${algorithms[s].description}`,
      value: s,
    })),
  },
  {
    type: 'input',
    name: 'items',
    message: 'Enter the items:',
  },
];

program.version('0.0.1').description('📦  Bin Packing 📦');

program
  .command('interactive')
  .alias('i')
  .description('Run interactive mode')
  .action(() =>
    prompt(questions).then(answers =>
      process.stdout.write(`${algorithms[answers.algorithm].run(answers.items)}\n`)));

program
  .command('run <algorithm> <items>')
  .alias('r')
  .description('Run specified Bin Packing algorithm')
  .action((algorithm, items) =>
    process.stdout.write(`${algorithms[Symbol.for(algorithm)].run(items)}\n`));

program
  .command('list')
  .alias('l')
  .description('List of implemented Bin Packing algorithms')
  .action(() =>
    process.stdout.write(Object.getOwnPropertySymbols(algorithms)
      .map(s => `📦  ${Symbol.keyFor(s)} : ${algorithms[s].description}\n`)
      .join('')));

if (!process.argv.slice(2).length) {
  program.outputHelp();
  process.exit();
}

program.parse(process.argv);
