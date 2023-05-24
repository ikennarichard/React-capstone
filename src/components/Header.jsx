import { NavLink } from 'react-router-dom';
import { ChevroLeft, Settiings } from '../icons/icons';
import styles from './Header.module.css';

export default function NavBar() {
  return (
    <header className={styles.header}>
      <nav>
        <NavLink to="/">
          <ChevroLeft />
        </NavLink>
      </nav>
      <h1>aircheck</h1>
      <Settiings />
    </header>
  );
}
