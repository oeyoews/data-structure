import getSortType from '@/lib/getSortType';
import getVanillaArray from '@/lib/getVanillaArray';

export default class BinaryInsertionSort {
  constructor(private array: number[]) {}

  sort() {
    const array = this.array;
    const { length } = array;

    getSortType('BinaryInsertionSort');
    getVanillaArray(array);

    /* core */
  }
}
