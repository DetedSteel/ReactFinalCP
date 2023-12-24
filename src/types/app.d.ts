import { CSSProperties } from 'react';

export interface ICategory {
  id?: number;
  title?: string;
  image?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  discont_price: number|null;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  categoryId: number;
  isShown?: boolean;
}

export type ButtonPropsT = {
  text: string;
  onClick: (e?:MouseEvent<HTMLButtonElement>) => void;
  style?: CSSProperties;
  className?: string
};

export interface ICartItem {
  id: number;
  product: IProduct;
  count: number;
}

export interface IFormInputs {
  name: string;
  phone: string;
  eMail: string;
}
