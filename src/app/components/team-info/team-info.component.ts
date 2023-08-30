import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TeamService } from "src/app/services/team.service";

@Component({
  selector: "app-team-info",
  templateUrl: "./team-info.component.html",
  styleUrls: ["./team-info.component.css"],
})
export class TeamInfoComponent implements OnInit {
  id: any;
  findedTeam: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private tService: TeamService
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.tService.getTeamById(this.id).subscribe((data) => {
      this.findedTeam = data.team;
    });
  }
}
