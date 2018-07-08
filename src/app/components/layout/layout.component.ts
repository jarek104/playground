import { LayoutProviderService } from './../../services/layout-provider.service';
import { Component, OnInit } from '@angular/core';
import { LayoutConfigDialogComponent } from '../layout-config-dialog/layout-config-dialog.component';
import { MatDialog } from '@angular/material';
import { LayoutDefinition } from '../../models/layout-definition';
import { LayoutItem } from '../../models/layout-item';
import { ComponentFactoryService } from '../../services/component-factory.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  layoutDefinition: LayoutDefinition;
  layoutComponents: LayoutItem[];

  constructor(
    public dialog: MatDialog,
    private layoutProvider: LayoutProviderService,
    private cfService: ComponentFactoryService
  ) { }

  ngOnInit() {
    this.layoutComponents = this.cfService.getLayoutItems();
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
