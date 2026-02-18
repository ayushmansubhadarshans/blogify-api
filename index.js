const express = require('express');
const app = express();
const postsRouter = require('./src/routes/posts.routes');

app.use('/api/v1/posts', postsRouter);

app.get('/home', (req, res) => {
  res.send('Hey, This is our first backend server');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
