import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Notification } from '../../../utils/notifications';

export type LoginDTO = {
  data: {
    email: string;
    password: string;
  };
};


export const login = async (data: LoginDTO)=> {
  console.log('data', data)
  const result = await axios.post('https://reqres.in/api/login', data);
  return result;
};


export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onError: (error) => {
        Notification('Username or Password does not exist!', 'error')
    },
    onSuccess: (context) => {
        Notification('Login Success')
    },
  });
};
