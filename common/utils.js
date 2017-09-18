"use strict";
const ARR_LEN_VALUE = 1000;
const ARR_MIN_VALUE = 0;
const ARR_MAX_VALUE = 100000;

function ArrEqual(a, b) {
  let i;
  if (a === b)
    return true;
  if (a === null || b === null)
    return false;
  if (a.length !== b.length)
    return false;
  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  a.sort(function (a, b) { return a > b ? 1 : a === b ? 0 : -1; });
  b.sort(function (a, b) { return a > b ? 1 : a === b ? 0 : -1; });
  for (i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i])
      return false;
  }
  return true;
}
exports.ArrEqual = ArrEqual;

function Rand(min = ARR_MIN_VALUE, max = ARR_MAX_VALUE) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.Rand = Rand;

function MapToRand(min = ARR_MIN_VALUE, max = ARR_MAX_VALUE) {
    return function (val, idx) { return Rand(min, max); };
}
exports.MapToRand = MapToRand;

function RandArray(length = ARR_LEN_VALUE, min = ARR_MIN_VALUE, max = ARR_MAX_VALUE) {
    return Array.apply(null, Array(length)).map(MapToRand(min, max));
}
exports.RandArray = RandArray;

function PrintSortingResult(res) {
    if (!res)
        return;
    if (!res.stats)
        return;
    console.log("Comparisons: " + res.stats.comparisons);
    console.log("Swaps: " + res.stats.swaps);
    console.log("Time: " + res.stats.time);
}
exports.PrintSortingResult = PrintSortingResult;
