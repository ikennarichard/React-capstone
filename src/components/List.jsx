import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './List.module.css';

export default function List({
  co, no, no2, o3, so2, aqi, city, pm25,
}) {
  const [rating, setRating] = useState('');

  useEffect(() => {
    switch (aqi) {
      case 1: setRating('Good');
        break;
      case 2: setRating('Fair');
        break;
      case 3: setRating('Moderate');
        break;
      case 4: setRating('Poor');
        break;
      case 5: setRating('Very Poor');
        break;
      default: setRating('');
    }
  }, [aqi]);

  return (
    <li>
      <div>
        <h2 className={styles.subHeading}>
          { `${city} State` }
          <br />
          <small>{`Air Quality Index: ${aqi} (${rating})`}</small>
        </h2>
        <p className={styles.listItem}>
          Particulates PM2.5
          <span>{` ${pm25} μg/m3`}</span>
        </p>

        <p>
          Carbon:
          <span>{`${co} μg/m3`}</span>
        </p>
        <p>
          Nitrogen Dioxide:
          <span>{`${no2} μg/m3`}</span>
        </p>
        <p>
          Nitrogen Monoxide:
          <span>{`${no} μg/m3`}</span>
        </p>
        <p>
          Sulpher Dioxide:
          <span>{`${so2} μg/m3`}</span>
        </p>
        <p>
          Ozone:
          <span>{`${o3} μg/m3`}</span>
        </p>
      </div>
    </li>
  );
}

List.propTypes = {
  co: PropTypes.number.isRequired,
  no: PropTypes.number.isRequired,
  no2: PropTypes.number.isRequired,
  o3: PropTypes.number.isRequired,
  so2: PropTypes.number.isRequired,
  aqi: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  pm25: PropTypes.number.isRequired,
};
