
import { Component,Input } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-service-box',
  templateUrl: './service-box.component.html',
  styleUrls: ['./service-box.component.css']
})
export class ServiceBoxComponent {
  @Input() service:any;
  constructor(public router:Router,public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  changeRoute(){
    this.router.navigate(['details'],{relativeTo:this.route,state:this.service});
  }
}

