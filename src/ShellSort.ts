import getSortType from '@/lib/getSortType';

export default class ShellSort {
  constructor(private array: number[]) {}

  /*
   * 希尔排序
   */
  sort() {
    const array = this.array;
    const { length } = array;

    getSortType('ShellSort');

    let gap = Math.floor(length / 2);
    while (gap > 0) {
      for (let i = gap; i < length; i++) {
        const temp = array[i];
        let j = i - gap;
        while (j >= 0 && array[j] > temp) {
          array[j + gap] = array[j];
          j -= gap;
        }
        array[j + gap] = temp;
      }
      gap = Math.floor(gap / 2);
    }
  }
}
