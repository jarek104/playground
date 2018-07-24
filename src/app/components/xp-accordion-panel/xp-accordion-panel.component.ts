import { Component, OnInit, Input, HostBinding, OnChanges, SimpleChanges, ContentChildren, QueryList, AfterContentInit, ContentChild } from '@angular/core';
import { XpAccordionPanelHeaderComponent } from '../xp-accordion-panel-header/xp-accordion-panel-header.component';

@Component({
  selector: 'app-xp-accordion-panel',
  templateUrl: './xp-accordion-panel.component.html',
  styleUrls: ['./xp-accordion-panel.component.scss']
})
export class XpAccordionPanelComponent implements OnChanges {

  @HostBinding('class.expand')
  @Input() expanded = false;

  @ContentChild(XpAccordionPanelHeaderComponent) header: XpAccordionPanelHeaderComponent;

  constructor() { }

  ngOnChanges() {
    if (this.header) {
      this.header.rotateChevron = this.expanded;
    }
  }
}
