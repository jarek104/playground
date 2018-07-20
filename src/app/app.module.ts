import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material.module';
import { ComponentInjectorDirective } from './directives/component-injector.directive';
import { ViewerComponent } from './components/viewer/viewer.component';
import { HitlistComponent } from './components/hitlist/hitlist.component';
import { ComponentFactoryService } from './services/component-factory.service';
import { WorkflowComponent } from './components/workflow/workflow.component';
import { ComponentMenuComponent } from './components/component-menu/component-menu.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutConfigDialogComponent } from './components/layout-config-dialog/layout-config-dialog.component';
import { PanelComponent } from './components/panel/panel.component';
import { ExpansionContainerComponent } from './components/expansion-container/expansion-container.component';
import { XpAccordionComponent } from './components/xp-accordion/xp-accordion.component';

import { FakeKeywordsListComponent } from './components/mocks/fake-keywords-list/fake-keywords-list.component';
import { FakeDocumentListComponent } from './components/mocks/fake-document-list/fake-document-list.component';
import { XpAccordionModule } from './components/xp-accordion-panel/xp-accordion.module';

@NgModule({
  declarations: [
    AppComponent,
    ComponentInjectorDirective,
    ViewerComponent,
    HitlistComponent,
    WorkflowComponent,
    ComponentMenuComponent,
    LayoutComponent,
    LayoutConfigDialogComponent,
    PanelComponent,
    ExpansionContainerComponent,
    XpAccordionComponent,
    FakeKeywordsListComponent,
    FakeDocumentListComponent
  ],

  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule,
    XpAccordionModule
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
