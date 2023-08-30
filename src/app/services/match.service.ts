import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MatchService {
  matchURL: string = "http://localhost:3000/matches";
  constructor(private http: HttpClient) {}

  addMatch(obj) {
    return this.http.post<{ msg: string }>(this.matchURL, obj);
  }
  getMatchById(id) {
    return this.http.get<{ findedMatch: any }>(`${this.matchURL}/${id}`);
  }
  deleteMatch(id) {
    return this.http.delete<{ msg: String }>(`${this.matchURL}/${id}`);
  }
  updateMatch(obj) {
    return this.http.put<{msg: String}>(this.matchURL, obj);
  }
  getAllMatches() {
    return this.http.get<{ matches: any }>(this.matchURL);
  }
}
