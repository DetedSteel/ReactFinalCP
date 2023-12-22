import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/rtkHooks';
import { fetchProducts, filter, sort } from '../../store/productsSlice';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import styles from './productslistpage.module.scss';
import { IProduct } from '../../types/app';
import { fetchProduct, filter2, sort2 } from '../../store/productSlice';

export const ProductListPage: FC = () => {
  const products = useAppSelector(state => state.products.data);
  const products2 = useAppSelector(state => state.product.products);
  const category = useAppSelector(state => state.products.category);
  const dispatch = useAppDispatch();

  const [isAll, setIsAll] = useState(false);
  const [title, setTitle] = useState('');
  const [isFiltered, setIsFiltered] = useState(false);

  const params = useParams();

  function renderPrudoducts(list: IProduct[]) {
    return list.map(e => {
      return e.isShown && <ProductCard key={e.id} product={e} />;
    });
  }

  const toRef = useRef<HTMLInputElement>(null);
  const fromRef = useRef<HTMLInputElement>(null);
  const discountRef = useRef<HTMLInputElement>(null);

  function handleSort(from: number, to: number) {
    if (isAll) {
      dispatch(filter2({ filtered: isFiltered, from: from, to: to }));
    } else {
      dispatch(filter({ filtered: isFiltered, from: from, to: to }));
    }
  }

  useEffect(() => {
    if (params.id === 'all') {
      setIsAll(true);
      dispatch(fetchProduct({ id: params.id }));
      setTitle('All products');
    } else if (params.id === 'discounts') {
      setIsAll(true);
      setIsFiltered(true);
      dispatch(fetchProduct({ id: 'all' })).then(() => {
        dispatch(
          filter2({
            filtered: true,
            from: fromRef.current?.value ? parseFloat(fromRef.current.value) : 0,
            to: toRef.current?.value ? parseFloat(toRef.current.value) : Infinity,
          }),
        );
      });
      setTitle('Discounted items');
    } else {
      setIsAll(false);
      dispatch(fetchProducts({ id: parseInt(params.id ?? '1') }));
      setTitle(category.title ?? '');
    }
  }, [category.title, dispatch, params.id]);

  return (
    <div className={`container`}>
      <h2 className={styles.header}>{title}</h2>
      <div className={styles.controlsContainer}>
        <div className={styles.priceSort}>
          <label className={styles.controlText}>Price</label>
          <input
            className={styles.priceInput}
            type="number"
            placeholder="from"
            ref={fromRef}
            onInput={() =>
              handleSort(
                fromRef.current?.value ? parseFloat(fromRef.current.value) : 0,
                toRef.current?.value ? parseFloat(toRef.current.value) : Infinity,
              )
            }
          />
          <input
            className={styles.priceInput}
            type="number"
            placeholder="to"
            ref={toRef}
            onInput={() =>
              handleSort(
                fromRef.current?.value ? parseFloat(fromRef.current.value) : 0,
                toRef.current?.value ? parseFloat(toRef.current.value) : Infinity,
              )
            }
          />
        </div>
        {params.id !== 'discounts' && (
          <div className={styles.discountContainer}>
            <label className={styles.controlText}>Discounted items</label>
            <input
              className={styles.checkbox}
              type="checkbox"
              name=""
              id=""
              ref={discountRef}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setIsFiltered(e.target.checked);
                dispatch(
                  isAll
                    ? filter2({
                        filtered: e.target.checked,
                        from: fromRef.current?.value ? parseFloat(fromRef.current.value) : 0,
                        to: toRef.current?.value ? parseFloat(toRef.current.value) : Infinity,
                      })
                    : filter({
                        filtered: e.target.checked,
                        from: fromRef.current?.value ? parseFloat(fromRef.current.value) : 0,
                        to: toRef.current?.value ? parseFloat(toRef.current.value) : Infinity,
                      }),
                );
              }}
            />
          </div>
        )}
        <div className={styles.selectContainer}>
          <label className={styles.controlText}>Sorted</label>
          <select
            className={styles.sortInput}
            defaultValue="default"
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              dispatch(isAll ? sort2({ sort: e.target.value }) : sort({ sort: e.target.value }));
            }}
          >
            <option value="default">By default</option>
            <option value="desc">Descending price</option>
            <option value="asc">Ascending price</option>
          </select>
        </div>
      </div>
      <div className={styles.container}>{renderPrudoducts(isAll ? products2 : products)}</div>
    </div>
  );
};
