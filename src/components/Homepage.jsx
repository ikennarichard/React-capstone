import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Homepage.module.css';
import { RightArrow } from '../icons/icons';

export default function Homepage() {
  const [query, setQuery] = useState('');
  const { cities } = useSelector((state) => state.details);
  const navigate = useNavigate();

  function handleClick(city) {
    navigate(`/details/${city}`);
  }

  const filteredItems = cities.filter(
    (item) => item.officialName.toLowerCase().includes(
      query.toLowerCase(),
    ),
  );

  return (
    <>
      <div className={styles.wrapper}>
        <input
          type="search"
          value={query}
          placeholder="Enter state in Nigeria"
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className={styles.card} data-testid="card">
          {filteredItems.map((item) => (
            <section
              key={item.officialName}
              className={styles.details}
              onClick={() => handleClick(item.officialName)}
              role="presentation"
            >
              <RightArrow />
              <div>
                <h2 className={styles.stateName}>
                  {item.officialName}
                </h2>
                <p>
                  {`Population - ${item.Population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
                </p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
