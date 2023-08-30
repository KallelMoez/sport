import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { T } from "src/app/data/matches";
import { MatchService } from "src/app/services/match.service";

@Component({
  selector: "app-matches-table",
  templateUrl: "./matches-table.component.html",
  styleUrls: ["./matches-table.component.css"],
})
export class MatchesTableComponent implements OnInit {
  matchesTab: any;
  delRes: String = "";
  pageOfItems: Array<any>;
  constructor(private router: Router, private mService: MatchService) {}

  ngOnInit() {
    this.dataLoad();
  }
  dataLoad() {
    this.mService.getAllMatches().subscribe((data) => {
      this.matchesTab = data.matches;
    });
  }

  displayMatch(id) {
    this.router.navigate([`match-info/${id}`]);
  }
  updateMatch(id) {
    this.router.navigate([`match-update/${id}`]);
  }
  deleteMatch(id) {
    this.mService.deleteMatch(id).subscribe((data) => {
      this.dataLoad();
      this.delRes = data.msg;
      console.log(this.delRes);
      
    });
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
}
