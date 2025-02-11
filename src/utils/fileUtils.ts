import * as fs from 'fs';
import * as readline from 'readline';

// Чтение файла построчно
export const readFileLines = (filePath: string): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    const lines: string[] = [];
    const stream = fs.createReadStream(filePath, { encoding: 'utf8' });
    const rl = readline.createInterface({ input: stream });

    rl.on('line', (line) => lines.push(line));
    rl.on('close', () => resolve(lines));
    rl.on('error', (err) => reject(err));
  });
};

// Запись данных в файл
export const writeToFile = (filePath: string, data: string[]): Promise<void> => {
  return new Promise((resolve, reject) => {
    const outputStream = fs.createWriteStream(filePath);
    data.forEach((line) => outputStream.write(line + '\n'));
    outputStream.end(() => resolve());
  });
};