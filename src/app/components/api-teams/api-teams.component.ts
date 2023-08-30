import { Component, OnInit } from '@angular/core';
import { ApiTeamsService } from 'src/app/services/api-teams.service';

@Component({
  selector: 'app-api-teams',
  templateUrl: './api-teams.component.html',
  styleUrls: ['./api-teams.component.css']
})
export class ApiTeamsComponent implements OnInit {
  teamsTab: any = [];
  constructor(private apiService: ApiTeamsService) { }

  ngOnInit() {
    this.apiService.testTeams().subscribe((data) => {
      console.log(data.msg);
      
    })
  }

}
