import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function List({
  co, no, no2, o3, so2, aqi,
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
        <p>
          {`Carbon: ${co}μg/m3`}
        </p>
        <p>
          {`Nitrogen Dioxide: ${no2}μg/m3`}
        </p>
        <p>
          {`Nitrogen Monoxide: ${no}μg/m3`}
        </p>
        <p>
          {`Sulphur Dioxide: ${so2}μg/m3`}
        </p>
        <p>
          {`Ozone: ${o3}μg/m3`}
        </p>
        <p>
          {`Air Quality Index: ${aqi} (${rating})`}
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
};
