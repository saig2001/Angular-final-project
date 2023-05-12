import { Component, Input, OnInit } from '@angular/core';
import { MenuserviceService } from 'src/app/services/menuservice.service';
import { FeedbackService } from 'src/app/services/feedback.service';
import { AdditemsComponent } from 'src/app/admin/additems/additems.component';
import { AdditemsService } from 'src/app/services/additems.service';

@Component({
  selector: 'app-day-wise-menu',
  templateUrl: './day-wise-menu.component.html',
  styleUrls: ['./day-wise-menu.component.css']
})
export class DayWiseMenuComponent implements OnInit {
  menulist:any;

  constructor(private ms:MenuserviceService) { 
    this.ms.getMenu().subscribe(
      {
       next:(data:any)=>this.menulist=data,
       error:()=>this.menulist=[]
      }
    )
  }

  @Input() feedbacks:any;
  
  
  ngOnInit(): void {
  }

}
