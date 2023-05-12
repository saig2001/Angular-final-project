import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { OptionService } from 'src/app/services/optionservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  servicelist: any;
  type: string[] = [
    "All",
    "Veg",
    "Non-veg"
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
