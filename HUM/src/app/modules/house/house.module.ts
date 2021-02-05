import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HouseRoutingModule } from './house-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HouseRoutingModule],
})
export class HouseModule {}
