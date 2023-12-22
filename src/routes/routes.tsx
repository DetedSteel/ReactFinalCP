import { createBrowserRouter } from 'react-router-dom';
import { App } from '../components/App/App';
import { HomePage } from '../pages/HomePage/HomePage';
import { CategoriesPage } from '../pages/CategoriesPage/CategoriesPage';
import { ProductListPage } from '../pages/ProductListPage/ProductListPage';
import { ShopingCartPage } from '../pages/ShopingCartPage/ShopingCartPage';
import { ProductPage } from '../pages/ProductPage/ProductPage';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'categories', element: <CategoriesPage /> },
      {
        path: 'categories/:id',
        element: <ProductListPage />,
      },
      { path: 'shopingCart', element: <ShopingCartPage /> },
      { path: 'products/:id', element: <ProductPage /> },
    ],
    errorElement: <ErrorPage />,
  },
]);
