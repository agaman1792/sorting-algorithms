const ARR_LEN_VALUE: number = 1000;
const ARR_MIN_VALUE: number = 0;
const ARR_MAX_VALUE: number = 100000;

interface AlgorithmStats {
  comparisons: number;
  swaps: number;
  time: number;
}

interface AlgorithmResult {
  stats: AlgorithmStats;
  result: Array<any>;
}

interface ProgramConfiguration {
  arrayLength: number;
  minValue: number;
  maxValue: number;
}

interface ProgramResult {
  bubble?: AlgorithmResult;
  insertion?: AlgorithmResult;
  merge?: AlgorithmResult;
  selection?: AlgorithmResult;
}

function ArrEqual(a: Array<any>, b: Array<any>): boolean {
  let i;
  if (a === b) return true;
  if (a === null || b === null) return false;
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  a.sort((a, b) => a > b ? 1 : a === b ? 0 : -1);
  b.sort((a, b) => a > b ? 1 : a === b ? 0 : -1);

  for (i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function Rand(min = ARR_MIN_VALUE, max = ARR_MAX_VALUE): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function MapToRand(min = ARR_MIN_VALUE, max = ARR_MAX_VALUE) {
  return (val: any, idx: any) => Rand(min, max);
}
function RandArray(length = ARR_LEN_VALUE, min = ARR_MIN_VALUE, max = ARR_MAX_VALUE): Array<any> {
  return Array.apply(null, Array(length)).map(MapToRand(min, max));
}

function PrintSortingResult(res: AlgorithmResult): void {
  if (!res)
    return;

  if (!res.stats)
    return;

  console.log(`Comparisons: ${res.stats.comparisons}`);
  console.log(`Swaps: ${res.stats.swaps}`);
  console.log(`Time: ${res.stats.time}`);
}

export {
  AlgorithmResult, AlgorithmStats,
  ProgramConfiguration, ProgramResult,

  ArrEqual,
  Rand, RandArray, MapToRand,
  PrintSortingResult
}