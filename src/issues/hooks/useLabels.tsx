import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../../api/githubApi';
import { Label } from '../interfaces/label';
import { sleep } from '../../helpers/sleep';

// const getLabels = async() => {
//   const res = await fetch('https://api.github.com/repos/facebook/react/labels');
//   const data = await res.json();
//   console.log(data);
//   return data;
// }

const getLabels = async():Promise<Label[]> => {
    
    await sleep(2);

    const { data } = await githubApi.get<Label[]>('/labels');
    console.log(data);
    return data;
  }
  

export const useLabels = () => {

    const labelsQuery = useQuery(
        ['labels'],
        getLabels,
        {
            staleTime: 1000 * 60 * 60,
            //refetchOnWindowFocus: false,
        }
      )    

    return labelsQuery;  
}
