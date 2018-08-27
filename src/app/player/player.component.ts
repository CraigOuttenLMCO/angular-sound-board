import { Component, OnInit, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { Input, Output, ViewChild } from '@angular/core';

import { AUDIO_GROUPS, AudioGroup } from './audio';
import { SoundService, AudioItem } from '../sound.service';
import { AudioEntry, AudioCategory } from '../audio';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit, AfterViewInit, OnDestroy {
  source: string;
  readyAudioEntries:AudioEntry[] = [];
  //audioEntries: AudioEntry[] = AUDIO_ENTRIES;
  audioGroups: AudioGroup[] = AUDIO_GROUPS;

  audioStartedSubscription: Subscription;
  audioCompleteSubscription: Subscription;
  playing: boolean = false;

  /** Buttons */
  @Input() playButton: boolean = false;
  @Input() stopButton: boolean = true;
  @Input() selectableButton: boolean = false;
  @Input() muteButton: boolean = false;
  
  /** Audio track source. */
  @Input() src: string = "";
  /** Display or not the controls, default: true */
  @Input() controls: boolean = false;
  /** Set autoplay status, default true. */
  @Input() autoplay: boolean = false;
  /** Set loop status, default false. */
  @Input() loop: boolean = false;
  /** Set the volume, default: 1 (max). */
  @Input() volume: number = 1;
  /** Set the start index of the playlist. */
  @Input() startPosition: number = 0;
  /** Number in s, in order to start the transition, default: 5s */
  @Input() transition: number = 5;
  /** Interval in order to set the audio transition, in ms, default: 500ms. */
  @Input() intervalTransition = 500;
  /** Define if transition, default: false. */
  @Input() transitionEnd: boolean = true;
  /** Define the preload status, default metadata. */
  @Input() transitionStart: boolean = false;
  /** Define the preload status, default metadata. */
  @Input() preload: string = 'metadata';
  /** Define the mute status, default false. */
  @Input() muted: boolean = false;

  constructor(private soundService:SoundService) {
    this.readyAudioEntries = this.groupAudio(AudioCategory.Ready);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.audioStartedSubscription = this.soundService.audioStarted.subscribe(() => {
      this.playing = true;
    });

    this.audioCompleteSubscription = this.soundService.audioComplete.subscribe(() => {
      this.playing = false;
    });
  }

  
  ngOnDestroy() {
    if (this.audioStartedSubscription) {
      this.audioStartedSubscription.unsubscribe();
    }

    if (this.audioCompleteSubscription) {
      this.audioCompleteSubscription.unsubscribe();
    }
  }

  groupAudio(category:AudioCategory): AudioEntry[] {
    return this.soundService.audioEntriesByCategory(category);
  }

  playAudio(file:string): void {
    let item:AudioItem = {
      source: "assets/audio/" + file,
      volume: 1.0
    };

    this.soundService.playAudio(item);
  }

  playAudioLevel(file:string, volume:number): void {
    let item:AudioItem = {
      source: "assets/audio/" + file,
      volume: volume
    };

    this.soundService.playAudio(item);
  }

  stop(): void {
    this.soundService.stop();
  }

  mute(): void {
    this.soundService.mute();
  }
}
