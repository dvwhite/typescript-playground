// Interface imports
import { MatchData } from '../MatchData';
import { Analyzer } from '../Summary';

// Enum imports
import { MatchResult } from '../MatchResult';

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      // Game data
      const homeTeam = match[1];
      const awayTeam = match[2];
      const matchResult = match[5];
    
      // Calculate the total wins
      if (homeTeam == 'Man United' && matchResult == MatchResult.HomeWin) {
        wins++;
      } else if (awayTeam == 'Man United' && matchResult == MatchResult.AwayWin) {
        wins++;
      }
  }

  return `Team ${this.team} won ${wins} games`;
}
