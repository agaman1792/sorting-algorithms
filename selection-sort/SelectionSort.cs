using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SortingAlgorithms
{
    class SelectionSort
    {
        public static AlgorithmResult Sort(IEnumerable<int> arr)
        {
            var stats = new AlgorithmStats();
            int len = arr.Count();
            int[] result = new int[len];
            Array.Copy(arr.ToArray(), result, len);

            int i, j, minIdx, tmp;

            var watch = System.Diagnostics.Stopwatch.StartNew();

            // Selection sort algorithm implementation
            for (i = 0; i < len; i++)
            {
                minIdx = i;
                for (j = i + 1; j < len; j++)
                {
                    stats.Comparisons += 1;
                    if (result[j] < result[minIdx]) // Compare the current element to the local minimum
                        minIdx = j;
                }

                if (i != minIdx) // If we have found a valid element, perform the swap
                { 
                    stats.Swaps += 1;
                    tmp = result[i];
                    result[i] = result[minIdx];
                    result[minIdx] = tmp;
                }
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
