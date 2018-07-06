import { Component, OnInit, ComponentFactoryResolver, ViewChild, Input } from '@angular/core';
import { LayoutItem } from '../../models/layout-item';
import { ComponentInjectorDirective } from '../../directives/component-injector.directive';

@Component({
  selector: 'app-panel-three',
  templateUrl: './panel-three.component.html',
  styleUrls: ['./panel-three.component.scss']
})
export class PanelThreeComponent implements OnInit {

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
    let currentItem = comp? comp : this.layoutComponents[this.currentIndex];
    let resolvedComponent = this.componentFactoryResolver.resolveComponentFactory(currentItem.component);

    let viewContainerRef = this.injectorHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(resolvedComponent);
  }

  swapComponent(comp: LayoutItem) {
    console.log(comp.data.name);
    this.loadComponent(comp);
  }

}
