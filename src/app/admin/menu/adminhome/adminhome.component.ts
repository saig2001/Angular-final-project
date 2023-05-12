import { Component, OnInit } from '@angular/core';
import { OptionService } from 'src/app/services/optionservice.service';
import { HomeService } from 'src/app/services/home.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent  implements OnInit{
  servicelist: any;
  type: string[] = [
    "All",
    "veg",
    "Non-veg",
    "Rice item"
  ];
  selected: string = "All";
  selectedOption: string = "open";

  constructor(private hs: HomeService, private optionService: OptionService) { }

  ngOnInit(): void {
    this.hs.getServices().subscribe({
      next: (data: any) => this.servicelist = data,
      error: () => this.servicelist = []
    });

    this.selectedOption = this.optionService.getSelectedOption();
  }
}