/*
 * 双指针
 * c 语言的ts版本
 */
export default class QuickSort<T> {
  constructor(private array: T[] = []) {}
  sort() {
    this.quickSort(this.array, 0, this.array.length - 1);
  }
  quickSort(array: T[], low: number, high: number) {
    if (low < high) {
      // 返回的i不断进行拆分数组
      const pivotpos = this.partition(array, low, high);
      // 递归拆分
      this.quickSort(array, low, pivotpos);
      this.quickSort(array, pivotpos + 1, high);
    }
  }
  partition(array: T[], low: number, high: number) {
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
