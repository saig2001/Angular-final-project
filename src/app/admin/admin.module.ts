import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';



import { MatDateRangeInput } from '@angular/material/datepicker';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material/material.module';
import { ROUTES, Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatToolbar } from '@angular/material/toolbar';
import { AdditemsComponent } from './additems/additems.component';
import { AdditemsBoxComponent } from './additems/additems-box/additems-box.component';
import { MatDatepickerInput } from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ReplyformComponent } from './replyform/replyform.component';
import { FeedbackBoxComponent } from './replyform/feedback-box/feedback-box.component';
import { FeedbackService } from '../services/feedback.service';
import { AdminhomeComponent } from './menu/adminhome/adminhome.component';
import { HomeBoxComponent } from './menu/home-box/home-box.component';
import { ResponseformComponent } from './replyform/responseform/responseform.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AddemployeeFormComponent } from './addemployee/addemployee-form/addemployee-form.component';
import { AddemployeeBoxComponent } from './addemployee/addemployee-box/addemployee-box.component';


export interface Employee {
  id: number;
  name: string;
  age: number;
  location: string;
}







@NgModule({
 
  declarations: [
    MenuComponent,
    AdditemsComponent,
    AdditemsBoxComponent,
    ReplyformComponent,
    FeedbackBoxComponent,
    AdminhomeComponent,
    HomeBoxComponent,
    ResponseformComponent,
    AddemployeeComponent,
    AddemployeeFormComponent,
    AddemployeeBoxComponent,
    
   
    
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    MatDatepickerModule,
   

  
    
  
  ],
  exports:[
    AddemployeeBoxComponent
  ]
})
export class AdminModule { }
