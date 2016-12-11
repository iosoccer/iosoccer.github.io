import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../player';
import { MatchTeam } from '../match-team';
import { Match } from '../match';
import { PlayerMatchStats } from '../player-match-stats';
import { StatsService } from '../stats.service';
import 'rxjs/add/operator/switchmap';

@Component({
  selector: 'ios-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
  providers: [StatsService]
})
export class MatchesComponent implements OnInit {

  matches: Match[];
  pages: number[];
  currentPage: number;
  matchCount: number;
  matchesPerPage: number;

  constructor(
    private statsService: StatsService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {

    this.pages = [];

    this.matchesPerPage = 18;

    this.route.queryParams
      .switchMap((queryParams: Params) => {
        this.currentPage = +queryParams['page'] || 1;
        return this.statsService.getMatches();
      })
      .subscribe(matches => {
        this.matchCount = matches.length;
        this.matches = matches.slice((this.currentPage - 1) * this.matchesPerPage, (this.currentPage - 1) * this.matchesPerPage + this.matchesPerPage);
        this.pages = Array(Math.ceil(this.matchCount / this.matchesPerPage)).fill(1).map((x, i) => i + 1);
      });
  }

  getPlayerGoals(playerMatchStats) {
    return Array(playerMatchStats.goals).fill(1);
  }
}
