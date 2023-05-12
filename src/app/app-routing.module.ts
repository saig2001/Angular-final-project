import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenudetailsComponent } from './user/day-wise-menu/menudetails/menudetails.component';
import { DetailsComponent } from './user/home/details/details.component';
import { AdminModule } from './admin/admin.module';
import { FeedbackFormComponent } from './user/reviews/feedback-form/feedback-form.component';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"menudetails/:id",component:MenudetailsComponent},
  
  
  {path:"user",
  loadChildren:() => import('./user/user.module').then(m => m.UserModule)},

  {path:"admin",loadChildren: 
  () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path:"forum/:id", component: FeedbackFormComponent},
  {path:"details/:id", component:DetailsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
