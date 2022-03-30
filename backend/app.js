const express = require('express');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');

const { addUser, removeUser, getUser } = require('./users');

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8000;
const SECRET_KEY = 'thisisaverylongandsecuredtext937361930374pleasekeepitsafe';

// app.post('/api/auth/register', (req, res) => {
//   const { username, mobileNumber } = req.body;

//   return res.status(200).json({ success: true, token: '3432gdsds8tyu' });
// });

const createToken = ({ name, mobileNumber }) => {
  return jwt.sign({ name, mobileNumber }, SECRET_KEY);
};

const server = app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

const io = require('socket.io')(server, {
  pingTimeout: 60000,
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
    let error;
    const decode = jwt.verify(token, SECRET_KEY);

    if (!decode.mobileNumber) error = { message: 'Something went wrong' };

    cb({ error, decode, token });
  });

  socket.on('message', ({ name, message }) => {
    socket.broadcast.emit('message', { name, message });
  });
});
