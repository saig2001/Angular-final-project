import { Component, OnInit,Input } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-box',
  templateUrl: './home-box.component.html',
  styleUrls: ['./home-box.component.css']
})
export class HomeBoxComponent implements OnInit {
  @Input() service:any;
  constructor(public router:Router,public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
