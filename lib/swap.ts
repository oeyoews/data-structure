export default function swap(
  array: number[],
  currentIndex: number,
  nextIndex: number,
) {
  const temp = array[currentIndex];
  array[currentIndex] = array[nextIndex];
  array[nextIndex] = temp;
}
