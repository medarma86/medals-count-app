// // components/MedalIcon.tsx
// import { SortKey } from '@/types/medals';
// import styles from './MedalIcon.module.css';

// interface MedalIconProps {
//   type: SortKey;
//   count?: number;
//   size?: 'sm' | 'md' | 'lg';
//   isHeader?: boolean;
// }

// export const MedalIcon = ({
//   type,
//   count,
//   size = 'md',
//   isHeader = false,
// }: MedalIconProps) => {

//  if (type === 'total') {
//   return <span>{isHeader ? 'TOTAL' : count}</span>;
// }
//   if (isHeader) {
//     return <div className={`${styles.medal} ${styles[type]} ${styles[size]}`} />;
//   }

//   return <span>{count}</span>;
// };

import { SortKey } from '@/types/medals';
import styles from './MedalIcon.module.css';
import { Icon } from '../ui/Icon';

interface MedalIconRendererProps {
  type: SortKey;
  count?: number;
  size?: 'sm' | 'md' | 'lg';
  isHeader?: boolean;
}

export const MedalIcon = ({
  type,
  count,
  size = 'md',
  isHeader = false,
}: MedalIconRendererProps) => {
  if (type === 'total') {
    return <Icon content={isHeader ? 'TOTAL' : count ?? null} />;
  }

  if (isHeader) {
    const className = `${styles.medal} ${styles[type]} ${styles[size]}`;
    return <Icon className={className} content="" />;
  }

  return <Icon content={count ?? ''} />;
};

