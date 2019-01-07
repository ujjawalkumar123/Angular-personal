import { Component, OnInit } from '@angular/core';
import { AddCourseComponent } from 'src/app/add-course/add-course.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  

  constructor(public dialog: MatDialog, private router: Router) { }

  

  ngOnInit() {

    
    
  }

  

  openDialog(): void {
    const dialogRef = this.dialog.open(AddCourseComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      });
  }

  rowClicked(row: any): void {
    console.log(row);
    this.router.navigate(['/course'])
  }

  

}
