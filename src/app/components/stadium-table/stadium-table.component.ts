import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { StadiumService } from "src/app/services/stadium.service";

@Component({
  selector: "app-stadium-table",
  templateUrl: "./stadium-table.component.html",
  styleUrls: ["./stadium-table.component.css"],
})
export class StadiumTableComponent implements OnInit {
  stadiumsTab: any;
  constructor(private router: Router, private sService: StadiumService) {}

  ngOnInit() {
    this.dataLoad();
  }
  dataLoad() {
    this.sService.getAllStadiums().subscribe((data) => {
      this.stadiumsTab = data.stadiums;
    });
  }
  displayStadium(id) {
    this.router.navigate([`stadium-info/${id}`]);
  }
  deleteStadium(id) {
    this.sService.deleteStadium(id).subscribe((data) => {
      console.log(data.msg);
      this.dataLoad();
    });
  }

  updateStadium(id) {
    this.router.navigate([`stadium-update/${id}`]);
  }
}
