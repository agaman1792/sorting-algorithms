Sorting algorithms
==================

How to use this command line tool

1. Pull the repository:  `git clone git@github.com:schwaggyg/sorting-algorithms.git`
2. Install global dependencies
    * coffeescript: enables running coffeescript code in node js: `npm install -g coffeescript`
    * ts-node: enables running typescript code in node js: `npm install -g ts-node`
3. Install local dependencies: `npm install`
4. Run the program in the language you prefer:
    * Coffeescript: `npm run coffee -- {options}` (e.g: `npm run coffee -- -a --size 10000 --min -100 --max 100000`)
    * JavaScript: `npm run js -- {options}` (e.g: `npm run js -- -a --size 10000 --min -100 --max 100000`)
    * TypeScript: `npm run ts -- {options}` (e.g: `npm run ts -- -a --size 10000 --min -100 --max 100000`)

Options:
--------

  * **-V, --version**  : Output the version number
  * **--size <n>**     : Set the test array size
  * **--min <n>**      : Set the array min value
  * **--max <n>**      : Set the array max value
  * **-a, --all**      : Execute all sorting algorithms
  * **-b, --bubble**   : Execute the bubble sort algorithm
  * **-i, --insertion**: Execute the insertion sort algorithm
  * **-m, --merge**    : Execute the merge sort algorithm
  * **-s, --selection**: Execute the selection sort algorithm
  * **-h, --help**     : Output usage information