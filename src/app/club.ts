import { Player } from './player';

export class Club {
    id: number
    code: string
    shortName: string
    fullName: string
    crest: string
    players: Player[]

    constructor(id: number, code: string, shortName: string, fullName: string, crest: string) {
        this.id = id;
        this.code = code;
        this.shortName = shortName;
        this.fullName = fullName;
        this.crest = `assets/images/clubs/${crest}`;
        this.players = [];
    }
}
