import React from 'react';

const Header = ({userData}) => {
  return (
    <div id="header">
      <span id="name">{userData.name}</span>
    </div>
  );
}

export default Header;
