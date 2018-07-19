import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-xp-accordion',
  templateUrl: './xp-accordion.component.html',
  styleUrls: ['./xp-accordion.component.scss']
})
export class XpAccordionComponent implements OnInit {

  step = 0;

  documents = [
    "Lorem ipsum dolor sit amet",
    "Excepteur sint occaecat",
    "Duis aute irure dolor",
    "Ut enim ad minim veniam",
    "Sed ut perspiciatis unde",
    "Nemo enim ipsam voluptatem",
    "Lorem ipsum dolor sit amet",
    "Excepteur sint occaecat",
    "Duis aute irure dolor",
    "Ut enim ad minim veniam",
    "Sed ut perspiciatis unde",
    "Nemo enim ipsam voluptatem",
    "Lorem ipsum dolor sit amet",
    "Excepteur sint occaecat",
    "Duis aute irure dolor",
    "Ut enim ad minim veniam",
    "Sed ut perspiciatis unde",
    "Nemo enim ipsam voluptatem",
  ];

  keywords = [
    {
      name: "Color",
      value: "Blue"
    },
    {
      name: "Shape",
      value: "Square"
    },
    {
      name: "Height",
      value: "24in"
    },
    {
      name: "Width",
      value: "20in"
    },
    {
      name: "Depth",
      value: "30in"
    },
    {
      name: "Name",
      value: "Weird ball"
    },
    {
      name: "Color",
      value: "Blue"
    },
    {
      name: "Color",
      value: "Blue"
    },
    {
      name: "Shape",
      value: "Square"
    },
    {
      name: "Height",
      value: "24in"
    },
    {
      name: "Width",
      value: "20in"
    },
    {
      name: "Depth",
      value: "30in"
    },
    {
      name: "Name",
      value: "Weird ball"
    },
    {
      name: "Color",
      value: "Blue"
    },
  ];
  constructor() {}

  ngOnInit() {
  }

  setStep(step: number) {
    this.step = step;
  }

}
