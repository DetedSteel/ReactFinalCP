import { FC } from 'react';
import Logo from './logo.svg'
import Bag from './bag.svg'
import styles from './header.module.scss';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  return (
    <header className={`container ${styles.container}`}>
      <div className={styles.logoImg}>
        <img src={Logo} alt="logo" />
      </div>
      <div className={styles.links}>
        <Link to="/">Main Page</Link>
        <Link to="/categories">Categories</Link>
      </div>
      <div className={styles.bagImg}>
        <img src={Bag} alt="shopingCart" />
      </div>
    </header>
  );
};
