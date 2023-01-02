const express = require('express');
const app = express();
const port = 3000;

// http://expressjs.com/en/starter/static-files.html#serving-static-files-in-express
app.use(express.static('public'));

// https://expressjs.com/en/guide/routing.html
app.get('/', (req, res) => {
  res.send('Hello World!');
});

function getUserFromDB(userId) {
  return {
    id: userId,
    name: (Math.random() + 1).toString(36).substring(7),
    createdAt: new Date()
  }
}

// https://expressjs.com/en/guide/routing.html
app.get('/user/:userId', function(req, res) {
  console.log(req.params.userId);

  res.send(getUserFromDB(req.params.userId));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});