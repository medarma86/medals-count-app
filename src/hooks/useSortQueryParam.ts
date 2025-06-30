import { useSearchParams, useRouter } from 'next/navigation';
import { SortKey, SORT_KEYS, SORT_KEY_LIST } from '@/types/medals';

export function useSortQueryParam() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const rawSort = searchParams.get('sort');
  const sortBy: SortKey = (
   SORT_KEY_LIST.includes(rawSort as SortKey)
      ? rawSort
      : SORT_KEYS.GOLD
  ) as SortKey;

  const setSort = (key: SortKey) => {
    const params = new URLSearchParams(searchParams);
    params.set('sort', key);
    router.push(`?${params.toString()}`);
  };

  return { sortBy, setSort };
}
