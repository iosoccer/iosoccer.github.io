import { Player } from './player';

export class PlayerMatchStats {
    player: Player
    mmr: string
    goals: number
    position: string
    isSoloKeeper: boolean

    constructor(player: Player, mmr: string, goals: number, position: string, isSoloKeeper: boolean) {
        this.player = player;
        this.mmr = mmr;
        this.goals = goals;
        this.position = position;
        this.isSoloKeeper = isSoloKeeper;
    }
}