import { LAYOUTS } from './../../assets/layouts';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LayoutDefinition } from '../models/layout-definition';

@Injectable({
  providedIn: 'root'
})
export class LayoutProviderService {

  layouts = LAYOUTS;

  currentLayout: BehaviorSubject<LayoutDefinition> = new BehaviorSubject<LayoutDefinition>(this.layouts[0]);

  constructor() {
  }


}
