const express = require('express');
const app = express();
const port = 3000;

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Dvadeset20',
  database: 'test'
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  connection.query('SELECT * FROM test.user', (err, rows, fields) => {
    if (err) throw err
    res.send(rows);
  })
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

