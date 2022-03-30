const users = [];

const addUser = ({ name, mobileNumber }) => {
  const existingUser = users.find(user => user.mobileNumber === mobileNumber);

  if (existingUser)
    return {
      error: { status: false, message: 'Account with number already exists' },
    };

  const user = { name, mobileNumber };
  users.push(user);

  return { user };
};

const getUser = mobileNumber =>
  users.find(user => user.mobileNumber === mobileNumber);

const removeUser = mobileNumber => {
  const idx = users.findIndex(user => user.mobileNumber === mobileNumber);

  if (idx !== -1) return users.splice(idx, 1)[0];
};

module.exports = { addUser, removeUser, getUser };
