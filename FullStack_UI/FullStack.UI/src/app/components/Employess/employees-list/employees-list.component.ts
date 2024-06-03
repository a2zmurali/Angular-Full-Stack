import { Component, OnInit } from '@angular/core';
import { employee } from '../../../Modles/employee.model'; 
import { EmployeeService } from '../../../Services/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css'
})
export class EmployeesListComponent implements OnInit{
  employees : employee[] = [];
  employees1 : employee[] = [
    {
      id : "1",
      name : "Murali",
      email : "Murali@gmail.com",
      phone : 48874898,
      salary : 700000,
      department : "A Department",
    },
    {
      id : "2",
      name : "suganya",
      email : "Msuganya@gmail.com",
      phone : 85905405,
      salary : 20000,
      department : "A Department",
    },
    {
      id : "3",
      name : "Venky",
      email : "Venky@gmail.com",
      phone : 965509676,
      salary : 500000,
      department : "A Department",
    }
  ]; 
  constructor(private employeeservice : EmployeeService){}
  ngOnInit(): void {
    this.employeeservice.getAllEmployees().subscribe({
      next : (employees) => this.employees = employees,
      error : (response) =>  console.log(response) 
    });
    //this.employees.push();
  }

}
