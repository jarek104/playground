import { Component, OnInit, Input, HostBinding, OnChanges, SimpleChanges } from '@angular/core';
import { query } from '../../../../node_modules/@angular/animations';

@Component({
  selector: 'app-xp-accordion-panel',
  templateUrl: './xp-accordion-panel.component.html',
  styleUrls: ['./xp-accordion-panel.component.scss']
})
export class XpAccordionPanelComponent implements OnInit {

  @HostBinding('class.expand')
  @Input() expanded = false;

  constructor() { }

  ngOnInit() {
  }

}
