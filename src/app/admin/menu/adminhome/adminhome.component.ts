import { Component, OnInit } from '@angular/core';
import { OptionService } from 'src/app/services/optionservice.service';
import { HomeService } from 'src/app/services/home.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent {
  products: any;
dataSource: any;
edit = {
  id: '',
  name: '',
  quantity: '',
  proteins: '',
  dietaryfiber: '',
  type: ''
};
displayedColumns: string[] = ['id', 'name', 'type', 'quantity'];

constructor(public dialog: MatDialog, public hs: HomeService) {
  this.hs.getServices().subscribe({
    next: (data: any) => {
      this.products = data;
      this.dataSource = new MatTableDataSource(this.products);
    },
    error: () => this.products = []
  });
}


}
