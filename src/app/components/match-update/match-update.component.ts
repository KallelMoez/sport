import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { MatchService } from "src/app/services/match.service";

@Component({
  selector: "app-match-update",
  templateUrl: "./match-update.component.html",
  styleUrls: ["./match-update.component.css"],
})
export class MatchUpdateComponent implements OnInit {
  id : any;
  findedMatch: any = {};
  updateMatchForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private mService:MatchService) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.mService.getMatchById(this.id).subscribe((data)=>{
      this.findedMatch = data.findedMatch;
    })
  }
  updateMatch() {
    this.mService.updateMatch(this.findedMatch).subscribe((data)=>{
      console.log(data.msg);
      
    });
  }
}
