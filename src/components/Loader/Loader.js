import React from 'react';
import './loader.scss';

const image = require('./loading.svg');

const Loader = (props) => {
  return (
    <img className="loader" src={image} alt="loading..."/>
  );
}

export default Loader;