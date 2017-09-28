import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {EventsComponent} from './events/events.component';
import {EventComponent} from './events/event/event.component';
import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ButtonModule
  ],
  exports: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
