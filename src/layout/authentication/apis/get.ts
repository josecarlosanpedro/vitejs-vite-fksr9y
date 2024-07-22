import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import axios from 'axios';

export type LoginDTO = {
  data: {
    phoneNumber?: string;
    email?: string;
    password: string;
  };
};


export const get = async ()=> {
  const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
  console.log('result', result)
  return result.data;
};
export const useGet = () => {
    return useQuery({
      queryKey: [],
      queryFn: () => get(),
    });
};
  
