import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { TabbedPlayerComponent } from './tabbed-player/tabbed-player.component';
import { SoundService } from './sound.service';
import { ChainPlayerComponent } from './chain-player/chain-player.component';
import { EditReadyQueueComponent } from './edit-ready-queue/edit-ready-queue.component';
import { ReadyQueueComponent } from './ready-queue/ready-queue.component';
import { SnackBarAudioComponent } from './ready-queue/snack-bar-audio.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    TabbedPlayerComponent,
    ChainPlayerComponent,
    EditReadyQueueComponent,
    ReadyQueueComponent,
    SnackBarAudioComponent
  ],
  entryComponents: [
    EditReadyQueueComponent,
    SnackBarAudioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    SoundService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
