import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { stadiums } from "src/app/data/stadiums";
import { teams } from "src/app/data/teams";

@Component({
  selector: "app-search-team-stadium",
  templateUrl: "./search-team-stadium.component.html",
  styleUrls: ["./search-team-stadium.component.css"],
})
export class SearchTeamStadiumComponent implements OnInit {
  teamTab: any = teams;
  findedTeam: any;
  findedStadium: any;
  errorMsg: string = "";
  stadiumTab: any = stadiums;
  searchTeamForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.searchTeamForm = this.fb.group({
      stadiumInput: ["", [Validators.required, Validators.minLength(3)]],
    });
  }

  searchTeam() {
    let stadium = this.searchTeamForm.value.stadiumInput;
    this.findedStadium = this.stadiumTab.find(
      (element) => element.name == stadium
    );
    console.log("!findedStadium ", this.findedStadium);

    if (this.findedStadium) {
      this.findedTeam = this.teamTab.find(
        (element) => element.stadium == this.findedStadium.id
      );
      console.log("findedTeam", this.findedTeam);
    }
    if (this.findedStadium && !this.findedTeam) {
      this.errorMsg = "Not Affected";
    } else if (!this.findedStadium) {
      this.errorMsg = "Not Found";
    }
  }
}
