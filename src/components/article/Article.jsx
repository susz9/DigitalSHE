/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <a href='https://www.facebook.com/ran.misstech' target='_blank'>Read Full Article</a>
    </div>
  </div>
);

export default Article;
