import BubbleSort from '@/src/BubbleSort';
import SelectionSort from '@/src/SelectionSort';

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

// bubbleSort.sort();
selectionSort.sort();

/*
 * 输出排序后的数组
 */
console.log(`排序后: ${array.join()}`);

/*
 * 检查排序后的数组是否和预期结果相等
 */
const isEqual = JSON.stringify(array) === JSON.stringify(expectedSortedArray);
console.log(`排序结果是否正确: ${isEqual ? '是' : '否'}`);
