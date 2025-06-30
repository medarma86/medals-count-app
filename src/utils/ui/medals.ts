
import { CountryMedal, MedalEntry } from '@/interfaces/Medals';
import {  isValidCountryCode } from './flags';
import { COUNTRY_CODES } from '@/types/flags';
import { SORT_KEYS, SortKey } from '@/types/medals';

export function transformMedalData(medals: MedalEntry[]): CountryMedal[] {
     return medals.map(medal => {
    const code = medal.code;
    const flagIndex = isValidCountryCode(code)
      ? COUNTRY_CODES.indexOf(code)
      : -1;
     return {
    ...medal,
    code,
    flagIndex,
    total: medal.gold + medal.silver + medal.bronze
   }
  });
}

export function sortMedalData(
  medals: CountryMedal[],
  sortBy: SortKey = SORT_KEYS.GOLD
): CountryMedal[] {
  return [...medals].sort((a, b) => {
    // Primary sort
    if (b[sortBy] !== a[sortBy]) {
      return b[sortBy] - a[sortBy];
    }

    // Tiebreakers
    switch (sortBy) {
      case SORT_KEYS.GOLD: 
        return b.silver - a.silver;
      case SORT_KEYS.SILVER:
      case SORT_KEYS.BRONZE:
      case SORT_KEYS.TOTAL:
      default: 
        return b.gold - a.gold;
    }
  });
}
