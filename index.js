const algorithms = {
  bubble: require("./bubble-sort"),
  insertion: require("./insertion-sort"),
  merge: require("./merge-sort"),
  selection: require("./selection-sort")
};
const utils = require("./common/utils");

const chalk = require("chalk");
const clui = require("clui");
const program = require("commander");

const configuration = {
  arrayLength: 10,
  minValue: 0,
  maxValue: 10000000
};

// Program options
program.version("1.0.0");

// Configuration options
program.option("--size <n>", "Set the test array size", parseInt);
program.option("--min <n>", "Set the array min value", parseInt);
program.option("--max <n>", "Set the array max value", parseInt);

// Sorting algorithms options
program.option("-a, --all", "Execute all sorting algorithms");
program.option("-b, --bubble", "Execute the bubble sort algorithm");
program.option("-i, --insertion", "Execute the insertion sort algorithm");
program.option("-m, --merge", "Execute the merge sort algorithm");
program.option("-s, --selection", "Execute the selection sort algorithm");

// Execute arguments parsing
program.parse(process.argv);

// Check if there is at least one algorithm enabled to run
if (!program.all
  && !program.bubble
  && !program.insertion
  && !program.merge
  && !program.selection) {
    console.error("No algorithms specified to run!");
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
console.log("Sorting using the following configuration");
console.log("Array Length: " + configuration.arrayLength);
console.log("Minimum Value: " + configuration.minValue);
console.log("Maximum Value: " + configuration.maxValue);
console.log();
var arr = utils.RandArray(configuration.arrayLength, configuration.minValue, configuration.maxValue);
var calibration = [].concat(arr).sort(function (a, b) { return (a > b ? 1 : a == b ? 0 : -1); });

var results = {};
if (program.all || program.bubble) {
  process.stdout.write("Running the bubble sort algorithm... ");
  results.bubble = algorithms.bubble(arr);
  process.stdout.write(chalk.green("OK\n"));
  process.stdout.write("Validating bubble sort result... ");
  if (utils.ArrEqual(calibration, results.bubble.result)) {
    process.stdout.write(chalk.green("OK\n"));
    utils.PrintSortingResult(results.bubble);
  }
  else {
    process.stdout.write(chalk.red("Validation failed!\n"));
  }
  console.log();
}

if (program.all || program.insertion) {
  process.stdout.write(`Running the insertion sort algorithm... `);
  results.insertion = algorithms.insertion(arr);
  process.stdout.write(chalk.green(`OK\n`));
  process.stdout.write(`Validating insertion sort result... `);
  if (utils.ArrEqual(calibration, results.insertion.result)) {
    process.stdout.write(chalk.green(`OK\n`));
    utils.PrintSortingResult(results.insertion);
  } else {
    process.stdout.write(`Validation failed!\n`);
  }
  console.log();
}

if (program.all || program.merge) {
  process.stdout.write(`Running the merge sort algorithm... `);
  results.merge = algorithms.merge(arr);
  process.stdout.write(chalk.green(`OK\n`));
  process.stdout.write(`Validating merge sort result... `);
  if (utils.ArrEqual(calibration, results.merge.result)) {
    process.stdout.write(chalk.green(`OK\n`));
    utils.PrintSortingResult(results.merge);
  } else {
    process.stdout.write(`Validation failed!\n`);
  }
  console.log();
}

if (program.all || program.selection) {
  process.stdout.write(`Running the selection sort algorithm... `);
  results.selection = algorithms.selection(arr);
  process.stdout.write(chalk.green(`OK\n`));
  process.stdout.write(`Validating selection sort result... `);
  if (utils.ArrEqual(calibration, results.selection.result)) {
    process.stdout.write(chalk.green(`OK\n`));
    utils.PrintSortingResult(results.selection);
  } else {
    process.stdout.write(`Validation failed!\n`);
  }
  console.log();
} 
