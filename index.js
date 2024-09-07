const PORT = process.env.PORT || 7777;
const Application = require('./framework/Application');
const userRouter = require('./src/user-router');
const jsonParse = require('./framework/parseJson');
const bodyParse = require('./framework/bodyParse');
const app = new Application();

app.use(jsonParse);

app.addRouter(userRouter);

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
