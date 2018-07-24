import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-xp-accordion-panel-header',
  templateUrl: './xp-accordion-panel-header.component.html',
  styleUrls: ['./xp-accordion-panel-header.component.scss']
})
export class XpAccordionPanelHeaderComponent implements OnInit {

  @HostBinding('class.rotate') rotateChevron = false;

  constructor() { }

  ngOnInit() {
  }

}
