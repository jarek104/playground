import { LAYOUTS } from './../../assets/layouts';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LayoutDefinition } from '../models/layout-definition';

@Injectable({
  providedIn: 'root'
})
export class LayoutProviderService {

  layouts = LAYOUTS;
  private index = -1;

  get currentIndex() {
    this.index++;
    return this.index;
  }

  currentLayout: BehaviorSubject<LayoutDefinition> = new BehaviorSubject<LayoutDefinition>(this.layouts[0]);

  constructor() {
  }


}
