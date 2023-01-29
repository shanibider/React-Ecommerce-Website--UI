//import express from 'express';

const express = require('express');
const app = express();

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.get('/api', (req, res) => {
  res.json({ users: ['userOne', 'userTwo', 'userThree'] });
});

app.listen(5000, () => {
  console.log('Listening on port 5000');
});
