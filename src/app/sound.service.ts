import { Injectable, EventEmitter } from '@angular/core';
import { AUDIO_ENTRIES, AudioEntry, AudioCategory } from './audio';

export interface AudioEvent /*extends Event*/ {
  type: string;
};

export interface AudioItem {
  source: string;
  volume: number;
}

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  readyEntries:AudioEntry[] = [];
  private player: any;
  private audioFiles:AudioItem[] = [];

  audioItemStarted:EventEmitter<AudioEvent> = new EventEmitter();
  audioItemEnded:EventEmitter<AudioEvent> = new EventEmitter();
  audioStarted:EventEmitter<AudioEvent> = new EventEmitter();
  audioComplete:EventEmitter<AudioEvent> = new EventEmitter();

  private audioEndedCallback:any = {
    handleEvent: function(event) {
      //console.log("[SoundService Callback] Audio ended", event);
      if (this.emitter) {
        this.emitter.emit({ type: 'itemended' });  
      }
    },
    emitter: this.audioItemEnded
  };

  constructor() {
    //console.log("SoundService being constructed");

    this.readyEntries = AUDIO_ENTRIES.filter(entry => {
      return entry.category === AudioCategory.Ready;
    });
  }

  public audioEntriesByCategory(category:AudioCategory): AudioEntry[] {
    let entries:AudioEntry[] = [];

    entries = AUDIO_ENTRIES.filter(entry => {
      return entry.category === category;
    });

    return entries;
  }

  public audioEntriesByLabel(label:string): AudioEntry[] {
    let entries:AudioEntry[] = [];

    entries = AUDIO_ENTRIES.filter(entry => {
      return entry.label === label;
    });

    return entries;
  }

  public audioEntriesBySource(source:string): AudioEntry[] {
    let entries:AudioEntry[] = [];

    entries = AUDIO_ENTRIES.filter(entry => {
      return entry.source === source;
    });

    return entries;
  }

  public mute(): void {
    if (this.player && this.player.nativeElement) {
      this.player.nativeElement.muted = !this.player.nativeElement.muted;
    }
  }

  onAudioEnded(event:any): void {
    //console.log("[SoundService] Audio ended", event);

    if (this.audioFiles.length > 0) {
      this.pause();
      this.play();
    } else {
      this.audioComplete.emit({ type: 'complete' });
    }
  }

  onAudioStarted(event:any): void {
    //console.log("[SoundService] Audio started", event);
  }

  public pause(): void {
    if (this.player && this.player.nativeElement && !this.player.nativeElement.paused) {
      this.player.nativeElement.pause();
    }
  }

  private play(): void {
    if (this.audioFiles.length > 0) {
      // Play the first item in the queue/list
      var item:AudioItem = this.audioFiles.shift();

      if (this.player.nativeElement.src != item.source) {
        this.player.nativeElement.src = item.source;
      }

      if (this.player.nativeElement.volume != item.volume) {
        this.player.nativeElement.volume = item.volume;
      }

      this.player.nativeElement.play();
      this.audioItemStarted.emit({ type: 'itemstarted' });
    }
  }

  public playAudio(item:AudioItem):void {
    //console.log("player? " + this.player);
    //console.log(this);

    //if (this.player) {
    //  console.log("Native Element? " + this.player.nativeElement.src);
    //}

    if (this.player && (this.player.nativeElement.src != "")) {
      //console.log("Attempting to play: assets/audio/" + file);
      this.audioFiles.push(item);
      this.audioStarted.emit({type: 'started'});
      this.play();
    }
  }

  public playAudioMultiple(items:AudioItem[]):void {
    if (items) {
      if (Array.isArray(items)) {
        this.audioFiles = items;
      } else {
        // If not of type array, convert idea
        this.audioFiles = [items];
      }

      if (this.audioFiles.length > 0) {
        this.audioStarted.emit({type: 'started'});
        this.play();
      }
    }
  }

  public removeAudioPlayer(player:any):void {
    //console.log('[SoundService:removeAudioPlayer]', this);

    this.player.nativeElement.removeEventListener('ended', this.audioEndedCallback, true);
    this.player = undefined;
  }

  public setAudioPlayer(player:any):void {
    this.player = player;
    //console.log('[SoundService:setAudioPlayer]', this);

    this.player.nativeElement.addEventListener('ended', this.audioEndedCallback, true);

    this.audioItemStarted.subscribe(event => {
      //console.log('[SoundService] Audio Started Event:', event);
      this.onAudioStarted(event);
    });

    this.audioItemEnded.subscribe(event => {
      //console.log('[SoundService] Audio Ended Event:', event);
      this.onAudioEnded(event);
    });
  }
}
