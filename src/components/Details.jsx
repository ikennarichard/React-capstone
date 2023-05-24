import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCityDetail } from '../redux/apiSlice';
import List from './List';
import styles from './Details.module.css';

export default function Details() {
  const { city } = useParams();
  const { cities, details, isLoading } = useSelector((state) => state.details);
  const dispatch = useDispatch();

  const cordinates = useRef();

  cities.filter((item) => item.officialName === city)
    .forEach((item) => {
      cordinates.current = [item.Latitude, item.Longitude];
    });

  useEffect(() => {
    dispatch(getCityDetail(cordinates.current));
  }, [dispatch, city]);

  return (
    <div className={styles.wrapper}>
      <ul style={{ listStyle: 'none' }}>
        {isLoading ? <li>Loading...</li>
          : details.map((item) => (
            <List
              city={city}
              aqi={item.main.aqi}
              no={item.components.no}
              co={item.components.co}
              no2={item.components.no2}
              so2={item.components.so2}
              o3={item.components.o3}
              key={crypto.randomUUID()}
              pm25={item.components.pm2_5}
            />
          ))}
      </ul>
    </div>
  );
}
