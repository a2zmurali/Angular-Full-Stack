import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/Employess/employees-list/employees-list.component';
import { AddEmployeeComponent } from './components/Employess/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/Employess/edit-employee/edit-employee.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '',component:EmployeesListComponent},
  {path : 'employees',component:EmployeesListComponent},
  {path:'add-employee',component:AddEmployeeComponent},
  {path:'employees/edit/:id',component:EditEmployeeComponent},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
