import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './layout/main';
import Crud from './layout/crud';
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
    path: '/crud',
    element: <Crud />,
  },
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
