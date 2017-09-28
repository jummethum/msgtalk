import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabMenuModule} from 'primeng/primeng';

import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';


@NgModule({
  imports: [
    CommonModule,
    TabMenuModule
  ],
  exports: [
    NavigationBarComponent
  ],
  declarations: [
    NavigationBarComponent
  ]
})
export class CoreModule { }
