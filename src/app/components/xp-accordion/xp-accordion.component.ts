import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xp-accordion',
  templateUrl: './xp-accordion.component.html',
  styleUrls: ['./xp-accordion.component.scss']
})
export class XpAccordionComponent implements OnInit {

  step = 0;
  constructor() { }

  ngOnInit() {
  }
  setStep(step:number) {
    this.step = step;
  }

}
