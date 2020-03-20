import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgPipesModule } from 'ngx-pipes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TotalcountComponent } from './totalcount/totalcount.component';
import { MapComponent } from './map/map.component';
import { TotaldeathComponent } from './totaldeath/totaldeath.component';
import { TotalrecoveredComponent } from './totalrecovered/totalrecovered.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalcountComponent,
    MapComponent,
    TotaldeathComponent,
    TotalrecoveredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
