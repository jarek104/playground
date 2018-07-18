import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansion-container',
  templateUrl: './expansion-container.component.html',
  styleUrls: ['./expansion-container.component.scss']
})
export class ExpansionContainerComponent implements OnInit {
  step = 0;

  documents = [
    "ET EROS VESTIBULUM AC",
    "LECTUS IN QUAM FRINGILLA",
    "RISUS SEMPER PORTA VOLUTPAT",
    "QUISQUE PORTA VOLUTPAT ERAT",
    "DUI VEL SEM SED",

  ];

  keywords = [
    {
      name: "Color",
      value: "Red"
    },
    {
      name: "Shapge",
      value: "Circle"
    },
    {
      name: "Weight",
      value: "80kg"
    },
    {
      name: "Height",
      value: "180cm"
    },
    {
      name: "Owner",
      value: "Jerry"
    },

  ]

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor() { }

  ngOnInit() {
  }

}
