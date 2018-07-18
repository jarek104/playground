import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xp-accordion',
  templateUrl: './xp-accordion.component.html',
  styleUrls: ['./xp-accordion.component.scss']
})
export class XpAccordionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doWork(element: any) {
    console.log(element);

    element.classList.toggle("active");
    var panel = element.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
}
