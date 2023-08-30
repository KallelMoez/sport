import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { StadiumService } from "src/app/services/stadium.service";

@Component({
  selector: "app-update-stadium",
  templateUrl: "./update-stadium.component.html",
  styleUrls: ["./update-stadium.component.css"],
})
export class UpdateStadiumComponent implements OnInit {
  stadium: any = {};
  id: any;
  updateStadiumForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private sService: StadiumService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.sService.getStadiumById(this.id).subscribe((data) => {
      this.stadium = data.stadium;
    });
    this.updateStadiumForm = this.fb.group({
      name: ["", Validators.required],
      capacity: ["", Validators.required],
      country: [""],
    });
  }

  updateStadium() {
    this.sService
      .updateStadium(this.stadium)
      .subscribe((data) => {
        console.log(data.msg);
        this.router.navigate(["dashboard"]);
      });
  }
}
