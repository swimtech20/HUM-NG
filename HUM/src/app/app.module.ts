import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { EasterEggsModule } from './modules/easter-eggs/easter-eggs.module';
import { HeaderComponent } from './core/components/header/header.component';
import { HouseModule } from './modules/house/house.module';
import { ManagementModule } from './modules/management/management.module';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { SharedModule } from './modules/shared/shared.module';
import { LoginComponent } from './core/pages/login/login.component';
import { LogoutComponent } from './core/pages/logout/logout.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NotFoundComponent, LoginComponent, LogoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HouseModule,
    ManagementModule,
    SharedModule,
    EasterEggsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
