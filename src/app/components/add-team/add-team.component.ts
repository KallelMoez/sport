import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  team:any = {};
  resMsg:string = "";
  teamForm : FormGroup;
  title: string = "Add Team";
  constructor(private tService: TeamService) { }

  ngOnInit() {
  }

  addTeam(){
    this.tService.addTeam(this.team, this.team.img).subscribe((data)=>{
      this.resMsg = data.msg;
    })
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.team.img = file;
    const reader = new FileReader();
    reader.readAsDataURL(file);
  }
}
