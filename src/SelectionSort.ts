import { Compare, defaultCompare } from '@/utils/Util';
import chalk from 'chalk';

/*
 * 选择排序:
 *  1. 思路:
 *        选择排序是一种原址比较排序算法， 它的大致思路是找到数据结构中的最小值并将其放置在第一位，
 *        接着找到第二小的值将其放在第二位，依次类推
 *  2. 每轮找到最小元素的index, 然后交换元素
 *  3. 规律: 第一次遍历之后, 第一位数字是有序的
 */
export default class SelectionSort<T> {
  constructor(
    private array: T[] = [],
    private compareFn: ICompareFunction<T> = defaultCompare,
  ) {}

  getSortName() {
    return '排序算法: 选择排序';
  }
  sort() {
    const array = this.array;
    const { length } = array;
    // 假设有一个最小值为0, 并且放在第一位
    let minIndex = 0;
    for (let currentIndex = 0; currentIndex < length; currentIndex++) {
      // 初始值为外层循环当前遍历到的位置currentIndex
      minIndex = currentIndex;

      for (
        let comparisonIndex = currentIndex;
        comparisonIndex < length;
        comparisonIndex++
      ) {
        // 如果当前遍历到的元素小于minIndex位置的元素，就更新minIndex
        if (
          this.compareFn(array[minIndex], array[comparisonIndex]) ===
          Compare.BIGGER_THAN
        ) {
          minIndex = comparisonIndex;
        }
      }

      // 当前这一轮遍历结束后, 如果最小元素的索引发生变化，进行交换
      if (currentIndex !== minIndex) {
        this.swap(array, currentIndex, minIndex);
      }

      // 使用chalk为不同的数字添加不同的颜色
      const coloredArray = array.map((num, index) => {
        switch (true) {
          case index === minIndex:
            return chalk.red(num);
          case index === currentIndex:
            return chalk.green.bold.underline(num);
          default:
            return num;
        }
      });
      console.log(`第${currentIndex + 1}次遍历: ${coloredArray.join()}`);
    }
  }

  private swap = (array: T[], current: number, next: number) => {
    const temp = array[current];
    array[current] = array[next];
    array[next] = temp;
  };
}
