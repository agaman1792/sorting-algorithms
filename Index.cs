using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SortingAlgorithms
{
    class Index
    {
        public static void Main(String[] args)
        {
            int size = 10;
            
            int[] arr = Utils.RandArray(size).ToArray(); // Generate the test array
            int[] calibration = Utils.CalibrationArray(arr).ToArray(); // Generate the "calibration" array


            var bsr = BubbleSort.Sort(arr);
            Utils.PrintAlgorithmResult(bsr);

            Console.ReadKey();
        }
    }
}
