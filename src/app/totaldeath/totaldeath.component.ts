import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-totaldeath',
  templateUrl: './totaldeath.component.html',
  styleUrls: ['./totaldeath.component.css']
})
export class TotaldeathComponent implements OnInit {
  total: any;
  result: any = [];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.totalDeaths().subscribe((res: any) => {
      this.total = res.total_confirmed;
      this.result = res.result.sort(function(a: any, b: any){return b.count - a.count});;
    });
  }
}
