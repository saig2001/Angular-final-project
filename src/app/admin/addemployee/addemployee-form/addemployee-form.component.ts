import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../admin.module';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-addemployee-form',
  templateUrl: './addemployee-form.component.html',
  styleUrls: ['./addemployee-form.component.css']
})
export class AddemployeeFormComponent {
  @Output() onEmployeeAdded: EventEmitter<Employee> = new EventEmitter<Employee>();
  employeeForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService) {
    this.employeeForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      age: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.employeeForm.valid) {
      const employee: Employee = {
        id: this.employeeForm.value.id,
        name: this.employeeForm.value.name,
        age: this.employeeForm.value.age,
        location: this.employeeForm.value.location
      };
  
      this.employeeService.addEmployee(employee).subscribe(
        (response: Employee) => {
          this.onEmployeeAdded.emit(response);
          this.employeeForm.reset();
          alert('Employee added');
          location.reload();
        },
        (error: any) => {
          console.error('Error occurred while saving employee:', error);
          alert('Failed to add employee');
        }
      );
    }
  }
  
}
