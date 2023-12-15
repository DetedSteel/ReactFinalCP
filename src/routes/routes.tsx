import { createBrowserRouter } from 'react-router-dom';
import { App } from '../components/App/App';
import { Categories } from '../components/Categories/Categories';
import { HomePage } from '../pages/HomePage/HomePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'categories', element: <Categories /> },
    ],
  },
]);
