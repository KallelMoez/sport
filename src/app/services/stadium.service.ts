import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class StadiumService {
  stadiumURL: string = "http://localhost:3000/stadiums";
  constructor(private http: HttpClient) {}

  addStadium(obj) {
    return this.http.post<{ msg: string }>(this.stadiumURL, obj);
  }

  getAllStadiums() {
    return this.http.get<{ stadiums: any }>(this.stadiumURL);
  }
  deleteStadium(id) {
    return this.http.delete<{ msg: String }>(`${this.stadiumURL}/${id}`);
  }

  updateStadium(obj) {
    return this.http.put<{ msg: String }>(this.stadiumURL, obj);
  }
  getStadiumById(id) {
    return this.http.get<{ stadium: any }>(`${this.stadiumURL}/${id}`);
  }
}
