import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import axios from 'axios';

export type LoginDTO = {
  data: {
    phoneNumber?: string;
    email?: string;
    password: string;
  };
};


export const get = async (userId)=> {
  const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const res = await result.data?.filter(item => item.userId === Number(userId))
  return res
};
export const useGet = (userId) => {
    return useQuery({
      queryKey: ['get', userId],
      queryFn: () => get(userId),
    });
};
  
