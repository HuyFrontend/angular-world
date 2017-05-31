import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {EmployeeComponent} from './employee/employee.component';
import { NotFoundComponent } from './notfound/notfound.component';

const routing: Routes = [
  { path: '', component: HomeComponent},
  { path: 'employees', component: EmployeeComponent},
  // Config to a 404 page
  { path: '**', component: NotFoundComponent}
  // Config to redirect to another page when load home page - add redirectTo, pathMatch, remove component
  //{ path: '', redirectTo: 'employees', pathMatch: 'full'},
]

export const AppRoutes = RouterModule.forRoot(routing);
