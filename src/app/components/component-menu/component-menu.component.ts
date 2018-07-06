import { Component, OnInit, ComponentFactoryResolver, Output, EventEmitter } from '@angular/core';
import { LayoutItem } from '../../models/layout-item';
import { ComponentFactoryService } from '../../services/component-factory.service';

@Component({
  selector: 'app-component-menu',
  templateUrl: './component-menu.component.html',
  styleUrls: ['./component-menu.component.scss']
})
export class ComponentMenuComponent implements OnInit {

  layoutComponents: LayoutItem[] = [];
  @Output() selectedComponent = new EventEmitter<LayoutItem>();

  constructor(
    private cfService: ComponentFactoryService
  ) { }

  ngOnInit() {
    this.layoutComponents = this.cfService.getLayoutItems();
  }

  onSwapComponent(comp) {
    this.selectedComponent.emit(comp);
    console.log(comp);
  }
}
