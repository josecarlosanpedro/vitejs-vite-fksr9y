import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export type LoginDTO = {
  data: {
    phoneNumber?: string;
    email?: string;
    password: string;
  };
};


export const create = async (data)=> {
  console.log('data', data)
  const result = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
  return result.data;
};


export const useCreate = () => {
  return useMutation({
    mutationFn: create,
    onError: (error) => {
      console.log('error', error.message)
    },
    onSuccess: (context) => {
      console.log('success', context)
    },
  });
};
