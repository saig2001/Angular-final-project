import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../admin.module';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-addemployee-box',
  templateUrl: './addemployee-box.component.html',
  styleUrls: ['./addemployee-box.component.css']
})
export class AddemployeeBoxComponent implements OnInit {
  @Input() employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((response: Employee[]) => {
      this.employees = response;
    });
  }
   
}
  

