import { Component, ElementRef, ViewChild, OnInit, OnDestroy, AfterViewInit, Input } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocompleteTrigger } from '@angular/material';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AUDIO_ENTRIES, AudioEntry } from '../audio';
import { LocalStorageService } from '../local-storage.service';
import { SoundService, AudioItem } from '../sound.service';

const CUSTOM_AUDIO_CHAINS_KEY: string = "custom.audio.chains";
const CUSTOM_AUDIO_CHAINS_VERSION: number = 1.0;

interface AudioChain {
  //index: number; TODO
  sources: string[];
}

interface AudioChains {
  version: number;
  // date: ??? TODO
  size: number;
  chains: AudioChain[];
}

@Component({
  selector: 'app-chain-player',
  templateUrl: './chain-player.component.html',
  styleUrls: ['./chain-player.component.css']
})
export class ChainPlayerComponent implements OnInit, OnDestroy, AfterViewInit {
  /* Chips Autocomplete */
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  audioCtrl = new FormControl();
  filteredAudios: Observable<AudioEntry[]>;
  audioChips: AudioEntry[] = [];
  allAudios: AudioEntry[] = AUDIO_ENTRIES;
  customAudioChains: Array<Array<AudioEntry>> = new Array<Array<AudioEntry>>();

  audioStartedSubscription: Subscription;
  audioCompleteSubscription: Subscription;
  playing: boolean = false;
  paused: boolean = false;

  @ViewChild('audioInput', { read: MatAutocompleteTrigger }) audioInputTrigger: MatAutocompleteTrigger;
  @ViewChild('audioInput') audioInput: ElementRef;

  /** Array of audio tracks.*/
  @Input() src: string = "";
  /** Display or not the controls, default: true */
  @Input() controls: boolean = false;
  /** Set autoplay status, default false. */
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

  constructor(
    private storageService:LocalStorageService,
    private soundService:SoundService) {
    
    this.filteredAudios = this.audioCtrl.valueChanges.pipe(
      startWith(null),
      map((audio: string | null) => audio ? this._filter(audio) : this.allAudios.slice()));
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadAudioChains();

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

  /* Functions */

  addChain(): void {
    if (this.playing) {
      this.soundService.stop();
    }

    // Clear the audio input field
    let items:AudioEntry[] = this.audioChips.splice(0, this.audioChips.length);
    this.customAudioChains.push(items);

    this.saveAudioChains();
  }

  addChip(event: MatChipInputEvent): void {
    const input: HTMLInputElement = event.input;
    const source: string = event.value; // the audio source

    // Add our audio
    if ((source || '').trim()) {
      var found = this.allAudios.find(audio => {
        return audio.source === source;
      });

      if (found) {
        this.audioChips.push(found);
      }
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.audioCtrl.setValue(null);
  }

  clearChips(): void {
    if (this.playing) {
      this.soundService.stop();
    }

    this.audioChips.length = 0;
    this.audioInput.nativeElement.value = '';
    this.audioCtrl.setValue(null);
  }

  private _filter(value: string): AudioEntry[] {
    const filterValue: string = value.toLowerCase();

    return this.allAudios.filter(audio => audio.label.toLowerCase().indexOf(filterValue) >= 0);
  }

  getIconSource(audio:AudioEntry): string {
    if (audio.icon) {
      return `assets/images/${audio.icon}`;
    } else {
      return 'assets/images/blank_26x26.png';
    }
  }

  private loadAudioChains(): void {
    let audioChains: AudioChains = this.storageService.get(CUSTOM_AUDIO_CHAINS_KEY);

    //console.log('[loadAudioChains] Loaded audio chains:', audioChains);

    if (audioChains) {
      audioChains.chains.forEach(chain => {
        let sources: AudioEntry[] = [];

        chain.sources.forEach(source => {
          var found: AudioEntry = this.allAudios.find(audio => {
            return audio.source === source;
          });

          if (found) {
            sources.push(found);
          }
        });

        if (sources && (sources.length > 0)) {
          this.customAudioChains.push(sources);
        }
      });
    }
  }

  onSelectedChip(event: MatAutocompleteSelectedEvent): void {
    const source: string = event.option.value; // the audio source

    if ((source || '').trim()) {
      var found = this.allAudios.find(audio => {
        return audio.source === source;
      });

      if (found) {
        this.audioChips.push(found);
      }
    }
    
    this.audioInput.nativeElement.value = '';
    this.audioCtrl.setValue(null);
  }

  openPanel(): void {
    this.audioInputTrigger.openPanel();
  }

  pauseAudioChain(index:number): void {
    if (!this.soundService.isPaused()) {
      this.paused = true;
      this.soundService.pause();
    } else {
      this.paused = false;
      this.soundService.resume();
    }
  }

  /**
   * Play the audio chips
   * @param index 
   */
  playAudioChips(): void {
    if (this.audioChips.length > 0) {
      const entries: AudioItem[] = this.audioChips.map(entry => {
        return {
          source: `assets/audio/${entry.source}`,
          volume: 1.0
        };
      });

      if (entries && (entries.length > 0)) {
        this.soundService.playAudioMultiple(entries);
      }
    }
  }

  playAudioChain(index:number): void {
    if (this.customAudioChains.length > index) {
      const chain: AudioEntry[] = this.customAudioChains[index];

      if (chain) {
        const entries: AudioItem[] = chain.map(entry => {
          return {
            source: `assets/audio/${entry.source}`,
            volume: 1.0
          };
        });

        if (entries && (entries.length > 0)) {
          this.soundService.playAudioMultiple(entries);
        }
      }
    }
  }

  removeAudioChain(index:number): void {
    if (index > -1) {
      this.stopAudioChain(index);
      this.customAudioChains.splice(index, 1);

      this.saveAudioChains();
    }
  }

  removeChip(audio: AudioEntry): void {
    const index = this.audioChips.indexOf(audio);

    if (index >= 0) {
      this.audioChips.splice(index, 1);
    }
  }

  private saveAudioChains(): void {
    let value: AudioChains = {
      version: CUSTOM_AUDIO_CHAINS_VERSION,
      size: this.customAudioChains.length,
      chains: []
    };

    this.customAudioChains.forEach(chain => {
      let sources: string[] = [];

      chain.forEach(audio => {
        sources.push(audio.source);
      });

      value.chains.push({
        sources: sources
      })
    })

    this.storageService.set(CUSTOM_AUDIO_CHAINS_KEY, value);
  }

  stopAudioChain(index:number): void {
    this.soundService.stop();
    this.paused = false;
  }

  stopAudioChips(): void {
    this.soundService.stop();
    this.paused = false;
  }
}
