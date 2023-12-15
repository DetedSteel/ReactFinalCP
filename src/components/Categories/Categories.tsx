import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/rtkHooks';
import { fetchCategories } from '../../store/categoriesSlice';

export const Categories: FC = () => {
  const categoies = useAppSelector(state => state.categories.list);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="container">
      {categoies.map(e => (
        <div key={e.id}>{e.title}</div>
      ))}
    </div>
  );
};
