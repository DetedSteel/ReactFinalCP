import { createBrowserRouter } from 'react-router-dom';
import { App } from '../components/App/App';
import { HomePage } from '../pages/HomePage/HomePage';
import { CategoriesPage } from '../pages/CategoriesPage/CategoriesPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'categories', element: <CategoriesPage /> },
    ],
  },
]);
