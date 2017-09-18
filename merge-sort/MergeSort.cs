using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SortingAlgorithms
{
    class MergeSort
    {
        private static readonly AlgorithmStats _stats = new AlgorithmStats();

        public static AlgorithmResult Sort(IEnumerable<int> arr)
        {
            var watch = System.Diagnostics.Stopwatch.StartNew();
            var result = MergeSortAlgorithm(arr);
            watch.Stop();
            _stats.Time = (int)watch.ElapsedMilliseconds;

            return new AlgorithmResult
            {
                Result = result,
                Stats = _stats
            };
        }

        private static IEnumerable<int> MergeSortAlgorithm(IEnumerable<int> arr)
        {
            var len = arr.Count();

            if (len < 2) return arr;

            int mid = (int) Math.Floor((decimal) len / 2);
            var left = arr.Take(mid);
            var right = arr.Skip(mid).Take(len - mid);

            return Merge(MergeSortAlgorithm(left), MergeSortAlgorithm(right));
        }

        private static IEnumerable<int> Merge(IEnumerable<int> left, IEnumerable<int> right)
        {
            List<int> result = new List<int>();
            int lLen = left.Count();
            int rLen = right.Count();
            int l = 0;
            int r = 0;

            while (l < lLen && r < rLen)
            {
                _stats.Comparisons += 1;
                if (left.ElementAt(l) < right.ElementAt(r))
                {
                    result.Add(left.ElementAt(l));
                    l++;
                }
                else
                {
                    result.Add(right.ElementAt(r));
                    r++;
                }
                    
            }

            return result.Concat(left.Skip(l).Take(lLen - l)).Concat(right.Skip(r).Take(rLen - r));
        }
    }
}
