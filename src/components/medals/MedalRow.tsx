import { MedalRowProps } from '@/interfaces/Medals';
import styles from './MedalTable.module.css';
import { Flag } from '../flags/Flag';
import { MedalIcon } from './MedalIcon';

export const MedalRow = ({ country, rank }: MedalRowProps) => (
  <tr className={styles.row}>
    <td className={styles.rankCell}>{rank}</td>
    <td className={styles.countryCell}>
      <Flag code={country.code} />
      <span>{country.code}</span>
    </td>
    <td className={styles.medalCell}>
      <MedalIcon type="gold" count={country.gold} />
    </td>
    <td className={styles.medalCell}>
      <MedalIcon type="silver" count={country.silver} />
    </td>
    <td className={styles.medalCell}>
      <MedalIcon type="bronze" count={country.bronze} />
    </td>
    <td className={styles.totalCell}>{country.total}</td>
  </tr>
);
