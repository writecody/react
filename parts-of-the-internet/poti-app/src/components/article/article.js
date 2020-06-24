import React from 'react';
import './article.css';

const Article = ({headline, subhead, content})  => {

  headline = "Article Headline Example"
  subhead = "Subhead for this article"
  content = 'This is article content.';

  return (
<div className="article">
    <h2>{headline}</h2>
    <h3>{subhead}</h3>
    <p>{content}</p>
</div>
  )
} 

export default Article;