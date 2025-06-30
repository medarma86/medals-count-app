export const SORT_KEYS = {
  GOLD: 'gold',
  SILVER: 'silver',
  BRONZE: 'bronze',
  TOTAL: 'total',
} as const;  // can still move them to a separate file under constants if needed

export const SORT_KEY_LIST = Object.values(SORT_KEYS) as SortKey[];

export type SortKey = typeof SORT_KEYS[keyof typeof SORT_KEYS];