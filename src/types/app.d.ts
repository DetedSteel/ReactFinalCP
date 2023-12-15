export interface ICategory {
  id: number;
  title: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  discont_price: number;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  categoryId: number;
}
