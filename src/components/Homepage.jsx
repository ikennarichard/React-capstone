import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Homepage.module.css';
import cities from '../states.json';

export default function Homepage() {
  const [query, setQuery] = useState('');
  const filteredItems = cities.filter(
    (item) => item.officialName.toLowerCase().includes(
      query.toLowerCase(),
    ),
  );

  return (
    <>
      <header>
        <h1>aircheck</h1>
      </header>
      <div>
        <input
          type="search"
          value={query}
          placeholder="Enter state name"
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className={styles.card} data-testid="card">
          {filteredItems.map((item) => (
            <section
              key={item.officialName}
              className={styles.details}
            >
              <h2>
                <Link
                  to={`/details/${item.officialName}`}
                  className={styles.links}
                >
                  {item.officialName}
                </Link>
              </h2>
              <small>{item.Capital}</small>
              <p>
                {`Population - ${item.Population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
              </p>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
