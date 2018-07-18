import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xp-accordion-panel',
  templateUrl: './xp-accordion-panel.component.html',
  styleUrls: ['./xp-accordion-panel.component.scss']
})
export class XpAccordionPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doWork(element: any) {
    console.log(element);

    element.classList.toggle("active");
    var panel = element.nextElementSibling;
    if (panel.style.minHeight){
      panel.style.minHeight = null;
    } else {
      panel.style.minHeight = "100%";
    }
  }
}
