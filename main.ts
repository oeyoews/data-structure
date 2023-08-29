import check from '@/lib/check';
import prompts from 'prompts';

const array = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
const DEBUG = false;
const DEBUG_SORTTYPE = 'BubbleSort';

async function sort(sortType: SortType) {
  const module = await import(`@/src/${sortType}`);
  new module.default(array).sort();
}

// 使用 prompts 提示用户选择排序方法
async function promptForSortType() {
  const choices = [
    'BubbleSort',
    'SelectionSort',
    'InsertionSort',
    'QuickSort',
    'ShellSort',
    'MergeSort',
  ].map((sortType) => ({
    title: sortType.replace('Sort', ''),
    value: sortType as SortType,
  }));

  let selectedSortType: SortType;

  if (DEBUG) {
    selectedSortType = DEBUG_SORTTYPE;
  } else {
    const response = await prompts({
      type: 'select',
      name: 'sortType',
      message: '请选择排序方法:',
      choices,
    });
    selectedSortType = response.sortType;
  }

  await sort(selectedSortType);
  check(array);
}

promptForSortType().catch((error) => {
  console.error('出现错误:', error);
});
