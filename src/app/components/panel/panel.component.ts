import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { LayoutItem } from '../../models/layout-item';
import { ComponentInjectorDirective } from '../../directives/component-injector.directive';
import { LayoutProviderService } from '../../services/layout-provider.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input() layoutComponents: LayoutItem[] = [];
  @ViewChild(ComponentInjectorDirective) injectorHost: ComponentInjectorDirective;

  index = 0
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private layoutProvider: LayoutProviderService
  ) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent(comp?: LayoutItem) {
    // const currentItem = comp ? comp : this.layoutComponents[this.layoutProvider.currentIndex];
    const currentItem = comp ? comp : this.layoutComponents[this.index];
    const resolvedComponent = this.componentFactoryResolver.resolveComponentFactory(currentItem.component);

    const viewContainerRef = this.injectorHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(resolvedComponent);
  }
}
