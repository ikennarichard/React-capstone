import { NavLink } from 'react-router-dom';
import { ChevroLeft, Settiings, Microphone } from '../icons/icons';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <NavLink to="/">
          <ChevroLeft />
        </NavLink>
      </nav>
      <h1>aircheck</h1>
      <div className={styles.icons}>
        <Microphone />
        <Settiings />
      </div>
    </header>
  );
}
