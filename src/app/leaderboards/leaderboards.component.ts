import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { StatsService } from '../stats.service';
import { MmrBracket } from '../mmr-bracket';
import { MMR_BRACKETS } from '../mmr-brackets';

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

}
