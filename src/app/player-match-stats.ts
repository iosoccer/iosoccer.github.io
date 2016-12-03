import { Player } from './player';

export class PlayerMatchStats {
    player: Player
    mmr: string
    goals: number

    constructor(player: Player, mmr: string, goals: number) {
        this.player = player;
        this.mmr = mmr;
        this.goals = goals;
    }
}