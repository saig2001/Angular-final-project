import { Component, OnInit } from '@angular/core';
import { AdditemsService } from 'src/app/services/additems.service';

@Component({
  selector: 'app-today-special',
  templateUrl: './today-special.component.html',
  styleUrls: ['./today-special.component.css']
})
export class TodaySpecialComponent implements OnInit {
  additems: any[] = [];

  constructor(private additemsService: AdditemsService) {}

  ngOnInit() {
    this.getAdditems();
  }

  getAdditems() {
    this.additemsService.getAdditems().subscribe(
      response => {
        this.additems = response;
      },
      error => {
        console.error('Failed to retrieve additems:', error);
      }
    );
  }
}
