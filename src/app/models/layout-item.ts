import { Type } from '@angular/core';

export class LayoutItem {
  constructor(public component: Type<any>, public data?: any) {}
}
