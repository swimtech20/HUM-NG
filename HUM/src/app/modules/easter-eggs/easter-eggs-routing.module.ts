import { RouterModule, Routes } from '@angular/router';

import { AngularStartComponent } from './pages/angular-start/angular-start.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: AngularStartComponent },
  { path: 'bonus', component: AngularStartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EasterEggsRoutingModule {}
