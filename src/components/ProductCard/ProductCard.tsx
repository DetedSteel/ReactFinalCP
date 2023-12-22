import { CSSProperties, FC, useState } from 'react';
import styles from './productcard.module.scss';
import { Link } from "react-router-dom";
import { Button } from '../Button/Button';
import { useAppDispatch } from '../../hooks/rtkHooks';
import { addToCart } from '../../store/shopingCartSlice';
import { IProduct } from '../../types/app';

export const ProductCard: FC<{ product: IProduct }> = ({ product }) => {
  const { id, title, price, discont_price, image } = product;

  const dispatch = useAppDispatch();

  const saleAmmount: string | null = discont_price
    ? (((price - discont_price) / price) * 100).toFixed(1)
    : null;

  const [opacity, setOpacity] = useState('0');

  const style: CSSProperties = {
    opacity: opacity,
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setOpacity('1')}
      onMouseLeave={() => setOpacity('0')}
    >
      {saleAmmount && <div className={styles.sale}>{saleAmmount}%</div>}
      <div className={styles.img}>
        <img src={`http://localhost:3333/${image}`} alt={title} />
      </div>
      <Link to={`/products/${id}`} className={styles.text}>{title}</Link>
      <div className={styles.price}>
        <p className={styles.currPrice}>${discont_price ? discont_price : price}</p>
        {discont_price && <p className={styles.oldPrice}>${price}</p>}
      </div>
      <Button
        text="Add to cart"
        onClick={() => {
          dispatch(addToCart({ product: product, count: 1, id: id }));
        }}
        style={style}
        className={styles.btn}
      />
    </div>
  );
};
