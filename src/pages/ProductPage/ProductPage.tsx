import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/rtkHooks';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../../store/productSlice';
import { Button } from '../../components/Button/Button';
import { addToCart } from '../../store/shopingCartSlice';
import styles from './productpage.module.scss';

export const ProductPage: FC = () => {
  const product = useAppSelector(state => state.product.products);
  const dispatch = useAppDispatch();

  const getSaleAmmount: (price: number, discont_price: number | null) => string | null = (
    price: number,
    discont_price: number | null,
  ) => (discont_price ? (((price - discont_price) / price) * 100).toFixed(1) : null);

  const params = useParams();

  const [count, setCount] = useState(1);

  useEffect(() => {
    dispatch(fetchProduct({ id: params.id ?? '1' }));
  }, [dispatch, params.id]);

  return (
    <div className={`container ${styles.container}`}>
      {product.map(e => {
        return (
          <div className={styles.productContainer} key={e.id}>
            <div className={styles.img}>
              <img src={`http://localhost:3333/${e.image}`} alt={e.title} />
            </div>
            <div className={styles.descriptionContainer}>
              <h3 className={styles.header}>{e.title}</h3>
              <div className={styles.priceContainer}>
                <p className={styles.newPrice}>${e.discont_price ? e.discont_price : e.price}</p>
                {e.discont_price && (
                  <div className={styles.oldPrice}>
                    ${e.price}
                    {getSaleAmmount(e.price, e.discont_price) && (
                      <div className={styles.sale}>{getSaleAmmount(e.price, e.discont_price)}%</div>
                    )}
                  </div>
                )}
              </div>
              <div className={styles.buttonsContainer}>
                <div className={styles.countButtonsContainer}>
                  <Button
                    text="-"
                    className={styles.countBtn}
                    onClick={() => setCount(count - 1)}
                  />
                  <p className={styles.count}>{count}</p>
                  <Button
                    text="+"
                    className={styles.countBtn}
                    onClick={() => setCount(count + 1)}
                  />
                </div>
                <Button
                  className={styles.addToCartBtn}
                  text="Add to cart"
                  onClick={() => dispatch(addToCart({ id: e.id, product: e, count: count }))}
                />
              </div>
              <div className={styles.description}>
                <p className={styles.descriptionHeader}>Description</p>
                <p className={styles.descriptionText}>{e.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
