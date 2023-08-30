import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TeamService {
  teamURL: string = "http://localhost:3000/teams";
  constructor(private http: HttpClient) {}

  addTeam(obj: any, file: File) {
    let fData = new FormData();
    fData.append("img", file);
    fData.append("name", obj.name);
    fData.append("owner", obj.owner);
    fData.append("stadium", obj.stadium);
    return this.http.post<{ msg: string }>(this.teamURL, fData);
  }
  getAllTeams() {
    return this.http.get<{ teams: any }>(this.teamURL);
  }
  getTeamById(id) {
    return this.http.get<{ team: any }>(`${this.teamURL}/${id}`);
  }
  deleteTeam(id) {
    return this.http.delete(`${this.teamURL}/${id}`);
  }
  updateTeam(obj) {
    return this.http.put<{ msg: string }>(this.teamURL, obj);
  }
}
