import { Injectable } from '@angular/core';
import { StatsService } from './stats.service';
import { Player } from './player';

@Injectable()
export class PlayerService {

  constructor(private statsService: StatsService) { }

  getPlayers(): Promise<Player[]> {
    return this.statsService.getPlayers();
  }

  getPlayer(id: number): Promise<Player> {
    return this.getPlayers().then(players => players.find(player => player.id === id));
  }
}
