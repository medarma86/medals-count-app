import { COUNTRY_CODES, CountryCode } from "@/types/flags";

export function isValidCountryCode(code: string): code is CountryCode {
  return COUNTRY_CODES.includes(code as CountryCode);
}