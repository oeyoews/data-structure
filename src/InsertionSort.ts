import { Compare, defaultCompare } from '@/utils/Util';

/*
 * 插入排序会将数组分为已排序区域和未排序区域，将未排序区域的数组项和已排序区域的数组进行大小比较，确立要插入的位置，
 * 然后将其插入到对应的位置。
 * 第一次遍历结束后, 第一个位置的元素可能是有序的
 * 每次排序都是把较小的元素放在前面,把较大的元素放在后面
 * 前面的元素是有序的, 后面的元素是无序的
 * 之所以叫做插入排序, 每次从未排序部分取出一个元素，插入到已排序部分的合适位置，直至整个数组有序。
 */
export default class InsertionSort<T> {
  constructor(
    private array: T[] = [],
    private compareFn: ICompareFunction<T> = defaultCompare,
  ) {}

  getSortName() {
    return '排序算法: 插入排序';
  }
  sort() {
    const array = this.array;
    let temp;
    const { length } = array;
    for (let currentIndex = 1; currentIndex < length; currentIndex++) {
      let insertIndex = currentIndex;
      // 提前保存元素
      temp = array[insertIndex];
      while (
        insertIndex > 0 &&
        this.compareFn(array[insertIndex - 1], temp) === Compare.BIGGER_THAN
      ) {
        // 插入元素, 把小的元素放在后面
        array[insertIndex] = array[insertIndex - 1];
        insertIndex--;
      }
      // 完成插入步骤(其实是swap的变体)
      array[insertIndex] = temp;
      console.log(array.join());
    }
  }
}
