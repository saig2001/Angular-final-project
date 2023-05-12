import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  constructor(private router:Router,private ar:ActivatedRoute) { }

  ngOnInit(): void {
  }
  home(){
    this.router.navigate(['home'],{relativeTo:this.ar})
  }
  Menu(){
this.router.navigate(['Day-Wise-Menu'],{relativeTo:this.ar})
  }
  contactus(){
    this.router.navigate(['Contact-us'],{relativeTo:this.ar})
  }
  reviews(){
    this.router.navigate(['Reviews'],{relativeTo:this.ar})
  }
  todayspecial(){
    this.router.navigate(['Today-Special'],{relativeTo:this.ar})
  }
  logout() { this.router.navigate(['/login']); }

}
