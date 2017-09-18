using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SortingAlgorithms
{
    class InsertionSort
    {
        public static AlgorithmResult Sort(IEnumerable<int> arr)
        {
            var stats = new AlgorithmStats();
            int len = arr.Count();
            int[] result = new int[len];
            Array.Copy(arr.ToArray(), result, len);

            int i, j, el;

            var watch = System.Diagnostics.Stopwatch.StartNew();

            // Selection sort algorithm implementation
            for (i = 1; i < len; i++)
            {
                el = result[i];
                j = i;

                while (j > 0 && result[j - 1] > el)
                {
                    stats.Comparisons += 1;
                    result[j] = result[j - 1];
                    j--;
                }

                result[j] = el;
            }
            // Done selection sorting

            watch.Stop();
            stats.Time = (int)watch.ElapsedMilliseconds;

            return new AlgorithmResult
            {
                Result = result,
                Stats = stats
            };
        }
    }
}
