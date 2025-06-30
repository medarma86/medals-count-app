
import { IMedalService, MedalEntry } from '@/interfaces/Medals';
import { ValidationError } from '@/utils/api/errors/validationError';
import { logError } from '@/utils/api/logger';
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
       throw new ValidationError('Expected medal data array.');
      }

      return parsedData as MedalEntry[];
    } catch (error) {
      logError(`Failed to read medal data from ${this.filePath}`, error);
      throw new Error('Failed to read medal data'); // generic message for caller
    }
  }
}
