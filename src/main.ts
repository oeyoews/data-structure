import check from '@/lib/check';
import prompts from 'prompts';
import getAllSorts from '@/lib/getAllSorts';

const array = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
const DEBUG = false;
const DEBUG_SORTTYPE = 'BubbleSort';

// 这里的类型声明其实是不会被感知到的, 因为是动态获取sorts
const allSorts = getAllSorts() as SortType[];

async function sort(sortType: SortType) {
  const module = await import(`@/src/sorts/${sortType}`);
  new module.default(array).sort();
}

// 使用 prompts 提示用户选择排序方法
async function promptForSortType() {
  const choices = allSorts.map((sortType) => ({
    title: sortType.replace('Sort', ''),
    value: sortType,
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
