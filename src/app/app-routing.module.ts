import { LayoutComponent } from './components/layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpansionContainerComponent } from './components/expansion-container/expansion-container.component';
import { XpAccordionComponent } from './components/xp-accordion/xp-accordion.component';

const routes: Routes = [
  { path: 'layout', component: LayoutComponent },
  { path: 'expansion', component: ExpansionContainerComponent },
  { path: 'accordion', component: XpAccordionComponent },
  { path: '', redirectTo: '/accordion', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
