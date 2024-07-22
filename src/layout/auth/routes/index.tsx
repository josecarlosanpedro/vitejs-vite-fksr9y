import Auth from '..';
import Login from '../login';
import Registration from '../registration';
import ForgotPassword from '../forgotPassword';

export const authRoutes = [
  {
    path: '/auth',
    element: <Auth />,
    children: [
      { index: true, element: <Login /> },
      {
        path: '/auth/registration',
        element: <Registration />,
      },
      {
        path: '/auth/forgot-password',
        element: <ForgotPassword />,
      },
    ],
  },
];
