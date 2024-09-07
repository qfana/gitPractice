const { log } = require('console');
const fs = require('fs');
const path = require('path');

// кратко об пройденом
// стримы нужны что бы читать и передавать код не целиком а кусочками (пример: прочитал часть кода и сразу его передал, пошел дальше читать - передал и так пока не закончится)

// fs.readFile(path.resolve(__dirname, 'dir', 'test.txt'), (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// const stream = fs.createReadStream(path.resolve(__dirname, 'dir', 'test.txt'), { encoding: 'utf-8' });

// stream.on('data', (chunk) => {
//   console.log(chunk);
// });

// stream.on('end', () => console.log('End reading'));
// stream.on('open', () => console.log('Start reading'));
// stream.on('error', (e) => console.log(e));

const writableStream = fs.createWriteStream(path.resolve(__dirname, 'dir', 'test2.txt'));

for (let i = 0;i < 20;i++) {
  writableStream.write(i + '\n');
}


writableStream.end(() => {
  console.log('end');

});

writableStream.write(() => {
  console.log('2');

});

// Заметка: При работа с http используется request (req) и respone (res) 