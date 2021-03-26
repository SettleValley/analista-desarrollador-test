import { Component, OnInit } from '@angular/core';
import { DashboardService } from "../../services/dashboard.service";
import { ActivatedRoute } from "@angular/router";
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';




@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  client: any;
  clusterData: any;
  clicked:Boolean= false;

  doughnutChartLabels: Label[] = ['Cluster 1', 'Cluster 2', 'Cluster 3'];
  doughnutChartData: MultiDataSet = [[]];
  doughnutChartType: ChartType = 'doughnut';

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

  getUserClusterData(){
    const routeParams = this.route.snapshot.paramMap;
    const clientID = routeParams.get("id");
    this.clicked = (this.clicked == false)? true:false;
    console.log(clientID);
    this.dashboardService.clientClusterKmeans(`${clientID}`)
        .subscribe(
          res=>{
            let dataCounting = res.reduce(function(sums: { [x: string]: any; },entry: { cluster: string | number; }){
              sums[entry.cluster] = (sums[entry.cluster] || 0) + 1;
              console.log(sums)
              return sums;
           },{});
           this.doughnutChartData = [
             [dataCounting[0], 
             dataCounting[1], 
             dataCounting[2]]
            ];
            this.clusterData = res;
          },
          err => console.log(err)
        )
  }
  



}
