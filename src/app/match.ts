import { MatchTeam } from './match-team';

export class Match {
    homeTeam: MatchTeam
    awayTeam: MatchTeam
    startTime: Date
    endTime: Date

    constructor(homeTeam: MatchTeam, awayTeam: MatchTeam, startTime: number, endTime: number) {
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.startTime = new Date(startTime);
        this.endTime = new Date(endTime);
    }
}
