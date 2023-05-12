import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { MatDateRangeInput, MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerInput } from '@angular/material/datepicker';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserModule } from './user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FeedbackFormComponent } from './user/reviews/feedback-form/feedback-form.component';
import { TypefilterPipe } from './pipes/typefilter.pipe';
import { QuoteitPipe } from './pipes/quoteit.pipe';
import { ReplyformComponent } from './admin/replyform/replyform.component';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin/admin-routing.module';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDatepickerModule,
    MatInputModule,
    UserModule,
    AdminModule,
    RouterModule,
    AdminRoutingModule
   
    
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
