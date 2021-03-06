import { Injectable } from '@angular/core';
import { Player } from './player';
import { Club } from './club';
import { MatchTeam } from './match-team';
import { Match } from './match';
import { PlayerMmrStats } from './player-mmr-stats';
import { CLUBS, PLAYERS } from './master-data';
import { STATISTICS } from './statistics';
import { MmrBracket } from './mmr-bracket';
import { PlayerMatchStats } from './player-match-stats';

@Injectable()
export class StatsService {

  players: Player[]
  clubs: Club[]
  matches: Match[]

  constructor() {

    let playerId = 1;

    this.clubs = CLUBS.map(club => {
      return new Club(club.id, club.code, club.shortName, club.fullName, club.crest);
    });

    this.players = STATISTICS.players.map(data => {

      let knownPlayer = PLAYERS.find(x => x.steamId == data.steamId);
      let name = knownPlayer && knownPlayer.name || data.name;
      let stats = new PlayerMmrStats(data.mmr, data.matches, data.wins, data.draws, data.losses,
                                     data.goals, data.conceded, data.cleanSheets, data.soloKeeperMatches);

      let player = new Player(playerId++, data.steamId, name, stats);

      if (knownPlayer) {

        player.club = this.clubs.find(club => club.id == knownPlayer.clubId);

        if (player.club) {
          player.isCaptain = knownPlayer.isCaptain;
          player.club.players.push(player);
        }
      }

      return player;
    });

    this.clubs.forEach(club => {
      club.players.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    });

    this.matches = STATISTICS.matches.map(matchData => {

      let soloKeeper;

      let teams = ['home', 'away'].map(teamName => {

        let playerMatchStats = matchData.teams[teamName].players.map(teamPlayer => {
          let player = this.players.find(x => x.steamId == teamPlayer.steamId);
          let stats = new PlayerMatchStats(player, teamPlayer.mmr, teamPlayer.goals, teamPlayer.position,
                                           teamPlayer.mmrChange, teamPlayer.isSoloKeeper);

          if (teamPlayer.isSoloKeeper) {
            soloKeeper = stats;
            return null;
          } else {
            return stats;
          }
        }).filter(player => player);

        let team = matchData.teams[teamName];

        return new MatchTeam('Mix', team.goals, team.firstHalfGoals, team.avgMmr, team.mmrChange, playerMatchStats);
      })

      let match = new Match(teams[0], teams[1], matchData.startTime, matchData.endTime);
      if (soloKeeper) {
        match.soloKeeper = soloKeeper;
      }
      return match;
    });
  }

  getPlayerStats(): Player[] {
    return this.players;
  }

  getPlayers(): Promise<Player[]> {
    return Promise.resolve(this.players);
  }

  getClubs(): Promise<Club[]> {
    return Promise.resolve(this.clubs);
  }

  getMatches(): Promise<Match[]> {
    return Promise.resolve(this.matches);
  }
}
