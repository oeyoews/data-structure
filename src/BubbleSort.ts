import swap from '@/lib/swap';
import getSortType from '@/lib/getSortType';
import getVanillaArray from '@/lib/getVanillaArray';

export default class BubbleSort {
  constructor(private array: number[]) {}

  sort() {
    const array = this.array;
    const { length } = array;

    getSortType('BubbleSort');
    getVanillaArray(array);

    for (let i = 0; i < length - 1; i++) {
      let flag = false;
      // 从后面开始冒泡, 所以j = length-1(这里从后面往前冒泡, 把大的元素放在后面)
      for (let j = length - 1; j > i; j--) {
        if (array[j - 1] > array[j]) {
          swap(array, j - 1, j);
          flag = true;
        }
      }
      // 如果某次遍历没有进行交换元素, 说明表已经全部排列有序, 冒泡排序结束
      if (!flag) {
        return;
      }
    }
  }
}
