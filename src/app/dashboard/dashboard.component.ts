import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from 'src/app/add-user/add-user.component';


export interface PeriodicElement {
  codeWords: string;
 }

 const ELEMENT_DATA: PeriodicElement[] = [{
  codeWords: "LOESTRIN 21 1.5/30",
  
}, {
  codeWords: "Indocyanine green",
  
}, {
  codeWords: "Promethazine Hydrochloride and Dextromethorphan Hydrobromide",
  
}, {
  codeWords: "Colgate",
  
}, {
  codeWords: "CAULOPHYLLUM THALICTROIDES",
  
}, {
  codeWords: "Body Luxuries Strawberry Scented Waterless Anti Bacterial Hand gel",
  
}, {
  codeWords: "Infla",
  
}, {
  codeWords: "GELNIQUE",
  
}, {
  codeWords: "Coconut",
  
}, {
  codeWords: "Venlafaxine Hydrochloride",
  
}];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['name', 'btn1', 'btn2'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  

}
