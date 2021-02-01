import { CsvFileReader } from './CsvFileReader';

// Utils imports
import { dateStringtToDate } from './utils';

// Enum imports
import { MatchResult } from './MatchResult';

// Tuples
type MatchData = [Date, string, string, number, number, MatchResult];

export class MatchReader extends CsvFileReader<MatchData> {
    mapRow(row: string[]): MatchData {
      return [
        dateStringtToDate(row[0]), // Date
        row[1], // Home team
        row[2], // Away team
        parseInt(row[3]), // Home goals scored
        parseInt(row[4]), // Away goals scored
        row[5] as MatchResult // Match result
      ]
    }
}