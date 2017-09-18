const algorithm = `Merge Sort`;

const stats = {
  algorithm,
  comparisons: 0,
  swaps: 0,
  time: 0
};

function merge(left, right){
  let result = [],
    lLen = left.length,
    rLen = right.length,
    l = 0,
    r = 0;
    
  while(l < lLen && r < rLen){
    stats.comparisons += 1;
    if(left[l] < right[r]) {
      stats.comparisons += 1;
      result.push(left[l++]);
    }
    else {
      stats.comparisons += 1;
      result.push(right[r++]);
    }
  }  
  //remaining part needs to be addred to the result
  return result.concat(left.slice(l)).concat(right.slice(r));
}

function mergeSort(arr){
  var len = arr.length;
  if(len <2)
     return arr;
  var mid = Math.floor(len/2),
      left = arr.slice(0,mid),
      right = arr.slice(mid);
  //send left and right to the mergeSort to broke it down into pieces
  //then merge those

  return merge(mergeSort(left),mergeSort(right));
}

module.exports = (target) => {
  const arr = Array.from(target); // New `workable` array construction
  const len = arr.length;

  const start = new Date().getTime();
  const result = mergeSort(arr);
  stats.time = new Date().getTime() - start;
  return {
    stats,
    result
  };
};