import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event/event.component';
import { EventsComponent } from './events.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EventComponent, EventsComponent]
})
export class EventsModule { }
