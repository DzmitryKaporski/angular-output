import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimersComponent } from './timers/timers.component';
import { TimerItemComponent } from './timer-item/timer-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TimersComponent,
    TimerItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
