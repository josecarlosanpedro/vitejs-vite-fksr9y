import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Notification } from '../../../utils/notifications';

export type RegistrationDTO = {
  data: {
    email: string;
    password: string;
  };
};


export const registration = async (data: RegistrationDTO)=> {
  console.log('data', data)
  const result = await axios.post('https://reqres.in/api/register', data);
  return result;
};


export const useRegistration = () => {
  return useMutation({
    mutationFn: registration,
    onError: (error) => {
        Notification(error.message, 'error')
    },
    onSuccess: (context) => {
        Notification('Registration Success you can now login')
    },
  });
};
