import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__margin" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupB">
      <Article imgUrl={blog01} date="Jun 14, 2022" text="Wrap up of the project DigitalSHE 5 day training program at Khwopa Engineering College-KhEC." />
        <Article imgUrl={blog02} date="Jun 14, 2022" text="Thank you for your love and support, Khowpa College team, mentors,guest speaker, and female participants." />
        <Article imgUrl={blog03} date="Jun 13, 2022" text="3D printing learning at project digitalSHE training" />
        <Article imgUrl={blog04} date="Jun 12, 2022" text="Day 2 of Project DIGITAL SHE Training" />
        <Article imgUrl={blog05} date="Jun 10, 2022" text="Participants has installed Arduino and now learning hardware Interfacing and LED Blinking." />
      </div>
    </div>
  </div>
);

export default Blog;
