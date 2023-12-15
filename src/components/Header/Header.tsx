import { FC } from 'react';
import Logo from './logo.svg'
import Bag from './bag.svg'
import styles from './header.module.scss';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  return (
    <header className={`container ${styles.container}`}>
      <img src={Logo} alt="logo" />
      <div className={styles.links}>
        <Link to="/">Main Page</Link>
        <Link to="/categories">Categories</Link>
      </div>
      <img src={Bag} alt="shopingCart" />
    </header>
  );
};
