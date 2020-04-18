import React from 'react';
import './Home.scss';

const image = require('../../assets/images/home.jpg');

const Home = (props) => {
  
  return (
    <section className="home">
      <h1>Home</h1>
      <img className="home__img" src={image} alt="Home image"/>
    </section>
  );
}

export default Home;