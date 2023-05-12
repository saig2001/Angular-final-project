import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';



import { MenubarComponent } from './menubar/menubar.component';


import { ReviewsComponent } from './reviews/reviews.component';
import { DetailsComponent } from './home/details/details.component';
import { DayWiseMenuComponent } from './day-wise-menu/day-wise-menu.component';
import { MenudetailsComponent } from './day-wise-menu/menudetails/menudetails.component';
import { FormsModule } from '@angular/forms';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { TodaySpecialComponent } from './today-special/today-special.component';
import { FeedbackFormComponent } from './reviews/feedback-form/feedback-form.component';
import { FeedbackBoxComponent } from '../admin/replyform/feedback-box/feedback-box.component';

const routes: Routes = [
  {path:"menubar",component:MenubarComponent,
  children:[
    {path:"home",component:HomeComponent},
    {path:"Day-Wise-Menu", component:DayWiseMenuComponent},
    {path:"Contact-us", component:ContactUsComponent},

  
    {path:"Reviews",component:ReviewsComponent},
    {path:"Reviews/:id",component:ReviewsComponent},
    {path:"details", component:DetailsComponent},
    {path:"Today-Special",component:TodaySpecialComponent},
    
  
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
