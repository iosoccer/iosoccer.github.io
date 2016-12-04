import { Component, OnInit } from '@angular/core';
import { Club } from '../club';
import { StatsService } from '../stats.service';

@Component({
  selector: 'ios-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.scss'],
  providers: [StatsService]
})
export class ClubsComponent implements OnInit {

  clubs: Club[]

  constructor(private statsService: StatsService) { }

  ngOnInit() {
    this.clubs = this.statsService.getClubs();
  }

}
