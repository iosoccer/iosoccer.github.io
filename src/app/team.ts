import { PlayerMatchStats } from './player-match-stats';

export class Team {
    name: string
    goals: number
    avgMmr: number
    mmrChange: number
    playerMatchStats: PlayerMatchStats[]

    constructor(name: string, goals: number, avgMmr: number, mmrChange: number, playerMatchStats: PlayerMatchStats[]) {
        this.name = name;
        this.goals = goals;
        this.avgMmr = avgMmr;
        this.mmrChange = mmrChange;
        this.playerMatchStats = playerMatchStats;
    }
}
