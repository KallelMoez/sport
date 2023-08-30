import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImcService {
  imcUrl: string = "http://localhost:3000/imc"
  constructor(private http:HttpClient) { }

  getImc(obj){
    return this.http.post<{msg: string}>(this.imcUrl, obj);
  }
}
