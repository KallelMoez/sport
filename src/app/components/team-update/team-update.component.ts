import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { TeamService } from "src/app/services/team.service";

@Component({
  selector: "app-team-update",
  templateUrl: "./team-update.component.html",
  styleUrls: ["./team-update.component.css"],
})
export class TeamUpdateComponent implements OnInit {
  id: any;
  findedTeam: any = {};
  teamUpdateForm: FormGroup;
  resMsg:string = "";
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
  updateTeam() {
    this.tService.updateTeam(this.findedTeam).subscribe((data)=>{
      this.resMsg = data.msg;
    })
  }
}
