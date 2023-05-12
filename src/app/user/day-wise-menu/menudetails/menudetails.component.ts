import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuserviceService } from 'src/app/services/menuservice.service';
import { AdditemsService } from 'src/app/services/additems.service';

@Component({
  selector: 'app-menudetails',
  templateUrl: './menudetails.component.html',
  styleUrls: ['./menudetails.component.css']
})
export class MenudetailsComponent {
    id: any;
    menudetails: any;
    additems: any;
  
    constructor(
      private ms: MenuserviceService,
      private ai: AdditemsService,
      private ar: ActivatedRoute
    ) {
      this.ar.params.subscribe({
        next: (params) => {
          this.id = params['id'];
          this.readData();
        },
        error: () => (this.id = 0)
      });
    }
  
    readData() {
      this.ms.getMenuId(this.id).subscribe({
        next: (data: any) => (this.menudetails = data),
        error: () => (this.menudetails = {})
      });
    
      this.ai.getAdditems().subscribe({
        next: (data: any) => (this.additems = data),
        error: () => (this.additems = {})
      });
    }
  }    