import { FC } from "react";
import { MainPromotion } from "../../components/MainPromotion/MainPromotion";
import { Categories } from "../../components/Categories/Categories";
import { DiscountForm } from "../../components/DiscountForm/DiscountForm";
import { DiscountedProducts } from "../../components/DiscountedProducts/DiscountedProducts";

export const HomePage:FC = () => {
  return (
    <div className="container">
      <MainPromotion/>
      <Categories/>
      <DiscountForm/>
      <DiscountedProducts/>
    </div>
  );
}
