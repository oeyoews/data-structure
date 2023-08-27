import BubbleSort from './src/BubbleSort';
import SelectionSort from './src/SelectionSort';

// TODO: 显示每一次遍历后的数组
/*
 * 生成随机数组
 * 实例化sort, 并且同时传入随机数组参数
 */
const array = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
const expectedSortedArray = [...array].sort((a, b) => a - b);
console.log(`排序前: ${array.join()}`);

const bubbleSort = new BubbleSort(array);
const selectionSort = new SelectionSort(array);
bubbleSort.sort();
selectionSort.sort();

/*
 * 输出排序后的数组
 */
console.log(`排序后: ${array.join()}`);
// 检查排序后的数组是否和预期结果相等
const isEqual = JSON.stringify(array) === JSON.stringify(expectedSortedArray);
console.log(`排序结果是否正确: ${isEqual ? '是' : '否'}`);
console.log();
