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

@NgModule({
  declarations: [
    AppComponent,
    MatchesComponent,
    NavigationComponent,
    LeaderboardsComponent,
    BlogComponent,
    HeaderComponent,
    CommunityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
