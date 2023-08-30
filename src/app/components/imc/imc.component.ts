import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ImcService } from "src/app/services/imc.service";

@Component({
  selector: "app-imc",
  templateUrl: "./imc.component.html",
  styleUrls: ["./imc.component.css"],
})
export class ImcComponent implements OnInit {
  person: any = {};
  imcForm: FormGroup;
  resMsg: string = "";
  constructor(private iService: ImcService) {}

  ngOnInit() {}

  calcul() {
    this.iService.getImc(this.person).subscribe((data) => {
      this.resMsg = data.msg;
    });
  }
}
