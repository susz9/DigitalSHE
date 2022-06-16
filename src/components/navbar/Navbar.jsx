import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar ">
      <div className="gpt3__navbar-links ">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wDigitalSHE">What is Digital SHE?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Activities</a></p>
          <p><a href="#blog">Blog</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <button type="button">Register</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wDigitalSHE">What is Digital SHE?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Activites</a></p>
            <p><a href="#blog">Blog</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <button type="button">Register</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
