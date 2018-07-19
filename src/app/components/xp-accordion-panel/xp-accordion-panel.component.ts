import { Component, OnInit, Input } from '@angular/core';

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

  doWork(element: any) {

    // element.classList.toggle('active');
    // const panel = element.nextElementSibling;
    // if (panel.style.minHeight) {
    //   panel.style.minHeight = null;
    // } else {
    //   panel.style.minHeight = '100%';
    // }
  }
}
