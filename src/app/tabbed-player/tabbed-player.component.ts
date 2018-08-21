import { Component, OnInit, OnDestroy, AfterViewInit, HostListener } from '@angular/core';
import { Input, Output, ViewChild, EventEmitter } from '@angular/core';

import { AUDIO_GROUPS, AudioGroup } from './audio';
import { SoundService, AudioItem } from '../sound.service';
import { AudioEntry, AudioCategory } from '../audio';

@Component({
  selector: 'app-tabbed-player',
  templateUrl: './tabbed-player.component.html',
  styleUrls: ['./tabbed-player.component.css']
})
export class TabbedPlayerComponent implements OnInit, OnDestroy, AfterViewInit {
  source: string;
  readyAudioEntries:AudioEntry[] = [];
  audioGroups:AudioGroup[] = AUDIO_GROUPS;
  selectedTab: number = 0;
  
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

  //@Output() audioStarted:EventEmitter<any> = new EventEmitter();
  //@Output() audioEnded:EventEmitter<any> = new EventEmitter();

  @ViewChild('audioplayer') player: any;

  constructor(private soundService:SoundService) {
    this.readyAudioEntries = this.groupAudio(AudioCategory.Ready);
    //console.log('Ready Audio Entries:', this.readyAudioEntries);
   }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.player.nativeElement.src = "";
    this.soundService.setAudioPlayer(this.player);

    // working --v
    //this.player.nativeElement.onended = function(event) {
    //  console.log(event);
    //  this.audioEndedEmitter.emit(event);
    //};
    // working --> this.player.nativeElement.addEventListener('ended', this.audioEndedCallback, true);
  }

  ngOnDestroy() {
    //this.player.nativeElement.removeEventListener('ended', this.onAudioEnded, false);
    // working --> this.player.nativeElement.removeEventListener('ended', this.audioEndedCallback, true);
    this.soundService.removeAudioPlayer(this.player);
  }

  groupAudio(category:AudioCategory): AudioEntry[] {
    return this.soundService.audioEntriesByCategory(category);
  }

  onAudioStarted(event:any): void {
    //console.log("Audio started", event);
  }

  onAudioEnded(event:any): void {
    //console.log("Audio ended", event);
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

    // Testing
    // working --> this.audioStarted.emit('playing');
  }

  playAudio(file:string): void {
    let item:AudioItem = {
      source: "assets/audio/" + file,
      volume: 1.0
    };

    this.soundService.playAudio(item);
  }

  playAudioMultiple(files:string[]) {
    if (files) {
      if (!Array.isArray(files)) {
        // If not of type array, convert idea
        files = [files];
      }

      if (files.length > 0) {
        let items:AudioItem[] = [];

        files.forEach(file => {
          items.push({
            source: "assets/audio/" + file,
            volume: 1.0
          });
        });
        
        this.soundService.playAudioMultiple(items);
      }
    }
  }

  playAudioLevel(file:string, volume:number): void {
    let item:AudioItem = {
      source: "assets/audio/" + file,
      volume: volume
    };

    this.soundService.playAudio(item);
  }

  pause(): void {
    this.soundService.pause();
  }

  mute(): void {
    this.soundService.mute();
  }
}
