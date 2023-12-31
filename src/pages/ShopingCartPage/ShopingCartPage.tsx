import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/rtkHooks';
import { ShopingCartItem } from '../../components/ShopingCartItem/ShopingCartItem';
import styles from './shopingcartpage.module.scss';
import { ShopingCartForm } from '../../components/ShopingCartForm/ShopingCartForm';
import { Link } from 'react-router-dom';
import { PopUp } from '../../components/PopUp/PopUp';

export const ShopingCartPage: FC = () => {
  const products = useAppSelector(state => state.shopingCart.items);
  const totalPrice = useAppSelector(state => state.shopingCart.totalPrice);
  const dispatch = useAppDispatch();

  const [popUp, setPopUp] = useState(false);

  return (
    <div className={`container ${styles.wrapper}`}>
      <h2 className={styles.header}>Shoping Cart</h2>
      <Link to='/' className={styles.backBtn}>Back to the store</Link>
      <div className={styles.container}>
        <div className={styles.items}>
          {products.map(e => {
            return <ShopingCartItem key={e.id} item={e} dispatch={dispatch} />;
          })}
        </div>
        <ShopingCartForm count={products.length} totalPrice={totalPrice.toFixed(2)} submitPopUp={() => setPopUp(true)} />
      </div>
      {popUp && <PopUp btnClick={() => setPopUp(false)}/>}
    </div>
  );
};
