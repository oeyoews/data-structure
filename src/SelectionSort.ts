export default class SelectionSort {
  constructor(private array: number[]) {}

  sort() {
    const array = this.array;
    const { length } = array;
    let minIndex, temp;
    for (let i = 0; i < length; i++) {
      minIndex = i;
      for (let j = i + 1; j < length; j++) {
        // 在剩余的表中, 选择最小的元素交换
        if (array[j] < array[minIndex]) {
          // swap method
          temp = array[minIndex];
          array[minIndex] = array[j];
          array[j] = temp;
        }
      }
    }
  }
}
