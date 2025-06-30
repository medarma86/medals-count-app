'use client';

import { useMedalData } from '@/hooks/useMedalData';
import { MedalTable } from '@/components/medals/MedalTable';
import { sortMedalData } from '@/utils/ui/medals';
import styles from './page.module.css';
import { useSortQueryParam } from '@/hooks/useSortQueryParam';

export default function Home() {

  const { sortBy, setSort } = useSortQueryParam();  
  const { data: medals = []  } = useMedalData();

    // const { data: medals = [], isLoading, isError } = useMedalData();

  const sortedMedals = sortMedalData(medals, sortBy);

  // if (isError) return <TableError error={error} />;
  // if (isLoading) return <TableLoading />;

 

  // throw new Error('Crash me!'); // errorboundary test

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

// Sub-components for states
// const TableError = ({ error }: { error: Error }) => (
// const TableError = () => (
//   <div className={styles.errorContainer}>
//     <h2>Data Loading Failed</h2>
//     {/* <p>{error.message}</p> if needed we can get the error message from api but not a good practice*/}
//     <button 
//       className={styles.retryButton}
//       onClick={() => window.location.reload()}
//     >
//       Retry
//     </button>
//   </div>
// );

// const TableLoading = () => (
//   <div className={styles.loadingContainer}>
//     <div className={styles.spinner} />
//     <p>Loading medal data...</p>
//   </div>
// );