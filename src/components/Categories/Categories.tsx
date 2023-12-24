import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/rtkHooks';
import { fetchCategories } from '../../store/categoriesSlice';
import { CategoryCard } from '../CategoryCard/CategoryCard';
import styles from './categories.module.scss'
import { Link } from 'react-router-dom';

export const Categories: FC = () => {
  const categoies = useAppSelector(state => state.categories.list);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className={`container ${styles.container}`}>
      <h2>Categories</h2>
      <Link to='/categories' className={styles.categoiesBtn}>All categories</Link>
      <div className={styles.cardsComtainer}>
        {categoies.map((e, ix) => ix<4?<CategoryCard id={e.id??-1} key={e.id} width={316} title={e.title??''} image={e.image??''}/>:'')}
      </div>
    </div>
  );
};
