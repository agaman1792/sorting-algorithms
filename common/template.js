const stats = {
  comparisons: 0,
  swaps: 0,
  time: 0
};

function algorithm(input) {
  const result = [].concat(input); // New `workable` array construction
  const len = arr.length;

  const start = new Date().getTime();
  // Algorithm implementation here
  stats.time = new Date().getTime() - start;
  return result;
}

module.exports = (target) => ({
  result: algorithm(target),
  stats
});