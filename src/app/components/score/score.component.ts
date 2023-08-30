import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  @Input () singleMatch: any ={};
  constructor() { }

  ngOnInit() {
  }
  scoreColor(pointedScore, scoreTwo){
    if(pointedScore > scoreTwo){
      return "green";
    }else if (pointedScore < scoreTwo){
      return "red";
    }else{
      return "blue";
    }
  }
  
}
