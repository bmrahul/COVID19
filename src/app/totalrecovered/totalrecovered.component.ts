import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-totalrecovered',
  templateUrl: './totalrecovered.component.html',
  styleUrls: ['./totalrecovered.component.css']
})
export class TotalrecoveredComponent implements OnInit {

  total: any;
  result: any = [];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.totalRecovered().subscribe((res: any) => {
      this.total = res.total_confirmed;
      this.result = res.result.sort(function(a: any, b: any){return b.count - a.count});;
    });
  }

}
