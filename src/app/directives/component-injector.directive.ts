import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appComponentInjector]'
})
export class ComponentInjectorDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
