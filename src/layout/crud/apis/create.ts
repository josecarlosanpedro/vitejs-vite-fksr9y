import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Notification } from '../../../utils/notifications';

export type LoginDTO = {
  data: {
    phoneNumber?: string;
    email?: string;
    password: string;
  };
};


export const create = async (data)=> {
  const result = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
  return result.data;
};


export const useCreate = () => {
  return useMutation({
    mutationFn: create,
    onError: (error) => {
      Notification('Error While Creating Record', 'error')
    },
    onSuccess: (context) => {
      Notification('Create Success')
    },
  });
};
