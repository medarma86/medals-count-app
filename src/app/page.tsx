'use client';

import { useMedalData } from '@/hooks/useMedalData';
import { MedalTable } from '@/components/medals/MedalTable';
import { sortMedalData } from '@/utils/ui/medals';
import styles from './page.module.css';
import { useSortQueryParam } from '@/hooks/useSortQueryParam';
import { ErrorPage } from '@/components/common/errorPages/ErrorPage';
import { Loader } from '@/components/common/loaders/Loader';

export default function Home() {

  const { sortBy, setSort } = useSortQueryParam();  
  const { data: medals = [], isLoading, isError } = useMedalData();

  const sortedMedals = sortMedalData(medals, sortBy);

  if (isError) return <ErrorPage />;
  if (isLoading) return <Loader />; 

  // throw new Error('Crash me!');        // use this for errorboundary test

  return (
    <main className={styles.container}>     
    <h1 className={styles.title}>MEDAL COUNT</h1>   
        <MedalTable
          medals={sortedMedals}
          sortBy={sortBy}
          onSortChange={setSort}         
        />   
    </main>
  );
}
