import { LayoutProviderService } from './../../services/layout-provider.service';
import { Component, OnInit } from '@angular/core';
import { LayoutDefinition } from '../../models/layout-definition';

@Component({
  selector: 'app-layout-config-dialog',
  templateUrl: './layout-config-dialog.component.html',
  styleUrls: ['./layout-config-dialog.component.scss']
})
export class LayoutConfigDialogComponent implements OnInit {

  layoutDefinition: LayoutDefinition;
  availableLayouts: LayoutDefinition[];
  showAdvanced = false;

  constructor(private layoutProvider: LayoutProviderService) { }

  ngOnInit() {
    this.layoutProvider.currentLayout.subscribe(layout => {
      this.layoutDefinition = layout;
    });
    this.availableLayouts = this.layoutProvider.layouts;
  }

  changeLayout(layout: LayoutDefinition) {
    this.layoutProvider.currentLayout.next(layout);
  }
  toggleAdvanced() {
    this.showAdvanced = !this.showAdvanced;
  }
}
