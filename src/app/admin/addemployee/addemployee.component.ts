import { Component, OnInit } from '@angular/core';
import { Employee } from '../admin.module'; 

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  employees: Employee[] = [];

  constructor() {}

  ngOnInit() {}

  onEmployeeAdded(employee: Employee) {
    this.employees.push(employee);
  }
}
