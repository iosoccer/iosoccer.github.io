import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Club } from '../club';
import { ClubService } from '../club.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'ios-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit {

  club: Club;

  constructor(
    private clubService: ClubService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.params
      .switchMap((params: Params) => this.clubService.getClub(+params['id']))
      .subscribe(club => {
        this.club = club;
      });
  }

}
