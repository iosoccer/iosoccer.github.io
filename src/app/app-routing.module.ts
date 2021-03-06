import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
import { LeaderboardsComponent }    from './leaderboards/leaderboards.component';
import { MatchesComponent }         from './matches/matches.component';
import { BlogComponent }            from './blog/blog.component';
import { CommunityComponent }       from './community/community.component';
import { ClubsComponent }           from './clubs/clubs.component';
import { InfoComponent }            from './info/info.component';
import { DownloadComponent }        from './download/download.component';
import { ClubComponent }            from './club/club.component';
import { PlayerComponent }          from './player/player.component';

const routes: Routes = [
  { path: '', redirectTo: '/leaderboards', pathMatch: 'full' },
  { path: 'leaderboards',  component: LeaderboardsComponent },
  { path: 'matches', component: MatchesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'clubs', component: ClubsComponent },
  { path: 'info', component: InfoComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'clubs/:id', component: ClubComponent },
  { path: 'players/:id', component: PlayerComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}