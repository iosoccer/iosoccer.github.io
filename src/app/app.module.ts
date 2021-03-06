import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MatchesComponent } from './matches/matches.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LeaderboardsComponent } from './leaderboards/leaderboards.component';

import { AppRoutingModule }     from './app-routing.module';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './header/header.component';
import { CommunityComponent } from './community/community.component';
import { ClubsComponent } from './clubs/clubs.component';
import { FooterComponent } from './footer/footer.component';
import { InfoComponent } from './info/info.component';
import { DownloadComponent } from './download/download.component';
import { ClubComponent } from './club/club.component';
import { StatsService } from './stats.service';
import { ClubService } from './club.service';
import { PlayerComponent } from './player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchesComponent,
    NavigationComponent,
    LeaderboardsComponent,
    BlogComponent,
    HeaderComponent,
    CommunityComponent,
    ClubsComponent,
    FooterComponent,
    InfoComponent,
    DownloadComponent,
    ClubComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [StatsService, ClubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
