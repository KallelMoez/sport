import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { PlayerService } from "src/app/services/player.service";
@Component({
  selector: "app-player-update",
  templateUrl: "./player-update.component.html",
  styleUrls: ["./player-update.component.css"],
})
export class PlayerUpdateComponent implements OnInit {
  player: any = {};
  updatePlayerForm: FormGroup;

  playerId: any;
  constructor(
    private pService: PlayerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.playerId = this.activatedRoute.snapshot.paramMap.get("id");
    this.pService.getPlayerById(this.playerId).subscribe((data) => {
      this.player = data.player;
    });
  }
  validate() {
    this.pService.updatePlayer(this.player).subscribe((data) => {
      console.log(data.msg);
      this.router.navigate(["dashboard"]);
    });
  }
}
