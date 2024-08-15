import React from 'react';



const Header = () => {
  return (
    <header>
      <nav id='navbar'>
        <ul>
          <button id="nav-button"><a href="#home">Home</a></button>
          <button id="nav-button"><a href="#about">About</a></button>
          <button id="nav-button"><a href="#contact">Contact</a></button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
