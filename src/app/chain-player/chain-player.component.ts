import { Component, ElementRef, ViewChild, OnInit, OnDestroy, AfterViewInit, Input } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocompleteTrigger } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AUDIO_ENTRIES, AudioEntry } from '../audio';
import { LocalStorageService } from '../local-storage.service';
import { SoundService, AudioItem } from '../sound.service';

const CUSTOM_AUDIO_CHAINS_KEY: string = "custom.audio.chains";

interface AudioChain {
  //index: number; TODO
  sources: string[];
}

interface AudioChains {
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
  audios: AudioEntry[] = [];
  allAudios: AudioEntry[] = AUDIO_ENTRIES;
  customAudioChains: Array<Array<AudioEntry>> = new Array<Array<AudioEntry>>();

  @ViewChild('audioInput', { read: MatAutocompleteTrigger }) audioInputTrigger: MatAutocompleteTrigger;
  @ViewChild('audioInput') audioInput: ElementRef;
  @ViewChild('audioplayer') player: ElementRef;

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
    this.player.nativeElement.src = "assets/audio/_.mp3";
    this.soundService.setAudioPlayer(this.player);

    this.loadAudioChains();
  }

  ngOnDestroy() {
    this.soundService.removeAudioPlayer(this.player);
  }

  /* Functions */

  addChain(): void {
    // Clear the audio input field
    let items:AudioEntry[] = this.audios.splice(0, this.audios.length);
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
        this.audios.push(found);
      }
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

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
        this.audios.push(found);
      }
    }
    
    this.audioInput.nativeElement.value = '';
    this.audioCtrl.setValue(null);
  }

  openPanel(): void {
    this.audioInputTrigger.openPanel();
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
      this.customAudioChains.splice(index, 1);

      this.saveAudioChains();
   }
  }

  removeChip(audio: AudioEntry): void {
    const index = this.audios.indexOf(audio);

    if (index >= 0) {
      this.audios.splice(index, 1);
    }
  }

  private saveAudioChains(): void {
    let value: AudioChains = {
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
    this.soundService.pause();
  }
}
