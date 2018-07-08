import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material.module';
import { LayoutContainerComponent } from './components/layout-container/layout-container.component';
import { PanelOneComponent } from './components/panel-one/panel-one.component';
import { PanelTwoComponent } from './components/panel-two/panel-two.component';
import { ComponentInjectorDirective } from './directives/component-injector.directive';
import { ViewerComponent } from './components/viewer/viewer.component';
import { HitlistComponent } from './components/hitlist/hitlist.component';
import { ComponentFactoryService } from './services/component-factory.service';
import { WorkflowComponent } from './components/workflow/workflow.component';
import { PanelThreeComponent } from './components/panel-three/panel-three.component';
import { ComponentMenuComponent } from './components/component-menu/component-menu.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutConfigDialogComponent } from './components/layout-config-dialog/layout-config-dialog.component';
import { PanelComponent } from './components/panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutContainerComponent,
    PanelOneComponent,
    PanelTwoComponent,
    ComponentInjectorDirective,
    ViewerComponent,
    HitlistComponent,
    WorkflowComponent,
    PanelThreeComponent,
    ComponentMenuComponent,
    LayoutComponent,
    LayoutConfigDialogComponent,
    PanelComponent
  ],

  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    SharedModule
  ],
  entryComponents: [
    ViewerComponent,
    HitlistComponent,
    WorkflowComponent,
    LayoutConfigDialogComponent
   ],
  providers: [ComponentFactoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
