import { MatchReader } from './MatchReader';

// Enum imports
import { MatchResult } from './MatchResult';

// Open the file and read the data
const reader = new MatchReader('football.csv');
reader.read();

let manUnitedWins = 0;

for (let match of reader.data) {
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