// Utils imports
import { dateStringtToDate } from './utils';

// Enum imports
import { MatchResult } from './MatchResult';

// Tuple imports
import { MatchData } from './MatchData';

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        return [
          dateStringtToDate(row[0]), // Date
          row[1], // Home team
          row[2], // Away team
          parseInt(row[3]), // Home goals scored
          parseInt(row[4]), // Away goals scored
          row[5] as MatchResult, // Match result
        ];
      }
    );
  }
}
