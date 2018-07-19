import { Component, OnInit, Input, HostBinding, OnChanges, SimpleChanges, ContentChildren, QueryList, AfterContentInit, ContentChild } from '@angular/core';
import { query } from '../../../../node_modules/@angular/animations';
import { XpAccordionPanelBodyComponent } from '../xp-accordion-panel-body/xp-accordion-panel-body.component';

@Component({
  selector: 'app-xp-accordion-panel',
  templateUrl: './xp-accordion-panel.component.html',
  styleUrls: ['./xp-accordion-panel.component.scss']
})
export class XpAccordionPanelComponent implements OnInit, AfterContentInit {

  @ContentChild(XpAccordionPanelBodyComponent) panelBody: XpAccordionPanelBodyComponent;

  @HostBinding('class.expand')
  @Input() expanded = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    console.log(this.panelBody);
  }

}
