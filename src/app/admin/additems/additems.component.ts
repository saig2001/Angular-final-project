import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators,FormControl } from '@angular/forms';
import { AdditemsService } from 'src/app/services/additems.service';


@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})
export class AdditemsComponent {
  additemsForm:any;
         constructor(private fb:FormBuilder,private fs:AdditemsService){
         this.additemsForm = this.fb.group({
            name:['',[Validators.required]],
            message:['',[Validators.required]],
            email:['',[Validators.required]],
            date: [null, Validators.required]
          });
         }

         dateValidator() {
          return (control: FormControl) => {
            const dateRegex = /^\d{2}\/\d{2}\/\d{2}$/; // Regular expression for dd/mm/yy format
            const isValid = dateRegex.test(control.value);
            return isValid ? null : { invalidDate: true };
          };
        }
        
        
        
        
        saveFeedback() {
          const selectedDate: Date = this.additemsForm.value.date;
          const formattedDate: string = this.formatDate(selectedDate);
          
          const temp: any = {
            date: formattedDate,
            id: Math.round(Math.random() * 10000),
            Breakfast: this.additemsForm.value.name,
            Lunch: this.additemsForm.value.email,
            Dinner: this.additemsForm.value.message
          };
          
          this.fs.postFeedback(temp).subscribe({
            next: data => {
              alert('Items added');
              location.reload();
            },
            error: error => {
              alert('Not saved --- some Error');
            }
          });
        }
        
        formatDate(date: Date): string {
          const day: string = ('0' + date.getDate()).slice(-2);
          const month: string = ('0' + (date.getMonth() + 1)).slice(-2);
          const year: string = date.getFullYear().toString().slice(-2);
          
          return `${day}/${month}/${year}`;
        }
      }        