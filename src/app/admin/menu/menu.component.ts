import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router,private ar:ActivatedRoute) { }

  ngOnInit(): void {
  }
  additems(){
    this.router.navigate(['additems'],{relativeTo:this.ar})
  }
  reply(){
    this.router.navigate(['replyform'],{relativeTo:this.ar})
  }
  adminhome(){
    this.router.navigate(['adminhome'],{relativeTo:this.ar})
  }

  addemployee(){
    this.router.navigate(['addemployee'],{relativeTo:this.ar})
  }
  logout() { this.router.navigate(['/login']); }
  
  
}
