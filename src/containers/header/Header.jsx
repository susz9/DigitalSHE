/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import ai from '../../assets/ai.png';
import girl from '../../assets/girl.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__margin" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text" data-aos="fade-right">Let&apos;s bridge the digital gender inequality.
      </h1>
      <p data-aos="fade-right">To transfer Low tech ICT knowledge &amp; skills for the greater participation of young women at rural areas. Creating an environment where young women can do their own business in ICT sector and led companies and ideas into implementable product.</p>
     

    </div>

    <div className="gpt3__header-image">
      <img src={girl} alt="header image" data-aos="fade-left"/>
    </div>
  </div>
);

export default Header;
