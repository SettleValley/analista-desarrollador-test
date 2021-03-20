import { Component, OnInit } from '@angular/core';
import { DashboardService } from "../../services/dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data = [];

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.dashboardService.getData()
      .subscribe(
        res=>{
          console.log(res);
          this.data = res;
        },
        err => console.log(err)
      )
  }

}
