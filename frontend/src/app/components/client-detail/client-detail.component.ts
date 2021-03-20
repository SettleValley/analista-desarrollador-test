import { Component, OnInit } from '@angular/core';
import { DashboardService } from "../../services/dashboard.service";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  client: any;

  constructor(
    private dashboardService: DashboardService,
    private route:  ActivatedRoute
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const clientID = routeParams.get("id");
    // console.log(clientID)
    this.dashboardService.clientDataDetail(`${clientID}`)
      .subscribe(
        res=>{
          console.log(res)
          this.client = res;
        },
        err => console.log(err)
      )
  }

}
