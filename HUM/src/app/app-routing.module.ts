import { RouterModule, Routes } from '@angular/router';

import { AngularStartComponent } from './modules/easter-eggs/pages/angular-start/angular-start.component';
import { HomeComponent } from './modules/house/pages/home/home.component';
import { ManageComponent } from './modules/management/pages/manage/manage.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { UserProfileComponent } from './modules/shared/components/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'manage/:houseID',
    component: ManageComponent,
  },
  { path: 'profile/:userID', component: UserProfileComponent },
  {
    path: 'bonus/ng-start',
    component: AngularStartComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
