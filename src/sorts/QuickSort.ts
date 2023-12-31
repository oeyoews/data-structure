/*
 * 双指针, 枢纽元素
 */
import getSortType from '@/lib/getSortType';
import getVanillaArray from '@/lib/getVanillaArray';

export default class QuickSort {
  constructor(private array: number[]) {}

  sort() {
    const array = this.array;
    this.quickSort(array, 0, array.length - 1);
    getSortType('QuickSort');
    getVanillaArray(array);
  }

  quickSort(array: number[], low: number, high: number) {
    if (low < high) {
      // 返回的i不断进行拆分数组
      const pivotpos = this.partition(array, low, high);
      // 递归拆分
      this.quickSort(array, low, pivotpos);
      this.quickSort(array, pivotpos + 1, high);
    }
  }
  partition(array: number[], low: number, high: number) {
    const pivot = array[low];
    while (low < high) {
      // 顺序很重要
      while (low < high && array[high] >= pivot) {
        // 双层while, 所以需要再次判断, 外层的判断在这里不起作用
        high--;
      }
      array[low] = array[high];
      while (low < high && array[low] <= pivot) {
        low++;
      }
      array[high] = array[low];
    }
    array[low] = pivot; // 关键, 有序枢纽元素
    return low;
  }
}
