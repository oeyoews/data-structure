import getSortType from '@/lib/getSortType';
import getVanillaArray from '@/lib/getVanillaArray';

export default class MergeSort {
  constructor(private array: number[]) {}

  // WIP
  sort(arr: number[]) {
    const array = this.array;
    const { length } = array;

    getSortType('MergeSort');
    getVanillaArray(array);
  }
}
