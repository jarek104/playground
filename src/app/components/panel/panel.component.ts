import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { LayoutItem } from '../../models/layout-item';
import { ComponentInjectorDirective } from '../../directives/component-injector.directive';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input() layoutComponents: LayoutItem[] = [];
  @ViewChild(ComponentInjectorDirective) injectorHost: ComponentInjectorDirective;
  currentIndex = 0;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent(comp?: LayoutItem) {
    const currentItem = comp ? comp : this.layoutComponents[this.currentIndex];
    const resolvedComponent = this.componentFactoryResolver.resolveComponentFactory(currentItem.component);

    const viewContainerRef = this.injectorHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(resolvedComponent);
  }

  swapComponent(comp: LayoutItem) {
    console.log(comp.data.name);
    this.loadComponent(comp);
  }

}
