import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { MatchTeam } from '../match-team';
import { Match } from '../match';
import { PlayerMatchStats } from '../player-match-stats';
import { StatsService } from '../stats.service';

@Component({
  selector: 'ios-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
  providers: [StatsService]
})
export class MatchesComponent implements OnInit {

  matches: Match[]

  constructor(private statsService: StatsService) {

  }

  ngOnInit() {

    this.matches = this.statsService.getMatchStats();
  }

  getPlayerGoals(playerMatchStats) {
    return Array(playerMatchStats.goals).fill(1);
  }
}
