import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {EmployeeComponent} from './employee/employee.component';
import { NotFoundComponent } from './notfound/notfound.component';
import {EmployeeDetailComponent} from './employee/employee.detail.component';
import {EmployeeOverviewComponent} from './employee/employee-overview.component';
import {EmployeeProjectComponent} from './employee/employee-project.component';
import {LoginComponent} from './login/login.component';

const routing: Routes = [
  { path: '', component: HomeComponent},
  { path: 'employees', component: EmployeeComponent},
  // Config to redirect to another page when load home page - add redirectTo, pathMatch, remove component
  //{ path: '', redirectTo: 'employees', pathMatch: 'full'},
  { path: 'employees', component: EmployeeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'employee-detail/:id', component: EmployeeDetailComponent,
    children: [
      { path: 'overview', component: EmployeeOverviewComponent },
      { path: 'projects', component: EmployeeProjectComponent}
    ]
  },

  // Config to a 404 page
  { path: '**', component: NotFoundComponent}
]

export const AppRoutes = RouterModule.forRoot(routing);
