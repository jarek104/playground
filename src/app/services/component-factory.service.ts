import { Injectable } from '@angular/core';
import { LayoutItem } from '../models/layout-item';
import { ViewerComponent } from '../components/viewer/viewer.component';
import { HitlistComponent } from '../components/hitlist/hitlist.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentFactoryService {

  constructor() { }
  getLayoutItems() {
    return [
      new LayoutItem(ViewerComponent, {name: 'Viewer'}),
      new LayoutItem(HitlistComponent, {name: 'Hitlist'}),
    ];
  }
}
