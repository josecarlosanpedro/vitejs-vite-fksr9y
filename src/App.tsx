import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './layout/main';
import Authentication from './layout/authentication';
import Auth from './layout/auth';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Home from './layout/authenticated/home';
import { authRoutes } from './layout/auth/routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/authentication',
    element: <Authentication />,
  },
  // {
  //   path: '/auth',
  //   element: <Auth />,
  // },
  {
    path: '/home',
    element: <Home />,
  },
  ...authRoutes
]);
export const App = () => {
  return (
    <>
      <ToastContainer />
      <MyRouterProvider />
    </>
  );
};

function MyRouterProvider() {
  return <RouterProvider router={router} />;
}

export default App;
