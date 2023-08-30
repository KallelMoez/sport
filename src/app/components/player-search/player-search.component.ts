import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PlayerService } from "src/app/services/player.service";

@Component({
  selector: "app-player-search",
  templateUrl: "./player-search.component.html",
  styleUrls: ["./player-search.component.css"],
})
export class PlayerSearchComponent implements OnInit {
  searchplayerForm: FormGroup;
  findedPlayers: any = [];
  resMsg: string = "";
  constructor(private fb: FormBuilder, private pService: PlayerService) {}

  ngOnInit() {
    this.searchplayerForm = this.fb.group({
      name: ["", [Validators.required]],
      age: ["", [Validators.required]],
    });
  }

  searchPlayer() {
    this.pService
      .searchPlayer(this.searchplayerForm.value)
      .subscribe((data) => {
        
        this.findedPlayers = data.players;
        console.log(this.findedPlayers);
        this.resMsg = data.msg;
      });
  }
}
