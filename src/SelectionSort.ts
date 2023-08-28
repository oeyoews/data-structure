import { Compare, defaultCompare } from '@/utils/Util';

/*
 * 排列顺序: 升序(从小到大)
 * 排序主要是数组元素位置之间的交换
 * 注意: 算法中的变量写成i,j有助于提高书写速度, 但是对理解算法丝毫没有帮助, 即使很简单, 自己也要回想i,j的变量表示什么含义, 这真的不符合程序的书写规, 建议自己练习的时候语义化变量名
 */
export default class SelectionSort<T> {
  constructor(
    private array: T[] = [],
    private compareFn: ICompareFunction<T> = defaultCompare,
  ) {}

  /*
   * 选择排序:
   *  1. 双重for循环: ...;
   *  2. 每轮找到最小元素index, 然后交换元素
   *  6. 第一次遍历之后, 第一位数字是有序的
   */
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

      console.log(`第${currentIndex + 1}次遍历: ${array.join()}`);
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
