import React from 'react';
import Feature from '../../components/feature/Feature';
import './DigitalSHE.css';

const DigitalSHE = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wDigitalSHE" >
    <div className="gpt3__whatgpt3-feature" data-aos="fade-right">
      <Feature title="What is Digital SHE?" text="Project Digital SHE at Province 3 aims to bring together 40 women studying IT and Engineering, train them with high end tech skills and 110 women studying +2 college, train them with low end skills in the first year. They will then compete in Miss Tech 2022 and showcase their prototype and pitch their business plan. These budding entrepreneurs will have innovative ideas and products and will be engaged in Nepal’s biggest product incubation program afterwards that aims to build innovative local products that can solve local challenges." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text" data-aos="fade-right">The possibilities are beyond your imagination</h1>
      <a href='https://www.facebook.com/ran.misstech' target='_blank'>Know more</a>
    </div>
    <div className="gpt3__whatgpt3-container" data-aos="fade-up">
    <Feature title="Women in ICT" text="Prioritize women from minority &amp; financially weak family background."/>
      <Feature title="Skills transfer" text="High-end tech skills transfer to 150 young women from engineering &amp; IT background from urban areas and low-end tech skills transfer to young women from rural areas of Nepal." />
      <Feature title="Paid Internship" text="3-month paid internship for young women in ICT sector." />
    </div>
  </div>
);

export default DigitalSHE;
