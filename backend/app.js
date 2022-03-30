const express = require('express');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
require('dotenv').config();

const {
  addUser,
  addUserToActiveBucket,
  removeUser,
  getActiveUsers,
  getActiveUser,
  getUser,
  removeActiveUser,
} = require('./users');

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8000;

const createToken = ({ name, mobileNumber }) => {
  return jwt.sign({ name, mobileNumber }, process.env.SECRET_KEY);
};

const server = app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

const io = require('socket.io')(server, {
  // pingTimeout: 60000,
  cors: {
    origin: 'http://localhost:3000',
  },
});

io.on('connection', socket => {
  socket.on('register', ({ name, mobileNumber }, cb) => {
    const { error, user } = addUser({ name, mobileNumber });

    if (error) return cb({ error, user });

    const registerToken = createToken({ name, mobileNumber });

    cb({ error, user, registerToken });
  });

  socket.on('login', (token, cb) => {
    let error, decode;
    try {
      decode = jwt.verify(token, process.env.SECRET_KEY);

      if (!decode.mobileNumber) error = { message: 'Something went wrong' };

      const { name, mobileNumber } = decode;
      addUserToActiveBucket({ name, mobileNumber });
    } catch (err) {
      error = { message: 'Invalid Token' };
      decode = null;
    }

    cb({ error, decode, token });
  });

  socket.on('logout', (mobileNumber, cb) => {
    let error,
      success = false;
    const flag = removeActiveUser(mobileNumber);

    if (!flag) error = { message: 'Something went wrong' };
    else success = true;

    cb(error, success);
  });

  socket.on('getOpponentUser', (id, cb) => {
    const mobileNumber = id;
    const opponentUser = getActiveUser(mobileNumber);
    cb(opponentUser);
  });

  socket.on('activeUsers', cb => {
    const actveUsrs = getActiveUsers();
    cb(actveUsrs);
  });

  socket.on('message', ({ name, message }) => {
    socket.broadcast.emit('message', { name, message });
  });
});
