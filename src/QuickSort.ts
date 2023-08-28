import { Compare, defaultCompare } from '@/utils/Util';

/*
 * 双指针
 */
export default class QuickSort<T> {
  constructor(
    private array: T[] = [],
    private compareFn: ICompareFunction<T> = defaultCompare,
  ) {}

  // 快速排序
  sort(): T[] {
    return this.quick(this.array, 0, this.array.length - 1);
  }

  /**
   *
   * @param array 待排序数组
   * @param left 左边界
   * @param right 右边界
   * @private
   */
  private quick(array: T[], left: number, right: number) {
    // 该变量用于将子数组分离为较小值数组和较大值数组
    let index;
    if (array.length > 1) {
      // 对给定子数组执行划分操作，得到正确的index
      index = this.partition(array, left, right);
      // 如果子数组存在较小值的元素，则对该数组重复这个过程
      if (left < index - 1) {
        this.quick(array, left, index - 1);
      }
      // 如果子数组存在较大值的元素，也对该数组重复这个过程
      if (index < right) {
        this.quick(array, index, right);
      }
    }
    return array;
  }

  // 划分函数
  private partition(array: T[], left: number, right: number): number {
    // 从数组中选择一个值做主元，此处选择数组的中间值
    const pivot = array[left];
    // 创建数组引用，分别指向左边数组的第一个值和右边数组的第一个值
    let i = left;
    let j = right;

    // left指针和right指针没有相互交错，就执行划分操作
    while (i <= j) {
      // 移动left指针直至找到一个比主元大的元素
      while (this.compareFn(array[i], pivot) === Compare.LESS_THAN) {
        i++;
      }

      // 移动right指针直至找到一个比主元小的元素
      while (this.compareFn(array[j], pivot) === Compare.BIGGER_THAN) {
        j--;
      }

      // 当左指针指向的元素比主元大且右指针指向的元素比主元小，并且左指针索引没有右指针索引大时就交换i和j号元素的位置，随后移动两个指针
      if (i <= j) {
        this.swap(array, i, j);
        i++;
        j--;
      }
    }
    // 划分结束，返回左指针索引
    return i;
  }

  private swap = (array: T[], current: number, next: number) => {
    const temp = array[current];
    array[current] = array[next];
    array[next] = temp;
  };
}
