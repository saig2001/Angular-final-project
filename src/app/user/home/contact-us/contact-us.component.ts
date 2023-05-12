import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  contactlist:any;
        constructor(private cs:ContactService){

          this.cs.getContacts().subscribe(
             {
               next: (data:any)=>this.contactlist = data,
               error: ()=> this.contactlist = []
             }
          )
        }
}