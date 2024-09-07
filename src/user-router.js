const Router = require('../framework/Router');

const router = new Router();

const users = [
  { id: 1, nick: 'qfana' },
  { id: 2, nick: 'test' },
  { id: 3, nick: 'test name' },
];

router.get('/users', (req, res) => {

  res.send(users);
});

router.post('/users', (req, res) => {
  console.log(req.body);
  const user = req.body;
  users.push(user);
  res.send(user);
});

module.exports = router;