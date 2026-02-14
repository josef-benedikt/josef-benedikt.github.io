import React from 'react';
import aboutData from './about.json';
import './styles.css';

const About = () => {
  return (
    <div className="about">
      <h1>{aboutData.companyTitle}</h1>
      <p>{aboutData.companyDescription}</p>
      
      <h1>{aboutData.ownerTitle}</h1>
      <p>{aboutData.ownerDescription}</p>
    </div>
  );
};

export default About;