import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { StadiumService } from "src/app/services/stadium.service";

@Component({
  selector: "app-add-stadium",
  templateUrl: "./add-stadium.component.html",
  styleUrls: ["./add-stadium.component.css"],
})
export class AddStadiumComponent implements OnInit {
  addStadiumForm: FormGroup;
  resMsg: string = "";
  constructor(private fb: FormBuilder, private sService: StadiumService) {}

  ngOnInit() {
    this.addStadiumForm = this.fb.group({
      name: ["", Validators.required],
      capacity: ["", Validators.required],
      country: [""],
    });
  }
  addStadium() {
    this.sService.addStadium(this.addStadiumForm.value).subscribe((data) => {
      this.resMsg = data.msg;
    });
  }
}
