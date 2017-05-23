import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {EmployeeComponent} from './employee/employee.component';

const routing: Routes = [
  { path: '', component: HomeComponent},
  { path: 'employees', component: EmployeeComponent}
]

export const AppRoutes = RouterModule.forRoot(routing);
