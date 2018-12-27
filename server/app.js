const express = require('express');
app = express();
const mongoose = require('mongoose');

const users = [
  {
    name: 'Jeff',
    age: 29,
    gender: 'Male'
  },
  {
    name: 'Jay',
    age: 30,
    gender: 'Male'
  },
  {
    name: 'Aly',
    age: 27,
    gender: 'Female'
  }
]

app.get('/api', (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log("API Server listening on 3000");
});
