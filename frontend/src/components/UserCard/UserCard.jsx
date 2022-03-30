import React from 'react';

import './UserCard.css';

const UserCard = ({ name, number }) => {
  return (
    <div className="user-card">
      <div className="user-pic">
        <div className="img"></div>
      </div>
      <div className="user-detail">
        <div className="name">{name}</div>
        <div className="number">{number}</div>
      </div>
    </div>
  );
};

export default UserCard;
