import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FiltersComponent } from './components/filters/filters.component';
import { ShellComponent } from './components/shell/shell.component';
import { PropertiesTableComponent } from './components/properties-table/properties-table.component';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './loader/interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    ShellComponent,
    PropertiesTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatProgressBarModule,
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
