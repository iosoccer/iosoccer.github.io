import { Injectable } from '@angular/core';
import { Club } from './club';
import { StatsService } from './stats.service';

@Injectable()
export class ClubService {

  clubs: Club[];

  constructor(private statsService: StatsService) {
  }

  getClubs(): Promise<Club[]> {
    return this.statsService.getClubs();
  }

  getClub(id: number): Promise<Club> {
    return this.getClubs().then(clubs => clubs.find(club => club.id === id));
  }

}
