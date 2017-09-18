declare var process: any;
declare var require: any;

import BubbleSort from "./bubble-sort";
import InsertionSort from "./insertion-sort";
import MergeSort from "./merge-sort";
import SelectionSort from "./selection-sort";

import {
  AlgorithmResult, AlgorithmStats,
  ProgramConfiguration, ProgramResult,
  
  ArrEqual,
  RandArray,
  PrintSortingResult
} from "./common/utils"

const chalk = require(`chalk`);
const clui = require(`clui`);
const program = require(`commander`);

const configuration: ProgramConfiguration = {
  arrayLength: 10,
  minValue: 0,
  maxValue: 10000000
};

program.version(`1.0.0`);

// Configuration options
program.option(`--size <n>`, `Set the test array size`, parseInt);
program.option(`--min <n>`, `Set the array min value`, parseInt);
program.option(`--max <n>`, `Set the array max value`, parseInt);

// Sorting algorithms options
program.option(`-a, --all`, `Execute all sorting algorithms`);
program.option(`-b, --bubble`, `Execute the bubble sort algorithm`);
program.option(`-i, --insertion`, `Execute the insertion sort algorithm`);
program.option(`-m, --merge`, `Execute the merge sort algorithm`);
program.option(`-s, --selection`, `Execute the selection sort algorithm`);

// Execute arguments parsing
program.parse(process.argv);

// Check if there is at least one algorithm enabled to run
if (!program.all
  && !program.bubble
  && !program.insertion
  && !program.merge
  && !program.selection) {

  console.error(`No algorithms specified to run!`);
  program.help();
}

if (program.size)
configuration.arrayLength = program.size;
if (program.min)
configuration.minValue = program.min;
if (program.max)
configuration.maxValue = program.max;

// Generate the test array. Print the used configuration
console.log();
console.log(`Sorting using the following configuration`);
console.log(`Array Length: ${configuration.arrayLength}`);
console.log(`Minimum Value: ${configuration.minValue}`);
console.log(`Maximum Value: ${configuration.maxValue}`);
console.log();
const arr: Array<any> = RandArray(configuration.arrayLength, configuration.minValue, configuration.maxValue);
// Calibration result
const calibration = [].concat(arr as any).sort((a, b) => (a > b ? 1 : a == b ? 0 : -1));

const results: ProgramResult = {};
if (program.all || program.bubble) {
  process.stdout.write(`Running the bubble sort algorithm... `);
  results.bubble = BubbleSort(arr);
  process.stdout.write(chalk.green(`OK\n`));

  process.stdout.write(`Validating bubble sort result... `);
  if (ArrEqual(calibration, results.bubble.result)) {
    process.stdout.write(chalk.green(`OK\n`));
    PrintSortingResult(results.bubble);
  } else {
    process.stdout.write(chalk.red(`Validation failed!\n`));
  }

  console.log();
}

if (program.all || program.insertion) {
  process.stdout.write(`Running the insertion sort algorithm... `);
  results.insertion = InsertionSort(arr);
  process.stdout.write(chalk.green(`OK\n`));
  
  process.stdout.write(`Validating insertion sort result... `);
  if (ArrEqual(calibration, results.insertion.result)) {
    process.stdout.write(chalk.green(`OK\n`));
    PrintSortingResult(results.insertion);
  } else {
    process.stdout.write(`Validation failed!\n`);
  }

  console.log();
}

if (program.all || program.merge) {
  process.stdout.write(`Running the merge sort algorithm... `);
  results.merge = MergeSort(arr);
  process.stdout.write(chalk.green(`OK\n`));

  process.stdout.write(`Validating merge sort result... `);
  if (ArrEqual(calibration, results.merge.result)) {
    process.stdout.write(chalk.green(`OK\n`));
    PrintSortingResult(results.merge);
  } else {
    process.stdout.write(`Validation failed!\n`);
  }

  console.log();
}

if (program.all || program.selection) {
  process.stdout.write(`Running the selection sort algorithm... `);
  results.selection = SelectionSort(arr);
  process.stdout.write(chalk.green(`OK\n`));
  
  process.stdout.write(`Validating selection sort result... `);
  if (ArrEqual(calibration, results.selection.result)) {
    process.stdout.write(chalk.green(`OK\n`));
    PrintSortingResult(results.selection);
  } else {
    process.stdout.write(`Validation failed!\n`);
  }

  console.log();
}