const fs = require('fs');
const path = require('path');

// fs.mkdirSync(path.resolve(__dirname, 'dir'));
// fs.writeFile(path.resolve(__dirname, 'dir', 'test.txt'), '123testHello456qfana789', (err) => {
//   if (err) return err;
//   console.log('write');
// });

for (let i = 23;i < 10000000;i += 23)
  fs.appendFile(path.resolve(__dirname, 'dir', 'test.txt'), '123testHello456qfana789', (err) => {
    if (err) return err;
  });
console.log('append');