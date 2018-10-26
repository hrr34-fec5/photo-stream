const Express = require('express');
const app = Express();
const BodyParser = require('body-parser');
const port = 8080;

app.use(BodyParser.json());

app.get('/', (req, res) => {
  res.send('Placeholder text');
});

app.listen(port, () => console.log(`Listening on port: ${port}`));