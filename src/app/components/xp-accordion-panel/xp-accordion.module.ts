import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XpAccordionPanelComponent } from './xp-accordion-panel.component';
import { XpAccordionPanelHeaderComponent } from '../xp-accordion-panel-header/xp-accordion-panel-header.component';
import { XpAccordionPanelBodyComponent } from '../xp-accordion-panel-body/xp-accordion-panel-body.component';
import { MaterialModule } from '../../shared/material.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    XpAccordionPanelComponent,
    XpAccordionPanelHeaderComponent,
    XpAccordionPanelBodyComponent
  ],
  exports: [
    XpAccordionPanelComponent,
    XpAccordionPanelHeaderComponent,
    XpAccordionPanelBodyComponent
  ]
})
export class XpAccordionModule { }
