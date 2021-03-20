import { Component, OnInit } from '@angular/core';
import { DashboardService } from "../../services/dashboard.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data = [];
  clientID:String = "";

  constructor(
    private dashboardService: DashboardService,
    private router: Router
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

  searchClientID(){
    this.router.navigate([`/client/${this.clientID}`])
  }

}
