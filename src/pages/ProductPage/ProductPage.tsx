import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/rtkHooks';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../../store/productSlice';
import { Button } from '../../components/Button/Button';
import { addToCart } from '../../store/shopingCartSlice';

export const ProductPage: FC = () => {
  const product = useAppSelector(state => state.product.products);
  const dispatch = useAppDispatch();

  const params = useParams();

  const [count, setCount] = useState(1);

  useEffect(() => {
    dispatch(fetchProduct({ id: params.id ?? '1' }));
  }, [dispatch, params.id]);

  return (
    <div className="container">
      {product.map(e => {
        return (
          <div key={e.id}>
            <h2>{e.title}</h2>
            <div><img src={`http://localhost:3333/${e.image}`} alt={e.title} /></div>
            <Button text='-' onClick={() => setCount(count-1)}/>
            <p>{count}</p>
            <Button text='+' onClick={() => setCount(count+1)}/>
            <p>{e.description}</p>
            <Button text='Add to cart' onClick={() => dispatch(addToCart({id: e.id, product: e, count: count}))}/>
          </div>
        );
      })}
    </div>
  );
};
