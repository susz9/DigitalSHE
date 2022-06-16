import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div>
    {/* <div className="gpt3__whatgpt3-heading section__margin">
      <h1 className="gradient__text">Our Partners</h1>
    </div> */}
    <div className="gpt3__brand section__padding">
      <div>
        <img src={google} />
      </div>
      <div>
        <img src={slack} />
      </div>
      <div>
        <img src={atlassian} />
      </div>
      <div>
        <img src={dropbox} />
      </div>
      <div>
        <img src={shopify} />
      </div>
    </div>
  </div>
);

export default Brand;
