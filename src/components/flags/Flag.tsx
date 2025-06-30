import { COUNTRY_CODES } from '@/types/flags';
import styles from '../flags/Flag.module.css';
import { isValidCountryCode } from '@/utils/ui/flags';


interface FlagProps {
  code: string;
//   size?: 'sm' | 'md' | 'lg';
}

export const Flag = ({ code }: FlagProps) => {
  if (!isValidCountryCode(code)) {
    // can add console.warn if needed
    return <span className={styles.fallback}>🏴</span>;
  }

  const position = COUNTRY_CODES.indexOf(code);
  const flagStyle = {
     backgroundImage: 'url(/flags.png)',
     backgroundPosition: `0 -${position * 17}px`, // need to revist this
     width: '28px',
     height: '17px'
  };

  return (
    <div 
      className={styles.flag}
      style={flagStyle}
      aria-label={code}
      title={code}
    />
  );
};
