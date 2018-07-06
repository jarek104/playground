import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { LayoutItem } from '../../models/layout-item';
import { ComponentInjectorDirective } from '../../directives/component-injector.directive';

@Component({
  selector: 'app-panel-two',
  templateUrl: './panel-two.component.html',
  styleUrls: ['./panel-two.component.scss']
})
export class PanelTwoComponent implements OnInit {

  @Input() layoutComponents: LayoutItem[] = [];
  @ViewChild(ComponentInjectorDirective) injectorHost: ComponentInjectorDirective;
  currentAdIndex = -1;
  interval: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    console.log(this.layoutComponents);
    this.loadComponent();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
  loadComponent() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.layoutComponents[0].component);
    console.log(componentFactory);

    let viewContainerRef = this.injectorHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
  }

}
