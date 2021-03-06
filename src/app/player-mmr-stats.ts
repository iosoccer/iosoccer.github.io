export class PlayerMmrStats {
    mmr: number
    matches: number
    wins: number
    draws: number
    losses: number
    goals: number
    conceded: number
    cleanSheets: number
    soloKeeperMatches: number

    constructor(mmr: number, matches: number, wins: number, draws: number, losses: number, goals: number, conceded: number, cleanSheets: number, soloKeeperMatches: number) {
        this.mmr = mmr;
        this.matches = matches;
        this.wins = wins;
        this.draws = draws;
        this.losses = losses;
        this.goals = goals;
        this.conceded = conceded;
        this.cleanSheets = cleanSheets;
        this.soloKeeperMatches = soloKeeperMatches;
    }
}