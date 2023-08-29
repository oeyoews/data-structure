import fs from 'fs';
import path from 'path';

export default function getAllSorts() {
  function getTsFiles() {
    const directoryPath = path.join(__dirname, '../src/sorts'); // 替换为你的实际路径
    const tsFiles: string[] = [];

    try {
      const files = fs.readdirSync(directoryPath);
      for (const file of files) {
        const filePath = path.join(directoryPath, file);
        const stats = fs.statSync(filePath);
        if (stats.isFile() && path.extname(file) === '.ts') {
          const fileName = path.basename(file, '.ts');
          tsFiles.push(fileName);
          // console.log(tsFiles);
        }
      }
      return tsFiles;
    } catch (error) {
      console.error('出现错误:', error);
    }
  }
  return getTsFiles();
}
