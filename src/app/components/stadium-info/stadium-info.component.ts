import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { StadiumService } from "src/app/services/stadium.service";

@Component({
  selector: "app-stadium-info",
  templateUrl: "./stadium-info.component.html",
  styleUrls: ["./stadium-info.component.css"],
})
export class StadiumInfoComponent implements OnInit {
  stadium: any = {};
  stadiumId: any;
  constructor(
    private sService: StadiumService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.stadiumId = this.activatedRoute.snapshot.paramMap.get("id");
    this.sService.getStadiumById(this.stadiumId).subscribe((data) => {
      this.stadium = data.stadium;
    });
  }
}
