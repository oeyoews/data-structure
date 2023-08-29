import chalk from 'chalk';

export default function check(array: number[]) {
  const expectedSortedArray = [...array].sort((a, b) => a - b);

  console.log(`排序后: ${array.join()}`);

  const isEqual = JSON.stringify(array) === JSON.stringify(expectedSortedArray);

  console.log(`预期数组: ${expectedSortedArray.join()}`);
  console.log(
    `排序结果是否正确: ${isEqual ? chalk.green('是') : chalk.red('否')}`,
  );
}
