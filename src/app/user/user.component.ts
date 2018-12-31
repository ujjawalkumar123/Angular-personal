import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from 'src/app/add-user/add-user.component';

export interface PeriodicElement {
  name: string;
  contact: string;
}

const ELEMENT_DATA: PeriodicElement[] = [{
  name: "Ara McClaughlin",
  contact: "160-122-6670"
}, {
  name: "Winnifred Barwise",
  contact: "379-420-4985"
}, {
  name: "Herman Rizzardini",
  contact: "883-312-1854"
}, {
  name: "Ansel Cestard",
  contact: "273-107-8110"
}, {
  name: "Joshuah Brisland",
  contact: "871-756-7944"
}, {
  name: "Cherilynn Maydwell",
  contact: "525-196-1461"
}, {
  name: "Cherice Ipsly",
  contact: "583-421-2894"
}, {
  name: "Traci Surr",
  contact: "401-819-1548"
}, {
  name: "Felicle Prout",
  contact: "817-986-7878"
}, {
  name: "Marcel Gerrard",
  contact: "662-804-9977"
}];

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['name', 'contact'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      });
  }

  rowClicked(row: any): void {
    console.log(row);
    const dialogRef = this.dialog.open(AddUserComponent, {
        width: '250px',
        data: row
    });
    dialogRef.afterClosed().subscribe(result  => {
        console.log("result");
        // this.dialogResult = result;
    });
  }
}
