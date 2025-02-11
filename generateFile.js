"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var generateRandomNumbers = function (num) {
    var data = '';
    for (var i = 0; i < num; i++) {
        data += Math.floor(Math.random() * 1000) + '\n';
    }
    return data;
};
// Функция записи данных в файл
var writeFile = function (fileName, data) {
    fs.writeFileSync(fileName, data, 'utf-8');
};
// Настройки
var numOfLines = 1000000; // Количество строк
var fileName = './large_input_file.txt'; // Имя файла
// Генерация случайных данных
var randomData = generateRandomNumbers(numOfLines);
// Запись данных в файл
writeFile(fileName, randomData);
console.log("\u0424\u0430\u0439\u043B ".concat(fileName, " \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D!"));
