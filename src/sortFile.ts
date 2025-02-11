import { readFileLines, writeToFile } from './utils/fileUtils';
import { mergeSort } from './mergeSort/mergeSort';

const inputFile = './large_input_file.txt';
const outputFile = './sorted_file.txt';

async function sortFile() {
    try {
        const lines = await readFileLines(inputFile);
        const sortedLines = mergeSort(lines);
        await writeToFile(outputFile, sortedLines);
        console.log('Файл успешно отсортирован и записан в', outputFile);
    } catch (error) {
        console.error('Ошибка при сортировке:', error);
    }
}

sortFile();