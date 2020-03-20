import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-totalcount',
  templateUrl: './totalcount.component.html',
  styleUrls: ['./totalcount.component.css']
})
export class TotalcountComponent implements OnInit {

  total: any;
  result: any = [];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.totalConfirmed().subscribe((res: any) => {
      this.total = res.total_confirmed;
      this.result = res.result.sort(function(a: any, b: any){return b.count - a.count});;
    });
  }

}
