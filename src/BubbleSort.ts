import { Compare, defaultCompare } from '@/utils/Util';
import chalk from 'chalk';

/*
 * 排列顺序: 升序(从小到大)
 * 排序主要是数组元素位置之间的交换
 * 注意: 算法中的变量写成i,j有助于提高书写速度, 但是对理解算法丝毫没有帮助, 即使很简单, 自己也要回想i,j的变量表示什么含义, 这真的不符合程序的书写规, 建议自己练习的时候语义化变量名
 */
export default class BubbleSort<T> {
  constructor(
    private array: T[] = [],
    private compareFn: ICompareFunction<T> = defaultCompare,
  ) {}

  /*
   * 冒泡排序:
   *  1. 双重for循环: ...;
   *  2. 相邻元素进行比较(compareFn),判断是否进行交换元素(swap);
   *  3. 稳定算法: 相邻元素只有不等时才会进行交换, 相等的元素不会进行交换, 属于稳定算法
   *  4. 复杂度: O(n^2) 最坏情况下，冒泡排序需要进行n-1轮比较和交换，每轮需要比较n-i次（i为当前轮数）。因此，总的比较次数是 (n-1) + (n-2) + ... + 1，这是一个等差数列，求和公式为：(n^2 - n) / 2。所以，冒泡排序的比较次数是O(n^2)。
   *  5. 注意: 在大规模数据上性能较差，不适用于大规模数据的排序。
   *  6. 第一次遍历之后, 最后一位数字是有序的
   */
  sort() {
    const array = this.array;
    const { length } = array; // 数组长度
    for (let currentRound = 0; currentRound < length; currentRound++) {
      // 从数组的0号元素遍历到数组的倒数第2号元素，然后减去外层已经遍历的轮数
      for (
        let elementIndex = 0;
        elementIndex < length - 1 - currentRound;
        elementIndex++
      ) {
        if (
          this.compareFn(array[elementIndex], array[elementIndex + 1]) ===
          Compare.BIGGER_THAN
        ) {
          this.swap(array, elementIndex, elementIndex + 1);
        }
      }
      const coloredUnsortPart = array.map((num, index) => {
        switch (true) {
          case index >= length - 1 - currentRound:
            return chalk.green(num);
          default:
            return num;
        }
      });
      console.log(`第${currentRound + 1}次遍历: ${coloredUnsortPart.join()}`);
    }
  }
  /*
   * swap function
   */
  private swap = (array: T[], current: number, next: number) => {
    const temp = array[current];
    array[current] = array[next];
    array[next] = temp;
  };
}
