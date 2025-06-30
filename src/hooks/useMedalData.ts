
import { API_ENDPOINTS } from '@/constants/api';
import { CountryMedal } from '@/interfaces/Medals';
import { apiGet } from '@/utils/api/apiClient';
import { transformMedalData } from '@/utils/ui/medals';
import { useQuery } from '@tanstack/react-query';

export async function fetchMedals(): Promise<CountryMedal[]> {  // we can separate this logic to another component if needed but might need to make it more generic, might not worth but depends of use case
  const data = await apiGet<CountryMedal[]>(API_ENDPOINTS.MEDALS); // move api url to a constant 
  return transformMedalData(data);
}

export function useMedalData() {
  return useQuery({
    queryKey: ['medals'],
    queryFn: fetchMedals,
    staleTime: 60 * 1000, // 1 minute cache
    // retry: 2 // Will retry failed requests 2 times - I think default is 3, need to check and remove this if needed
  });

}