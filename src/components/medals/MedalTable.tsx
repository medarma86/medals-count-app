// import { CountryMedal } from '@/interfaces/Medals';
// import { MedalHeader } from './MedalHeader';
// import { MedalRow } from './MedalRow';
// import styles from './MedalTable.module.css';
// import { SortKey } from '@/types/medals';

// interface MedalTableProps {
//   medals: CountryMedal[];
//   sortBy: SortKey;
//   onSortChange: (key: SortKey) => void;
//   // loading?: boolean;
//   // error?: string | null;
// }

// export const MedalTable = ({
//   medals,
//   sortBy,
//   onSortChange,
// }: MedalTableProps) => {

//   return (
//     <div className={styles.tableWrapper}>      
//       <table className={styles.table}>
//         <thead>
//           <tr>
//             <th></th>
//               <th></th>
//             {/* <th style={{ width: '20px' }}></th>           */}
//             <MedalHeader sortKey="gold" currentSort={sortBy} onClick={onSortChange} />
//             <MedalHeader sortKey="silver" currentSort={sortBy} onClick={onSortChange} />
//             <MedalHeader sortKey="bronze" currentSort={sortBy} onClick={onSortChange} />
//             <MedalHeader sortKey="total" currentSort={sortBy} onClick={onSortChange} />          
//           </tr>
//         </thead>
//         <tbody>
//           {medals.map((country, index) => (
//             <MedalRow 
//               key={country.code} 
//               country={country} 
//               rank={index + 1} 
//             />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

import { CountryMedal } from '@/interfaces/Medals';
import { MedalHeader } from './MedalHeader';
import { MedalRow } from './MedalRow';
import styles from './MedalTable.module.css';
import { SORT_KEY_LIST, SortKey } from '@/types/medals';

interface MedalTableProps {
  medals: CountryMedal[];
  sortBy: SortKey;
  onSortChange: (key: SortKey) => void;
  loading?: boolean;
  error?: string | null;
}

export const MedalTable = ({
  medals,
  sortBy,
  onSortChange,
}: MedalTableProps) => {
  return (
    <div className={styles.tableWrapper}>      
      <table className={styles.table}>
        <thead>
          <tr>
            <th></th>
            <th></th> 
            {/* <MedalHeader
              sortKey="gold"
              isActive={sortBy === 'gold'}
              onClick={() => onSortChange('gold')}
            />
            <MedalHeader
              sortKey="silver"
              isActive={sortBy === 'silver'}
              onClick={() => onSortChange('silver')}
            />
            <MedalHeader
              sortKey="bronze"
              isActive={sortBy === 'bronze'}
              onClick={() => onSortChange('bronze')}
            />
            <MedalHeader
              sortKey="total"
              isActive={sortBy === 'total'}
              onClick={() => onSortChange('total')}
            /> */}
            {SORT_KEY_LIST.map((key) => (
             <MedalHeader
             key={key}
             sortKey={key}
             isActive={sortBy === key}
             onClick={() => onSortChange(key)}
  />
))}
          </tr>
        </thead>
        <tbody>
          {medals.map((country, index) => (
            <MedalRow 
              key={country.code} 
              country={country} 
              rank={index + 1} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
