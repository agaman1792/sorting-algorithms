import {AlgorithmStats, AlgorithmResult} from '../common/utils';

const stats: AlgorithmStats = {
  comparisons: 0,
  swaps: 0,
  time: 0
};

function insertionSort(input: Array<any>): Array<any> {
  const result = [].concat(input as any); // New `workable` array construction
  const len = result.length;
  let i, el, j, toInsert;
  
  const start = new Date().getTime(); // Start the algorithm execution timer

  // Insertion sort algorithm implementation
  for(i = 1; i < len; i++) {
    el = result[i];
    j = i - 1;

    while(j >= 0 && result[j] > el) {
      stats.comparisons += 1;
      result[j+1] = result[j];
      j--;
    }

    result[j+1] = el;
  }
  // Done insertion sorting

  stats.time = new Date().getTime() - start; // End the algorithm execution timer
  return result;
}

export default (input: Array<any>): AlgorithmResult => ({
  result: insertionSort(input),
  stats
});