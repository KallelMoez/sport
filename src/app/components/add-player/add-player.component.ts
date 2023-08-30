import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  resMsg:string = "";
  playerForm : FormGroup;
  title: string = "Add Player";
  imagePreview: any;
  constructor(private pService:PlayerService, private fb:FormBuilder) { }

  ngOnInit() {
    this.playerForm = this.fb.group({
      name: [""],
      age: [""],
      position: [""],
      img: [""]
    })
  }

  addPlayer(){
    this.pService.addPlayer(this.playerForm.value, this.playerForm.value.img).subscribe((data)=>{
      this.resMsg = data.msg;
    })
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.playerForm.patchValue({ img: file });
    this.playerForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}
