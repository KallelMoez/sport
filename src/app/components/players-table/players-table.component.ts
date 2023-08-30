import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PlayerService } from "src/app/services/player.service";

@Component({
  selector: "app-players-table",
  templateUrl: "./players-table.component.html",
  styleUrls: ["./players-table.component.css"],
})
export class PlayersTableComponent implements OnInit {
  playersTab: any;
  constructor(private router: Router, private pService: PlayerService) {}

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.pService.getAllPlayers().subscribe((data) => {
      this.playersTab = data.allPlayers;
    });
  }
  displayPlayer(id) {
    this.router.navigate([`player-info/${id}`]);
  }
  updatePlayer(id) {
    this.router.navigate([`player-update/${id}`]);
  }
  deletePlayer(id: number) {
    this.pService.deletePlayer(id).subscribe((data) => {
      this.loadData();
    });
  }
}
