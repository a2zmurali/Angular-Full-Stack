import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employee } from '../Modles/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  baseAPIurl: string = 'https://localhost:7009/';
  constructor(private Http: HttpClient) {}

  getAllEmployees(): Observable<employee[]> {
    return this.Http.get<employee[]>(this.baseAPIurl + 'api/Employees');
  }
  addEmployee(addemployeeRequest: employee): Observable<employee> {
    addemployeeRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.Http.post<employee>(
      this.baseAPIurl + 'api/Employees',
      addemployeeRequest
    );
  }
  getemployee(id: string): Observable<employee> {
    return this.Http.get<employee>(this.baseAPIurl + 'api/Employees/' + id);
  }
  UpdateEmployee(
    id: string,
    UpdateEmployeeRequest: employee
  ): Observable<employee> {
    return this.Http.put<employee>(
      this.baseAPIurl + 'api/Employees/' + id,
      UpdateEmployeeRequest
    );
  }
  DeleteEmployee(id: string): Observable<employee> {
    return this.Http.delete<employee>(this.baseAPIurl + 'api/Employees/' + id);
  }
}
