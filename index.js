const express = require('express');
const { Channel } = require('./models');

const app = express();
app.use(express.json());
app.get('/channel/:id', async (req, res, next) => {
  try {
    const channels = await Channel.findAll();
    console.log(channels);
    res.json(channels);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

app.listen(8080, () => console.log('server listening on port 8080'));
