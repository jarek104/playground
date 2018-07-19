import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-xp-accordion-panel',
  templateUrl: './xp-accordion-panel.component.html',
  styleUrls: ['./xp-accordion-panel.component.scss']
})
export class XpAccordionPanelComponent implements OnInit {

  @Input() expanded = false;
  constructor() { }

  ngOnInit() {
  }

}
