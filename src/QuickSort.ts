import { Compare, defaultCompare } from '@/utils/Util';

/*
 * 双指针
 */
export default class QuickSort<T> {
  constructor(
    private array: T[] = [],
    private compareFn: ICompareFunction<T> = defaultCompare,
  ) {}

  sort() {
    const array = this.array;
    return this.quick(array, 0, array.length - 1);
  }

  private quick(array: T[], left: number, right: number) {
    let index;
    const { length } = array;
    if (length > 1) {
      index = this.partition(array, left, right);
      if (left < index - 1) {
        this.quick(array, left, index - 1);
      }
      if (index < right) {
        this.quick(array, index, right);
      }
    }
    return array;
  }

  // 不断分区, 并且判断是否进行交换元素
  private partition(array: T[], left: number, right: number) {
    // 从数组中选择一个值做主元，此处选择数组的中间值
    const pivot = array[Math.floor((right + left) / 2)];
    // 创建数组引用，分别 指向 左边数组的第一个值和右边数组的第一个值
    let i = left;
    let j = right;

    // left指针和right指针没有相互交错，就执行划分操作
    while (i <= j) {
      // 双指针移动
      // 注意: 指针移动的前后会导致过程不同, pivot选的不同也会导致排序过程不同, 但是最终结果都是一样的
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
        // 关键步骤
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
