import { FC } from 'react';
import { ICartItem } from '../../types/app';
import styles from './shopingcartitem.module.scss';
import { AppDispatch } from '../../store/store';
import { Button } from '../../components/Button/Button';
import { changeCount, removeFromCart } from '../../store/shopingCartSlice';

export const ShopingCartItem: FC<{ item: ICartItem; dispatch: AppDispatch }> = ({
  item,
  dispatch,
}) => {
  const { product, count } = item;
  const { title, image, price, discont_price } = product;

  return (
    <div className={styles.cartItem}>
      <div className={styles.img}>
        <img src={`http://localhost:3333/${image}`} alt="" />
      </div>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>{title}</p>
          <Button
            text=""
            className={styles.closeBtn}
            onClick={() => dispatch(removeFromCart(product.id))}
          />
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.countButtonsContainer}>
            <Button
              text="-"
              className={styles.countBtn}
              onClick={() => dispatch(changeCount({ id: product.id, count: -1 }))}
            />
            <p className={styles.count}>{count}</p>
            <Button
              text="+"
              className={styles.countBtn}
              onClick={() => dispatch(changeCount({ id: product.id, count: 1 }))}
            />
          </div>
          <div className={styles.priceContainer}>
            <p className={styles.newPrice}>${discont_price ? discont_price * count : price * count}</p>
            {discont_price && <div className={styles.oldPrice}>${price * count}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};
