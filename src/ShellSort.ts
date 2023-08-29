import getSortType from '@/lib/getSortType';
import getVanillaArray from '@/lib/getVanillaArray';

export default class ShellSort {
  constructor(private array: number[]) {}

  sort() {
    const array = this.array;
    const { length } = array;

    getSortType('ShellSort');
    getVanillaArray(array);

    let gap = Math.floor(length / 2);
    // 希尔排序: 在插入排序的前提下提前进行块的划分
    // 每次比较两端的数字
    while (gap > 0) {
      for (let i = gap; i < length; i++) {
        const current = array[i]; // 因为是gap间隔, 所以不用-1
        let j = i - gap;
        while (j >= 0 && array[j] > current) {
          // 交换元素
          array[j + gap] = array[j];
          j -= gap;
        }
        // j + gap 的值一直后移, 不断比较两个元素,判断是否进行交换
        array[j + gap] = current;
      }
      // 每次遍历增量 gap/2
      gap = Math.floor(gap / 2);
    }
  }
}
