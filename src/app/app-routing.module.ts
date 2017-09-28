import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {EventsComponent} from './events/events.component';
import {EventComponent} from './events/event/event.component';
import {AppComponent} from './app.component';

const appRoutes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'events', component: EventsComponent},
  {path: 'event/:id', component: EventComponent},
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {path: '**', component: AppComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
