const Emitter = require('events');

const emitter = new Emitter();

const MESSAGE = 'hello';

// if (MESSAGE) {
//   emitter.emit('message', MESSAGE, 123);
// } else {
//   emitter.emit('message', 'Пустое сообщение.');
// }

const callback = (first, second, third) => {
  console.log('first arg', first);
  if (second) {
    console.log('second arg', second);
  }
  if (third) {
    console.log('third arg', third);
  }

};


emitter.on('message', callback);
emitter.emit('message', '1');
emitter.emit('message', '2');
emitter.removeListener('message', callback);
emitter.emit('message', '3');
emitter.once('message', callback);
emitter.emit('message', '4');
emitter.emit('message', '5');

emitter.removeListener('message', callback);

emitter.emit('message', '6');