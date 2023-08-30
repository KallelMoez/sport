import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import jwt_decode from 'jwt-decode';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  // define user object
  user: any = {};
  // define form ID
  loginForm: FormGroup;
  resMsg: string = "";
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  login() {
    console.log("here object", this.user);
    this.userService.login(this.user).subscribe((data) => {
      console.log("data ", data);
      if (data.msg == "success") {
        let decodedToken:any = this.decodeToken(data.token);
        console.log(decodedToken);
        sessionStorage.setItem("token", data.token);
        if (decodedToken.role == "user") {
          this.router.navigate([""]);
        } else {
          this.router.navigate(["dashboard"]);
        }
        
      } else {
        this.resMsg = "Please Check Email/Pwd";
      }
    });
  }
  decodeToken(token: string) {
    return jwt_decode(token);
    }
}
