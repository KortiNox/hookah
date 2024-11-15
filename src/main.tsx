import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import { Cart } from './pages/Cart/Cart';
import { Error as ErrorPage } from './pages/Error/Error';
import { Layout } from './Layout/Menu/Layout.js';
import { Product } from './pages/Product/Product.js';
import axios from 'axios';
import { PREFIX } from './helpers/API.js';
import { AuthLayout } from './Layout/Auth/AuthLayout.js';
import { Login } from './pages/Login/Login.js';
import { Register } from './pages/Register/Register.js';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import Tobacco from './pages/Tobacco/Tobacco';
import { TobaccoBigCard } from './pages/TobaccoBigCard/TobaccoBigCard';

const Menu = lazy(() => import('./pages/Menu/Menu'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<>'Загрузка...'</>}>
            <Menu />
          </Suspense>
        ),
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/tobacco',
        element: <Tobacco />,
      },
      {
        path: '/tobacco/:id',
        element: <TobaccoBigCard />,
        errorElement: <>Ошибка </>,
        loader: async ({ params }) => {
          const { data } = await axios.get(`${PREFIX}/Tobacco?id=${params.id}`);
          return data;
        },
      },

      {
        path: '/product/:id',
        element: <Product />,
        errorElement: <>Ошибка </>,
        loader: async ({ params }) => {
          const { data } = await axios.get(`${PREFIX}/items?id=${params.id}`);
          return data;
        },
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
