import { Component, OnInit } from '@angular/core';
import { LayoutItem } from '../../models/layout-item';
import { ComponentFactoryService } from '../../services/component-factory.service';

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.scss']
})
export class LayoutContainerComponent implements OnInit {

  layoutComponents: LayoutItem[];

  constructor(private cfService: ComponentFactoryService) {}

  ngOnInit() {
    this.layoutComponents = this.cfService.getLayoutItems();
  }

}
