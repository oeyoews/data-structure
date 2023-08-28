import { Compare, defaultCompare } from '@/utils/Util';
import chalk from 'chalk';

/*
 * 插入排序会将数组分为已排序区域和未排序区域，将未排序区域的数组项和已排序区域的数组进行大小比较，确立要插入的位置，
 * 然后将其插入到对应的位置。
 */
export default class InsertionSort<T> {
  constructor(
    private array: T[] = [],
    private compareFn: ICompareFunction<T> = defaultCompare,
  ) {}

  getSortName() {
    return '排序算法: 插入排序';
  }
  sort() {}

  /*
   * swap function
   */
  private swap = (array: T[], current: number, next: number) => {
    const temp = array[current];
    array[current] = array[next];
    array[next] = temp;
  };
}
