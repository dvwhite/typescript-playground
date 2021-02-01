import { CsvFileReader } from './CsvFileReader';

import { MatchReader } from './MatchReader';

// Enum imports
import { MatchResult } from './MatchResult';

let manUnitedWins = 0;

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

for (let match of matchReader.matches) {
  // Game data
  const homeTeam = match[1];
  const awayTeam = match[2];
  const matchResult = match[5];

  // Calculate the total wins
  if (homeTeam == 'Man United' && matchResult == MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (awayTeam == 'Man United' && matchResult == MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log("Man United wins: " + manUnitedWins);