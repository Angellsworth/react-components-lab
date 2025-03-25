import React from 'react';

function WeatherIcon({ img, imgAlt }) {
  return <img className="image" src={img} alt={imgAlt} />;
}

export default WeatherIcon;