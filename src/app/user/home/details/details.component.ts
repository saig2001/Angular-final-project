import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceBoxComponent } from '../service-box/service-box.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  service:any;
  qty:any=1;
  buttonstatus:string="Add to the Cart";
  active:boolean=true;

  constructor(private route:ActivatedRoute,private router:Router) { 
    this.service=this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
  }

}