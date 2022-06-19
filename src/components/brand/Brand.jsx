import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import logo1 from '../../images/iHub.jpg'
import logo2 from '../../images/Khwopa TU.png'
import logo3 from '../../images/Khwopa.png'
import logo4 from '../../images/premier-logo.png'
import './brand.css';

const Brand = () => (
  <div>
    {/* <div className="gpt3__whatgpt3-heading section__margin">
      <h1 className="gradient__text">Our Partners</h1>
    </div> */}
    <div className="gpt3__brand section__padding">
      <div>
        <img src={logo1} />
      </div>
      <div style={{
        background: 'grey'
      }}>
        <img src={logo2} />
      </div>
      <div >
        <img src={logo3} className="round-logo"/>
      </div>
      <div>
        <img src={logo4} />
      </div>
      
    </div>
  </div>
);

export default Brand;
