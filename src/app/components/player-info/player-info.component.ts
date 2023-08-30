import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  player: any ={};
 
  playerId:any;
  constructor(private pService: PlayerService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.playerId = this.activatedRoute.snapshot.paramMap.get("id");
    this.pService.getPlayerById(this.playerId).subscribe((data)=>{
      this.player = data.player;
    })
  }

}
