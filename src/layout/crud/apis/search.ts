import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


export const search = async (searchId)=> {
  console.log('searchIdsearchId', searchId)
  const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${searchId}`);
  console.log('result', result)
  return result.data;
};

export const useSearch = ( searchId ) => {
    console.log('dsddasdeeeee', searchId)
    return useQuery({
      queryKey: ['search', searchId],
      queryFn: () => search(searchId),
    });
};
  
