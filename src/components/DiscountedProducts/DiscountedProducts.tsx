import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/rtkHooks";
import { ProductCard } from "../ProductCard/ProductCard";
import { fetchProduct } from "../../store/productSlice";
import styles from './discountedproducts.module.scss'
import { Link } from "react-router-dom";

export const DiscountedProducts:FC = () => {
  const products = useAppSelector(state => state.product.products);
  const dispatch = useAppDispatch();
  let count = 0;

  useEffect(() => {
    dispatch(fetchProduct({id: 'all'}));
  }, [dispatch]);

  return (
    <div className={`container ${styles.container}`}>
      <h2 className={styles.header}>Sale</h2>
      <Link to='/categories/discounts' className={styles.discountsBtn}>All sales</Link>
      <div className={styles.cardsContainer}>
        {products.map(e => {
          if (e.discont_price && count < 4) {
            count++;
            return <ProductCard key={e.id} product={e}/>
          } else {
            return ''
          }
        })}
      </div>
    </div>
  );
};
