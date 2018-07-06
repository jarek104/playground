import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { LayoutItem } from '../../models/layout-item';
import { ComponentInjectorDirective } from '../../directives/component-injector.directive';
import { element } from 'protractor';

@Component({
  selector: 'app-panel-two',
  templateUrl: './panel-two.component.html',
  styleUrls: ['./panel-two.component.scss']
})
export class PanelTwoComponent implements OnInit {

  @Input() layoutComponents: LayoutItem[] = [];
  @ViewChild(ComponentInjectorDirective) injectorHost: ComponentInjectorDirective;
  currentIndex = 0;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    let currentItem = this.layoutComponents[this.currentIndex];
    let resolvedComponent = this.componentFactoryResolver.resolveComponentFactory(currentItem.component);

    let viewContainerRef = this.injectorHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(resolvedComponent);
  }

  swapComponent(comp: any) {
    this.currentIndex === 0? this.currentIndex++ : this.currentIndex--;


    this.loadComponent();

  }

}
