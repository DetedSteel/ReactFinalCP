import { FC } from 'react';
import Logo from './logo.svg';
import Bag from './bag.svg';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/rtkHooks';

export const Header: FC = () => {
  const products = useAppSelector(state => state.shopingCart.items);


  return (
    <header className={styles.container}>
      <div className={`container ${styles.innerContainer}`}>
        <div className={styles.logoImg}>
          <img src={Logo} alt="logo" />
        </div>
        <div className={styles.links}>
          <Link to="/">Main Page</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/categories/all">All products</Link>
          <Link to="/categories/discounts">All sales</Link>
        </div>
        <Link to='/shopingCart' className={styles.bagImg}>
          <p className={styles.count}>{products.length}</p>
          <img src={Bag} alt="shopingCart" />
        </Link>
      </div>
    </header>
  );
};
