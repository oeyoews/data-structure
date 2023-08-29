import check from '@/lib/check';

const array = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
/*
 * 测试
 */

async function sort(sortType: SortType) {
  const module = await import(`@/src/${sortType}`);
  new module.default(array).sort();
}

sort('ShellSort').then(() => {
  check(array);
});
