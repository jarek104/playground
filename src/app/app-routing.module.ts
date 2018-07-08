import { LayoutComponent } from './components/layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutContainerComponent } from './components/layout-container/layout-container.component';

const routes: Routes = [
  { path: 'layout', component: LayoutComponent },
  { path: 'container', component: LayoutContainerComponent },
  { path: '', redirectTo: '/layout', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
