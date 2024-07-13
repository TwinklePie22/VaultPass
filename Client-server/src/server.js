// /server/server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const vaultRouter = require('./routes/vaultRouter');
const loginRouter = require('./routes/loginRouter');
const registerRouter = require('./routes/registerRouter');

// mongoose.connect('mongodb://localhost:27017/yourdbname', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

app.use(express.json()); // Middleware to parse req body as JSON object


app.use('/api/session', loginRouter);
app.use('/api/vault', vaultRouter);
app.use('/api/register', registerRouter);

app.listen(5000, function() {
  console.log('The server is listening to port 5000...');
});
