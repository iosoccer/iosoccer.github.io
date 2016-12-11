import { Component, OnInit } from '@angular/core';
import { Club } from '../club';
import { ClubService } from '../club.service';

@Component({
  selector: 'ios-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.scss'],
  providers: [ClubService]
})
export class ClubsComponent implements OnInit {

  clubs: Club[]

  constructor(private clubService: ClubService) { }

  ngOnInit() {
    this.clubService.getClubs().then(clubs => this.clubs = clubs);
  }

}
