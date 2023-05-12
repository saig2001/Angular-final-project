import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { UserRoutingModule } from './user-routing.module';
import { MenubarComponent } from './menubar/menubar.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';




import { HttpClientModule } from '@angular/common/http';


import { ReviewsComponent } from './reviews/reviews.component';
import { ServiceBoxComponent } from './home/service-box/service-box.component';
import { DetailsComponent } from './home/details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReplyformComponent } from '../admin/replyform/replyform.component';


import { DayWiseMenuComponent } from './day-wise-menu/day-wise-menu.component';
import { MenudetailsComponent } from './day-wise-menu/menudetails/menudetails.component';
import { MenutypeComponent } from './day-wise-menu/menutype/menutype.component';
import { FeedbackFormComponent } from './reviews/feedback-form/feedback-form.component';
import { FeedbackBoxComponent } from './reviews/feedback-box/feedback-box.component';
import { TypefilterPipe } from '../pipes/typefilter.pipe';
import { QuoteitPipe } from '../pipes/quoteit.pipe';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { ContactsComponent } from './home/contact-us/contacts/contacts.component';
import { TodaySpecialComponent } from './today-special/today-special.component';

import { EmployeeratingComponent } from './employeerating/employeerating.component';
import { AddemployeeBoxComponent } from '../admin/addemployee/addemployee-box/addemployee-box.component';
import { AddemployeeComponent } from '../admin/addemployee/addemployee.component';
import { AdminModule } from '../admin/admin.module';




@NgModule({
  declarations: [
    MenubarComponent,
    HomeComponent,
    QuoteitPipe,
    ReviewsComponent,
    ServiceBoxComponent,
    DetailsComponent,
    DayWiseMenuComponent,
    MenudetailsComponent,
    MenutypeComponent,
    FeedbackFormComponent,
    FeedbackBoxComponent,
    ContactUsComponent,
    ContactsComponent,
    TodaySpecialComponent,
    TypefilterPipe,
    EmployeeratingComponent,
    
    
    
    

    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    AdminModule
    
    
  
    
  ],
  exports:[
    HomeComponent,
    MenubarComponent,
    
  ]
})
export class UserModule { }
