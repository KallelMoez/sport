import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserService {
  userURL: string = "http://localhost:3000/users";
  constructor(private http: HttpClient) {}

  login(obj) {
    return this.http.post<{msg: string, token: any}>(`${this.userURL}/login`, obj);
  }

  signup(obj:any, file: File) {
    let fData = new FormData();
    fData.append("img", file);
    fData.append("firstName", obj.firstName);
    fData.append("lastName", obj.lastName);
    fData.append("email", obj.email);
    fData.append("pwd", obj.pwd);
    fData.append("tel", obj.tel);
    fData.append("role", obj.role);
    return this.http.post<{ msg: string }>(this.userURL +"/signup", fData);
  }
}
