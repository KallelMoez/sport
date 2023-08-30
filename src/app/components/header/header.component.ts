import { Component, OnInit } from "@angular/core";
import { RouterLinkActive } from "@angular/router";
import jwt_decode from "jwt-decode";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  user: any;
  constructor() {}

  ngOnInit() {}
  isLoggedIn() {
    let jwt = sessionStorage.getItem("token");
    if (jwt) {
      this.user = this.decodeToken(jwt);
    }
    return !!jwt;
  }
  logout() {
    sessionStorage.removeItem("token");
  }
  decodeToken(token: string) {
    return jwt_decode(token);
  }
}
