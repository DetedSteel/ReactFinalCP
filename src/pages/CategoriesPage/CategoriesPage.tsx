import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/rtkHooks';
import { fetchCategories } from '../../store/categoriesSlice';
import { CategoryCard } from '../../components/CategoryCard/CategoryCard';
import styles from './categoriespage.module.scss';

export const CategoriesPage: FC = () => {
  const categoies = useAppSelector(state => state.categories.list);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className={`container ${styles.categotiesWarpper}`}>
      <h2 className={styles.header}>Categories</h2>
      <div className={styles.container}>
        {categoies.map(e => (
          <CategoryCard
            id={e.id??-1}
            width={248}
            key={e.id}
            image={e.image??''}
            title={e.title??''}
          />
        ))}
      </div>
    </div>
  );
};
