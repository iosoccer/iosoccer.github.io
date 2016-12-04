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

    this.clubs = CLUBS.map(club => {
      return new Club(club.id, club.code, club.shortName, club.fullName, club.crest);
    });

    this.players = STATISTICS.players.map(data => {

      let knownPlayer = PLAYERS.find(x => x.steamId == data.steamId);
      let name = knownPlayer && knownPlayer.name || data.name;
      let stats = new PlayerMmrStats(data.mmr, data.matches, data.wins, data.draws, data.losses, data.goals, data.conceded, data.cleanSheets);

      let player = new Player(data.steamId, name, stats);

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

    this.matches = STATISTICS.matches.map(match => {

      let teams = ['home', 'away'].map(teamName => {

        let playerMatchStats = match.teams[teamName].players.map(teamPlayer => {
          let player = this.players.find(x => x.steamId == teamPlayer.steamId);
          return new PlayerMatchStats(player, teamPlayer.mmr, teamPlayer.goals, teamPlayer.position, teamPlayer.isSoloKeeper);
        });

        let team = match.teams[teamName];

        return new MatchTeam('Mix', team.goals, team.firstHalfGoals, team.avgMmr, team.mmrChange, playerMatchStats);
      })

      return new Match(teams[0], teams[1], match.startTime, match.endTime);
    });
  }

  getPlayerStats(): Player[] {
    return this.players;
  }

  getClubs(): Club[] {
    return this.clubs;
  }

  getMatchStats(): Match[] {
    return this.matches;
  }
}
