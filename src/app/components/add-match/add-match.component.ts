import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  resMsg :string="";
  match:any ={};
  matchForm: FormGroup;
  title: string = "Add Match"
  constructor(private mService: MatchService) { }

  ngOnInit() {
  }

  addMatch(){
    this.mService.addMatch(this.match).subscribe((data)=> {
      this.resMsg = data.msg;
    });
    
  }

}
