import { Injectable } from '@angular/core';
import { LayoutItem } from '../models/layout-item';
import { ViewerComponent } from '../components/viewer/viewer.component';
import { HitlistComponent } from '../components/hitlist/hitlist.component';
import { WorkflowComponent } from '../components/workflow/workflow.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentFactoryService {

  constructor() { }
  getLayoutItems() {
    return [
      new LayoutItem(HitlistComponent, {name: 'Hitlist'}),
      new LayoutItem(ViewerComponent, {name: 'Viewer'}),
      new LayoutItem(WorkflowComponent, {name: 'Workflow'}),
    ];
  }
}
