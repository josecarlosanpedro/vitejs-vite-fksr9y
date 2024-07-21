import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './layout/main';
import Home from './layout/home';
import Login from './layout/login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
export const App = () => {
  return (
    <>
      <MyRouterProvider />
    </>
  );
};

function MyRouterProvider() {
  return <RouterProvider router={router} />;
}

export default App;
