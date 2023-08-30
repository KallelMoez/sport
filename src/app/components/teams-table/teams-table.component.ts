import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { TeamService } from "src/app/services/team.service";

@Component({
  selector: "app-teams-table",
  templateUrl: "./teams-table.component.html",
  styleUrls: ["./teams-table.component.css"],
})
export class TeamsTableComponent implements OnInit {
  teamsTab: any;

  constructor(private router: Router, private tService: TeamService) {}

  ngOnInit() {
    this.dataLoad();
  }
  dataLoad() {
    this.tService.getAllTeams().subscribe((data) => {
      this.teamsTab = data.teams;
    });
  }
  displayTeam(id) {
    this.router.navigate([`team-info/${id}`]);
  }
  updateTeam(id) {
    this.router.navigate([`team-update/${id}`]);
  }
  deleteTeam(id) {
    this.tService.deleteTeam(id).subscribe((data)=>{
      this.dataLoad();
    })
  }
}
