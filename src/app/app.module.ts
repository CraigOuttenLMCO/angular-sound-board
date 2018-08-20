import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { TabbedPlayerComponent } from './tabbed-player/tabbed-player.component';
import { SoundService } from './sound.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    TabbedPlayerComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    SoundService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
