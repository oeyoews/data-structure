import check from '@/lib/check';
import prompts from 'prompts';

const array = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));

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
  ].map((sortType) => ({
    title: sortType.replace('Sort', ''),
    value: sortType,
  }));
  const response = await prompts({
    type: 'select',
    name: 'sortType',
    message: '请选择排序方法:',
    choices,
  });

  const selectedSortType = response.sortType as SortType;
  await sort(selectedSortType);
  check(array);
}

promptForSortType().catch((error) => {
  console.error('出现错误:', error);
});
