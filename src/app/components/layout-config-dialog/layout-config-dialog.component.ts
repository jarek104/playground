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
  tempLayout: LayoutDefinition;
  availableLayouts: LayoutDefinition[];
  showAdvanced = false;

  majorDividerValue?: number;
  minorDividerValue?: number;
  sidePaddingValue?: number;

  constructor(private layoutProvider: LayoutProviderService) { }

  ngOnInit() {
    this.layoutProvider.currentLayout.subscribe(layout => {
      this.layoutDefinition = layout;
      this.tempLayout = layout;
      this.updateSliders(layout);
    });
    this.availableLayouts = this.layoutProvider.layouts;
  }

  changeLayout(layout: LayoutDefinition) {
    this.layoutProvider.currentLayout.next(layout);
    this.updateSliders(layout);
  }
  toggleAdvanced() {
    this.showAdvanced = !this.showAdvanced;
  }

  onSliderChange() {
    // this.tempLayout.primaryMajorPortion = this.majorDividerValue;
    // this.tempLayout.primaryMinorPortion = this.minorDividerValue;
    // this.tempLayout.sidesPadding = this.sidePaddingValue;

    this.changeLayout(this.tempLayout);
  }

  updateSliders(layout: LayoutDefinition) {
    this.majorDividerValue = layout.primaryMajorPortion;
    this.minorDividerValue = layout.primaryMinorPortion;
    this.sidePaddingValue = layout.sidesPadding;
  }
}
