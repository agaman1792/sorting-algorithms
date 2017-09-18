using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SortingAlgorithms
{
    class Utils
    {
        public const int ARR_LEN_VALUE = 1000;
        public const int ARR_MIN_VALUE = 0;
        public const int ARR_MAX_VALUE = 100000;

        private static readonly Random _random = new Random();

        public static IEnumerable<int> RandArray(int size = ARR_LEN_VALUE, int min = ARR_MIN_VALUE, int max = ARR_MAX_VALUE)
            => Enumerable.Range(0, size).Select(val => _random.Next(min, max));

        public static IEnumerable<int> CalibrationArray(IEnumerable<int> arr)
        {
            var calibration = new int[arr.Count()];
            Array.Copy(arr.ToArray(), calibration, arr.Count());
            Array.Sort(calibration);

            return calibration;
        }
    }
}
