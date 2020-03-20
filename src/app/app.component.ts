import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'covid19';

  data: any = {};

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.testConnectivity().subscribe((res: any) => {
      this.data = res;
      console.log('Data: ', this.data);
    });
  }
}
