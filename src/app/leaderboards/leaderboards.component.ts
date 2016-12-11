import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { StatsService } from '../stats.service';
import { MmrBracket } from '../mmr-bracket';
import { MMR_BRACKETS } from '../mmr-brackets';

const MINIMUM_MATCH_COUNT = 5;

class PlayerGrouping {
  mmrBracket: MmrBracket
  players: Player[]
  startIndex: number

  constructor(mmrBracket: MmrBracket, players: Player[], startIndex) {
    this.mmrBracket = mmrBracket;
    this.players = players;
    this.startIndex = startIndex;
  }
}

@Component({
  selector: 'ios-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.scss'],
  providers: [StatsService]
})
export class LeaderboardsComponent implements OnInit {

  playerGroupings: PlayerGrouping[]

  constructor(private statsService: StatsService) {

  }

  ngOnInit() {

    this.playerGroupings = MMR_BRACKETS.map((mmrBracket, i) => {
      let prevThreshold = i > 0 ? MMR_BRACKETS[i - 1].threshold + 1 : 0;
      return new PlayerGrouping(new MmrBracket(prevThreshold, mmrBracket.threshold, mmrBracket.name, mmrBracket.label), [], 0);
    });

    this.statsService.getPlayerStats().forEach(player => {

      if (player.mmrStats.matches + player.mmrStats.soloKeeperMatches < MINIMUM_MATCH_COUNT) {
        return;
      }
      let grouping = this.playerGroupings.find(playerGrouping => playerGrouping.mmrBracket.threshold >= player.mmrStats.mmr);
      grouping.players.push(player);
    });

    this.playerGroupings.reverse();

    this.playerGroupings.reduce((playerCount, grouping) => {
      grouping.startIndex = playerCount;
      return playerCount + grouping.players.length;
    }, 0);
  }

  getStars(index: number) {
    return Array(this.playerGroupings.length - index).fill(1);
  }

  getAvgGoals(player: Player) {
    return (player.mmrStats.goals / Math.max(1, player.mmrStats.matches)).toFixed(1);
  }

  getAvgConceded(player: Player) {
    return (player.mmrStats.conceded / Math.max(1, player.mmrStats.matches)).toFixed(1);
  }

  getAvgCleanSheets(player: Player) {
    return (player.mmrStats.cleanSheets / Math.max(1, player.mmrStats.matches)).toFixed(1);
  }
}
