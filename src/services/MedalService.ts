
import { IMedalService, MedalEntry } from '@/interfaces/Medals';
import { promises as fs } from 'fs';
import path from 'path';

export class MedalService implements IMedalService {
  private filePath = path.join(process.cwd(), 'public', 'data', 'medals.json');

  async fetchMedals(): Promise<MedalEntry[]> {
    try {
      const fileContent = await fs.readFile(this.filePath, 'utf-8');
      const parsedData = JSON.parse(fileContent);

      // Basic validation
      if (!Array.isArray(parsedData)) {
        throw new Error('Expected medal data array.');
      }

      return parsedData as MedalEntry[];
    } catch (error) {
      console.error(`Failed to read medal data from ${this.filePath}`, error); //remove this before pushing to production
      throw new Error('Failed to read medal data'); // generic message for caller
    }
  }
}
