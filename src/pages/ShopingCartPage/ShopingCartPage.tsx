import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/rtkHooks";
import { Button } from "../../components/Button/Button";
import { changeCount, removeFromCart } from "../../store/shopingCartSlice";

export const ShopingCartPage:FC = () => {
  const products = useAppSelector(state => state.shopingCart.items);
  const totalPrice = useAppSelector(state => state.shopingCart.totalPrice);
  const dispatch = useAppDispatch();

  return (
    <div className={`container`}>
      <h2>Shoping Cart</h2>
      <div>
        {products.map(e => {
          return (
            <div key={e.id}>
              <p>{e.product.title}</p>
              <p>{e.product.price}</p>
              <p>{e.count}</p>
              <div>
                <Button text="-" onClick={() => dispatch(changeCount({id: e.id, count: -1}))}/>
                <p>{e.count}</p>
                <Button text="+" onClick={() => dispatch(changeCount({id: e.id, count: 1}))}/>
              </div>
              <Button text="Remove" onClick={() => dispatch(removeFromCart(e.id))}/>
            </div>
          );
        })}
      </div>
      <h3>{totalPrice}</h3>
    </div>
  );
};
