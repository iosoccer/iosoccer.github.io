import { PlayerMmrStats } from './player-mmr-stats';
import { PlayerMatchStats } from './player-match-stats';
import { Club } from './club';

export class Player {
    steamId: string
    name: string
    club: Club
    isCaptain: boolean
    mmrStats: PlayerMmrStats
    matchStats: PlayerMatchStats

    constructor(steamId: string, name: string, mmrStats: PlayerMmrStats) {
        this.steamId = steamId;
        this.name = name;
        this.mmrStats = mmrStats;
    }
}