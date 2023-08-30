import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ScoreComponent } from './components/score/score.component';
import { NewsComponent } from './components/news/news.component';
import { StatsComponent } from './components/stats/stats.component';
import { BlogComponent } from './components/blog/blog.component';
import { NewsInfoComponent } from './components/news-info/news-info.component';
import { ArticleComponent } from './components/article/article.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { SinglePlayerComponent } from './components/single-player/single-player.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { MatchUpdateComponent } from './components/match-update/match-update.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { TeamUpdateComponent } from './components/team-update/team-update.component';
import { PlayerUpdateComponent } from './components/player-update/player-update.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { TeamComponent } from './components/team/team.component';
import { TeamsComponent } from './components/teams/teams.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BannerComponent } from './components/banner/banner.component';
import { AsterixPipe } from './pipes/asterix.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { SearchComponent } from './components/search/search.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { StadiumTableComponent } from './components/stadium-table/stadium-table.component';
import { StadiumInfoComponent } from './components/stadium-info/stadium-info.component';
import { UpdateStadiumComponent } from './components/update-stadium/update-stadium.component';
import { SearchTeamStadiumComponent } from './components/search-team-stadium/search-team-stadium.component';
import { PlayerSearchComponent } from './components/player-search/player-search.component';
import { ImcComponent } from './components/imc/imc.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ApiTeamsComponent } from './components/api-teams/api-teams.component';
import { FilterPipe } from './pipes/filter.pipe';
import { JwPaginationModule } from 'jw-angular-pagination';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CupEventComponent,
    ScoreComponent,
    NewsComponent,
    StatsComponent,
    BlogComponent,
    NewsInfoComponent,
    ArticleComponent,
    MatchesComponent,
    PlayersComponent,
    SinglePlayerComponent,
    AddMatchComponent,
    AddTeamComponent,
    AddPlayerComponent,
    DashboardComponent,
    MatchesTableComponent,
    PlayersTableComponent,
    TeamsTableComponent,
    MatchInfoComponent,
    MatchUpdateComponent,
    TeamInfoComponent,
    TeamUpdateComponent,
    PlayerUpdateComponent,
    PlayerInfoComponent,
    TeamComponent,
    TeamsComponent,
    BannerComponent,
    AsterixPipe,
    ReversePipe,
    SearchComponent,
    AddStadiumComponent,
    StadiumTableComponent,
    StadiumInfoComponent,
    UpdateStadiumComponent,
    SearchTeamStadiumComponent,
    PlayerSearchComponent,
    ImcComponent,
    WeatherComponent,
    ApiTeamsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
