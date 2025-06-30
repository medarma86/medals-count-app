import { CountryCode } from "@/types/flags";

export interface MedalEntry {
  code: CountryCode
  gold: number;
  silver: number;
  bronze: number;
}

export interface IMedalService {
  fetchMedals(): Promise<MedalEntry[]>;
}