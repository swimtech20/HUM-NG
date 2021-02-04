import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LinksComponent } from './components/links/links.component';



@NgModule({
  declarations: [HeaderComponent, LinksComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
