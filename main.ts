import BubbleSort from '@/src/BubbleSort';
import SelectionSort from '@/src/SelectionSort';
import InsertionSort from '@/src/InsertionSort';
import chalk from 'chalk';
import QuickSort from '@/src/QuickSort';

/*
 * 生成随机数组
 */
const array = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
const expectedSortedArray = [...array].sort((a, b) => a - b);
console.log(`排序前: ${array.join()}`);

/*
 * 测试
 */
const bubbleSort = new BubbleSort(array);
const selectionSort = new SelectionSort(array);
const insertionSort = new InsertionSort(array);
const quickSort = new QuickSort(array);

// bubbleSort.sort();
// selectionSort.sort();
// insertionSort.sort();
quickSort.sort();

/*
 * 输出排序后的数组
 */
console.log(`排序后: ${array.join()}`);

/*
 * 检查排序后的数组是否和预期结果相等
 */
const isEqual = JSON.stringify(array) === JSON.stringify(expectedSortedArray);
console.log(`预期数组: ${expectedSortedArray.join()}`);
console.log(
  `排序结果是否正确: ${isEqual ? chalk.green('是') : chalk.red('否')}`,
);
