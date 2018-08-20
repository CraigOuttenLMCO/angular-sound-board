import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Input, Output, ViewChild } from '@angular/core';

import { AUDIO_ENTRIES } from './audio';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit, AfterViewInit {
  source: string;
  audioEntries: any = AUDIO_ENTRIES;
  
  /** Buttons */
  @Input() playButton: boolean = true;
  @Input() pauseButton: boolean = true;
  @Input() selectableButton: boolean = false;
  @Input() muteButton: boolean = false;
  @Input() poopButton: boolean = false;
  
  /** Array of audio tracks.*/
  @Input() src: Array<string> = [];
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

  @ViewChild('audioplayer') player: any;

  constructor() {
    /** Init player with the first occurrence of src's array. */
    //if (this.src.length) {
    //  this.source = this.src[this.startPosition];
    //}
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // XXX Testing
    this.player.nativeElement.src = "";
  }

  /** Set programmatically audio controls. */
  private play(file:string, volume:number): void {
    if (this.player.nativeElement.src != file) {
      this.player.nativeElement.src = file;
    }

    if (this.player.nativeElement.volume != volume) {
      this.player.nativeElement.volume = volume;
    }

    this.player.nativeElement.play();
  }

  playAudio(file:string): void {
    this.play("assets/audio/" + file, 1.0);
  }

  playAudioLevel(file:string, volume:number): void {
    this.play("assets/audio/" + file, volume);
  }

  pause(): void {
    this.player.nativeElement.pause();
  }

  mute(): void {
    this.player.nativeElement.muted = !this.player.nativeElement.muted;
  }
}
