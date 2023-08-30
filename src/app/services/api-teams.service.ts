import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiTeamsService {
  teamApiUrl: string = "http://localhost:3000/teamsApi";
  constructor(private http: HttpClient) { }

  testTeams(){
    return this.http.get<{teams: any, msg:string;}>(this.teamApiUrl);
  }
}
