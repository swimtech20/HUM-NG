import { AngularStartComponent } from './pages/angular-start/angular-start.component';
import { CommonModule } from '@angular/common';
import { EasterEggsRoutingModule } from './easter-eggs-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AngularStartComponent],
  imports: [CommonModule, EasterEggsRoutingModule],
})
export class EasterEggsModule {}
