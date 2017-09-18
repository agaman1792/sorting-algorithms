using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SortingAlgorithms
{
    class BubbleSort
    {
        public static AlgorithmResult Sort(IEnumerable<int> arr)
        {
            var stats = new AlgorithmStats();
            int len = arr.Count();
            int[] result = new int[len];
            Array.Copy(arr.ToArray(), result, len);

            int i, j, tmp;

            var watch = System.Diagnostics.Stopwatch.StartNew();
            // Bubble sort algorithm implementation
            for (i = len-1; i >= 0; i--)
            {
                for (j = 1; j <= i; j++)
                {
                    stats.Comparisons += 1;
                    if (result[j-1] > result[j])
                    {
                        stats.Swaps += 1;
                        tmp = result[j - 1];
                        result[j - 1] = result[j];
                        result[j] = tmp;
                    }
                }
            }
            // Done bubble sorting

            watch.Stop();
            stats.Time = (int) watch.ElapsedMilliseconds;

            return new AlgorithmResult
            {
                Result = result,
                Stats = stats
            };
        }
    }
}
