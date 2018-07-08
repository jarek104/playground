import { LayoutProviderService } from './../../services/layout-provider.service';
import { Component, OnInit } from '@angular/core';
import { LayoutConfigDialogComponent } from '../layout-config-dialog/layout-config-dialog.component';
import { MatDialog } from '@angular/material';
import { LayoutDefinition } from '../../models/layout-definition';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  layoutDefinition: LayoutDefinition;

  constructor(
    public dialog: MatDialog,
    private layoutProvider: LayoutProviderService
  ) { }

  ngOnInit() {
    this.layoutProvider.currentLayout.subscribe(layout => {
      this.layoutDefinition = layout;
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(LayoutConfigDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
