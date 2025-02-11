import * as fs from 'fs';

const generateRandomNumbers = (num: number) => {
    let data = '';
    for (let i = 0; i < num; i++) {
        data += Math.floor(Math.random() * 1000) + '\n';
    }
    return data;
};

// Функция записи данных в файл
const writeFile = (fileName: string, data: string) => {
    fs.writeFileSync(fileName, data, 'utf-8');
};

// Настройки
const numOfLines = 1000000; // Количество строк
const fileName = './large_input_file.txt'; // Имя файла

// Генерация случайных данных
const randomData = generateRandomNumbers(numOfLines);

// Запись данных в файл
writeFile(fileName, randomData);

console.log(`Файл ${fileName} успешно создан!`);