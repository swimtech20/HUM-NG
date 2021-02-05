import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HouseRoutingModule } from './house-routing.module';
import { NgModule } from '@angular/core';
import { ReservationsComponent } from './pages/reservations/reservations.component';

@NgModule({
  declarations: [HomeComponent, ReservationsComponent],
  imports: [CommonModule, HouseRoutingModule],
})
export class HouseModule {}
