import getSortType from '@/lib/getSortType';
import getVanillaArray from '@/lib/getVanillaArray';

export default class InsertionSort {
  constructor(private array: number[]) {}

  sort() {
    const array = this.array;
    const { length } = array;

    getSortType('InsertionSort');
    getVanillaArray(array);

    let preIndex, current;
    for (let i = 1; i < length; i++) {
      preIndex = i - 1;
      // 保存当前值
      current = array[i];
      while (preIndex >= 0 && array[preIndex] > current) {
        // 一直在换元素,因为元素要整体后移 即所谓的元素插入,
        array[preIndex + 1] = array[preIndex];
        preIndex--;
      }
      array[preIndex + 1] = current;
    }
  }
}
