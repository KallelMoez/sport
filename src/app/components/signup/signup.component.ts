import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { confirmPassword } from "src/app/data/custom.validators";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  myPath: string;
  imagePreview: any;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.myPath = this.router.url;
    this.signupForm = this.fb.group(
      {
        firstName: ["", [Validators.required, Validators.minLength(3)]],
        lastName: ["", [Validators.required, Validators.minLength(4)]],
        email: ["", [Validators.required, Validators.email]],
        pwd: ["", [Validators.required, Validators.minLength(6)]],
        confirmPwd: [""],
        tel: ["", [Validators.required, Validators.minLength(8)]],
        img: [""],
      },
      { validators: confirmPassword("pwd", "confirmPwd") }
    );
  }

  signUp() {
    this.signupForm.value.role =
      this.myPath == "/subscription" ? "user" : "admin";
    this.userService.signup(this.signupForm.value, this.signupForm.value.img).subscribe((data) => {
      console.log(data.msg);
    });
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}
