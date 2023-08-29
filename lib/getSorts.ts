import * as fs from 'fs/promises';
import * as path from 'path';

export default function getSorts() {
  async function getTsFiles() {
    const directoryPath = path.join(__dirname, 'src/sorts'); // 替换为你的实际路径
    const tsFiles: string[] = [];

    try {
      const files = await fs.readdir(directoryPath);
      for (const file of files) {
        const filePath = path.join(directoryPath, file);
        const stats = await fs.stat(filePath);
        if (stats.isFile() && path.extname(file) === '.ts') {
          const fileName = path.basename(file, '.ts');
          tsFiles.push(fileName);
        }
      }
      console.log(tsFiles); // 输出所有 .ts 文件名（不带扩展名）
    } catch (error) {
      console.error('出现错误:', error);
    }
  }

  getTsFiles();
}
