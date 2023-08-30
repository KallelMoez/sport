import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { HomeComponent } from "./components/home/home.component";
import { MatchesComponent } from "./components/matches/matches.component";
import { PlayersComponent } from "./components/players/players.component";
import { AddMatchComponent } from "./components/add-match/add-match.component";
import { AddTeamComponent } from "./components/add-team/add-team.component";
import { AddPlayerComponent } from "./components/add-player/add-player.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { MatchInfoComponent } from "./components/match-info/match-info.component";
import { MatchUpdateComponent } from "./components/match-update/match-update.component";
import { TeamInfoComponent } from "./components/team-info/team-info.component";
import { TeamUpdateComponent } from "./components/team-update/team-update.component";
import { PlayerInfoComponent } from "./components/player-info/player-info.component";
import { PlayerUpdateComponent } from "./components/player-update/player-update.component";
import { TeamsComponent } from "./components/teams/teams.component";
import { SearchComponent } from "./components/search/search.component";
import { AddStadiumComponent } from "./components/add-stadium/add-stadium.component";
import { StadiumInfoComponent } from "./components/stadium-info/stadium-info.component";
import { SearchTeamStadiumComponent } from "./components/search-team-stadium/search-team-stadium.component";
import { PlayerSearchComponent } from "./components/player-search/player-search.component";
import { UpdateStadiumComponent } from "./components/update-stadium/update-stadium.component";
import { ImcComponent } from "./components/imc/imc.component";
import { WeatherComponent } from "./components/weather/weather.component";
import { ApiTeamsComponent } from "./components/api-teams/api-teams.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "subscription", component: SignupComponent },
  { path: "signupAdmin", component: SignupComponent },
  { path: "myMatches", component: MatchesComponent },
  { path: "players", component: PlayersComponent },
  { path: "addMatch", component: AddMatchComponent },
  { path: "addTeam", component: AddTeamComponent },
  { path: "addPlayer", component: AddPlayerComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "match-info/:id", component: MatchInfoComponent },
  { path: "match-update/:id", component: MatchUpdateComponent },
  { path: "team-info/:id", component: TeamInfoComponent },
  { path: "team-update/:id", component: TeamUpdateComponent },
  { path: "player-info/:id", component: PlayerInfoComponent },
  { path: "player-update/:id", component: PlayerUpdateComponent },
  { path: "teams", component: TeamsComponent },
  { path: "search", component: SearchComponent },
  { path: "add-stadium", component: AddStadiumComponent },
  { path: "stadium-info/:id", component: StadiumInfoComponent },
  { path: "stadium-update/:id", component: UpdateStadiumComponent },
  { path: "search-team-stadium", component: SearchTeamStadiumComponent },
  { path: "search-player", component: PlayerSearchComponent },
  { path: "imc-calcul", component: ImcComponent},
  { path: "weather", component: WeatherComponent},
  { path : "api-teams" , component: ApiTeamsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
