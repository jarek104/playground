import { Component, OnInit } from '@angular/core';
import { LayoutConfigDialogComponent } from '../layout-config-dialog/layout-config-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  layoutDefinition: LayoutDefinition = {
    majorDividerDirection: 'row',
    primaryMajorPortion: 35,
    primaryMinorPortion: 50,
    minorDividerDirection: 'column',
    thirdPanel: true,
    narrowView: false,
    sidesPadding: 5,
  };

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(LayoutConfigDialogComponent, {
      width: '250px',
      height: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

export interface LayoutDefinition {
  majorDividerDirection: 'column' | 'row';
  primaryMajorPortion: number;
  primaryMinorPortion: number;
  minorDividerDirection: 'column' | 'row';
  thirdPanel: boolean;
  narrowView: boolean;
  sidesPadding: number;
}
