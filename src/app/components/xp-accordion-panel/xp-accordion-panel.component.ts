import { Component, OnInit, Input, HostBinding, OnChanges, SimpleChanges, ContentChildren, QueryList, AfterContentInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-xp-accordion-panel',
  templateUrl: './xp-accordion-panel.component.html',
  styleUrls: ['./xp-accordion-panel.component.scss']
})
export class XpAccordionPanelComponent {

  @HostBinding('class.expand')
  @Input() expanded = false;

  constructor() { }

}
