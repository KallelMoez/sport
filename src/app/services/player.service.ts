import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerURL: string="http://localhost:3000/players"
  constructor(private http: HttpClient) { }

  getAllPlayers(){
    return this.http.get<{ allPlayers: any; }>(this.playerURL);
  }
  getPlayerById(id){
    return this.http.get<{player:any}>(`${this.playerURL}/${id}`);
  }
  deletePlayer(id){
    return this.http.delete<{msg: string}>(`${this.playerURL}/${id}`);
  }
  updatePlayer(obj){
    return this.http.put<{msg:string}>(this.playerURL, obj);
  }
  addPlayer(obj:any, file:File){
    let fData= new FormData();
    fData.append("img", file);
    fData.append("name", obj.name);
    fData.append("age", obj.age);
    fData.append("position", obj.position);

    return this.http.post<{ msg: string; }>(this.playerURL, fData);
  }
  searchPlayer(obj){
    return this.http.post<{msg: string; players:any;}>(`${this.playerURL}/search`,obj);
  }
}
