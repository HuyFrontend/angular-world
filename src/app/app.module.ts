import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './employee/employee.service';
import { HomeComponent} from './home/home.component';

import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [ AppComponent, EmployeeComponent, HomeComponent ],
  imports: [ BrowserModule, FormsModule, HttpModule, AppRoutes ],
  providers: [ EmployeeService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
