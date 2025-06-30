
// Alphabetical order matches flags.png sprite
export const COUNTRY_CODES = [
  'AUT', 'BLR', 'CAN', 'CHN', 'FRA', 'GER',
  'ITA', 'NED', 'NOR', 'RUS', 'SUI', 'SWE', 'USA'
] as const;   // can still move them to a separate file under constants if needed

export type CountryCode = typeof COUNTRY_CODES[number];