const os = require('os');
const cluster = require('cluster');
const dotenv = require('dotenv');

console.log('Платформа:', os.platform());
console.log('Архитектура:', os.arch());
console.log('Кол-во потоков:', (os.cpus().length));

function randomHash() {
  return Math.random() * 10;
}

if (cluster.isMaster) {
  for (let i = 1;i <= os.cpus().length;i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker) => {
    console.log(`Воркер с pid = ${worker.process.pid} умер`);
    cluster.fork();
  });
} else {
  console.log(`Воркер с pid= ${process.pid} запущен`);

  setInterval(() => {
    console.log(`В работе воркер; pid= ${process.pid}`);
  }, 5000);
}
