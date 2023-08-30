import { Component, OnInit } from '@angular/core';

import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  playersTab: any;
  constructor(private pService: PlayerService) { }

  ngOnInit() {
    this.pService.getAllPlayers().subscribe((data) => {
      console.log("here response from BE", data);
      this.playersTab = data.allPlayers;
    });
  }

}
