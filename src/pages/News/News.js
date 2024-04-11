import React from 'react';
import Card from './../../components/Card/Card'; // Import the Card component
import './News.css' ;
import news1 from '../../assets/News1.jpeg' ;



const articles = [ // Define your news data directly within the component
  {
    image: news1,
    tagline: 'Headline 1',
    description: 'Two-line description of the news article lorem30sflmfsdjkfsdfs 1sasssssaaasassassasssssssssssssssssssssssssss.....',
    url: 'https://www.google.com', // Redirect URL for tagline click
  },{
    image: news1,
    tagline: 'Headline 1',
    description: 'Two-line description of the news article 1.....',
    url: 'https://www.google.com', // Redirect URL for tagline click
  },{
    image: news1,
    tagline: 'Headline 1',
    description: 'Two-line description of the news article 1.....',
    url: 'https://www.google.com', // Redirect URL for tagline click
  },{
    image: news1,
    tagline: 'Headline 1',
    description: 'Two-line description of the news article 1.....',
    url: 'https://www.google.com', // Redirect URL for tagline click
  },{
    image: news1,
    tagline: 'Headline 1',
    description: 'Two-line description of the news article 1.....',
    url: 'https://www.google.com', // Redirect URL for tagline click
  },{
    image: news1,
    tagline: 'Headline 1',
    description: 'Two-line description of the news article 1.....',
    url: 'https://www.google.com', // Redirect URL for tagline click
  },{
    image: news1,
    tagline: 'Headline 1',
    description: 'Two-line description of the news article 1.....',
    url: 'https://www.google.com', // Redirect URL for tagline click
  },{
    image: news1,
    tagline: 'Headline 1',
    description: 'Two-line description of the news article 1.....',
    url: 'https://www.google.com', // Redirect URL for tagline click
  },
];

const News = () => {
  return (
    <div className="news-container">
      <div className="grid-container">
        {articles.map((article, index) => (
          <Card
            key={index}
            image={article.image}
            tagline={article.tagline}
            description={article.description}
            url={article.url}
          />
        ))}
      </div>
    </div>
  );
};

export default News;