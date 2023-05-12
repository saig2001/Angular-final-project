import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AdditemsComponent } from './additems/additems.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ReplyformComponent } from './replyform/replyform.component';
import { AdminhomeComponent } from './menu/adminhome/adminhome.component';
import { ResponseformComponent } from './replyform/responseform/responseform.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';

const routes: Routes = [
 
  {
    path: '',
    component: MenuComponent,
    children: [
      {path:'adminhome', component:AdminhomeComponent},
      { path: 'additems', component: AdditemsComponent },
      { path: 'replyform', component: ReplyformComponent }, 
      {path:"responses/:id",component: ResponseformComponent} ,
      {path:"addemployee", component:AddemployeeComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
