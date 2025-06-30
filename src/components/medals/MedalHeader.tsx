// // components/MedalHeader.tsx
// import { SortKey } from '@/types/medals';
// import { MedalIcon } from './MedalIcon';
// import styles from './MedalTable.module.css';

// interface MedalHeaderProps {
//   sortKey: SortKey;
//   currentSort: SortKey;
//   onClick: (key: SortKey) => void;
// }

// export const MedalHeader = ({
//   sortKey,
//   currentSort,
//   onClick,
// }: MedalHeaderProps) => {
//   const isActive = sortKey === currentSort;

//   return (
//     <th
//       onClick={() => onClick(sortKey)}
//       className={`${styles.tableHeader} ${isActive ? styles.activeSort : ''}`}
//       aria-sort={isActive ? 'descending' : 'none'}
//     >
//       <div className={styles.headerWrapper}>
//         {isActive && <div className={styles.topBar} />}
//         <MedalIcon type={sortKey} size="md" isHeader />
//       </div>
//     </th>
//   );
// };

import { SortKey } from '@/types/medals';
import { MedalIcon } from './MedalIcon';
import styles from './MedalTable.module.css';

interface PureMedalHeaderProps {
  isActive: boolean;
  sortKey: SortKey;
  onClick: () => void;
}

export const MedalHeader = ({
  isActive,
  sortKey,
  onClick,
}: PureMedalHeaderProps) => {
  return (
    <th
      onClick={onClick}
      className={`${styles.tableHeader} ${isActive ? styles.activeSort : ''}`}
      aria-sort={isActive ? 'descending' : 'none'}
    >
      <div className={styles.headerWrapper}>
        {isActive && <div className={styles.topBar} />}
        <MedalIcon type={sortKey} size="md" isHeader />
      </div>
    </th>
  );
};

