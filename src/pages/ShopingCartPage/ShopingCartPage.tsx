import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/rtkHooks';
import { ShopingCartItem } from '../../components/ShopingCartItem/ShopingCartItem';
import styles from './shopingcartpage.module.scss';
import { ShopingCartForm } from '../../components/ShopingCartForm/ShopingCartForm';

export const ShopingCartPage: FC = () => {
  const products = useAppSelector(state => state.shopingCart.items);
  const totalPrice = useAppSelector(state => state.shopingCart.totalPrice);
  const dispatch = useAppDispatch();

  return (
    <div className={`container`}>
      <h2 className={styles.header}>Shoping Cart</h2>
      <div className={styles.container}>
        <div className={styles.items}>
          {products.map(e => {
            return <ShopingCartItem key={e.id} item={e} dispatch={dispatch} />;
          })}
        </div>
        <ShopingCartForm count={products.length} totalPrice={totalPrice} />
      </div>
    </div>
  );
};
