import { Component, OnInit } from '@angular/core';
import { T } from 'src/app/data/matches';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  match: any ;
  matchTab:any = T;
  constructor() { }

  ngOnInit() {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    this.match = this.matchTab[getRandomInt(this.matchTab.length)];
  }

}
