import { Component, OnInit } from '@angular/core';
import { employee } from '../../../Modles/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NotExpr } from '@angular/compiler';
import { EmployeeService } from '../../../Services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})

export class EditEmployeeComponent implements OnInit{
  employeeDetail : employee=
  { 
     id : '',
     name : '',
     email : '' ,
     phone :0,
     salary :0,
     department : ''
  };
  constructor(private route : ActivatedRoute, private employeeService : EmployeeService, private router : Router){}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next : (params) => 
        {
          const id = params.get('id');
          if(id)
            {
                this.employeeService.getemployee(id).subscribe({
                  next : (response) => {this.employeeDetail = response;}
                });
            }
        }

    })
  }
  updateEmployee()
  {
    this.employeeService.UpdateEmployee(this.employeeDetail.id,this.employeeDetail).subscribe({
      next : (response) => this.router.navigate(['employees'])
    });
  }
  deleteEmployee(id: string)
  {
    this.employeeService.DeleteEmployee(id).subscribe({
      next : (response) => this.router.navigate(['employees'])
    });
  }

}
