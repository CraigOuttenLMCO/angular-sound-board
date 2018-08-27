import { Injectable, EventEmitter, OnDestroy } from '@angular/core';
import { AUDIO_ENTRIES, AudioEntry, AudioCategory } from './audio';
import { Subscription } from 'rxjs/Subscription';

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
export class SoundService implements OnDestroy {
  private audio:HTMLAudioElement = new Audio();
  private audioFiles:AudioItem[] = [];

  audioItemStarted:EventEmitter<AudioEvent> = new EventEmitter();
  audioItemEnded:EventEmitter<AudioEvent> = new EventEmitter();
  audioStarted:EventEmitter<AudioEvent> = new EventEmitter();
  audioStopped:EventEmitter<AudioEvent> = new EventEmitter();
  audioComplete:EventEmitter<AudioEvent> = new EventEmitter();
  // Subscriptions
  audioItemStartedSubscription: Subscription;
  audioItemEndedSubscription: Subscription;

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

    /*this.readyEntries = AUDIO_ENTRIES.filter(entry => {
      return entry.category === AudioCategory.Ready;
    });*/

    this.audioItemStartedSubscription = this.audioItemStarted.subscribe(event => {
      //console.log('[SoundService] Audio Item Started Event:', event);
      this.onAudioStarted(event);
    });

   this.audioItemEndedSubscription =  this.audioItemEnded.subscribe(event => {
      //console.log('[SoundService] Audio Item Ended Event:', event);
      this.onAudioEnded(event);
    });

    this.audio.addEventListener('ended', this.audioEndedCallback, true);
  }

  /**
   * The only lifecycle hook for a service
   */
  ngOnDestroy() {
    this.audio.removeEventListener('ended', this.audioEndedCallback, true);

    if (this.audioItemStartedSubscription) {
      //console.log('[SoundService] Unsubscribe Audio Item Started Event:', event);
      this.audioItemStartedSubscription.unsubscribe();
    }

    if (this.audioItemEndedSubscription) {
      //console.log('[SoundService] Unsubscribe Audio Item Ended Event:', event);
      this.audioItemEndedSubscription.unsubscribe();
    }
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

  public isPaused(): boolean {
    return this.audio.paused;
  }

  public mute(): void {
    /*if (this.player && this.player.nativeElement) {
      this.player.nativeElement.muted = !this.player.nativeElement.muted;
    }*/
    // [updated]
    this.audio.muted = !this.audio.muted;
  }

  onAudioEnded(event:any): void {
    //console.log("[SoundService] Audio ended", event);

    if (this.audioFiles.length > 0) {
      //this.pause();
      this.play();
    } else {
      this.audioComplete.emit({ type: 'complete' });
    }
  }

  onAudioStarted(event:any): void {
    //console.log("[SoundService] Audio started", event);
  }

  public pause(): void {
    if (!this.audio.paused) {
      this.audio.pause();
    }
  }

  private play(): void {
    if (this.audioFiles.length > 0) {
      // Play the first item in the queue/list
      var item:AudioItem = this.audioFiles.shift();

      if (this.audio.src != item.source) {
        this.audio.src = item.source;
      }

      if (item.volume) {
        if (this.audio.volume != item.volume) {
          this.audio.volume = item.volume;
        }
      } else {
        this.audio.volume = 1.0;
      }

      this.audio.currentTime = 0;
      // The load() method is used to update the audio/video element after changing the source or other settings.
      this.audio.load();
      this.audio.play();
      
      this.audioItemStarted.emit({ type: 'itemstarted' });
    }
  }

  public playAudio(item:AudioItem):void {
    //console.log("player? " + this.player);
    //console.log(this);

    //if (this.player) {
    //  console.log("Native Element? " + this.player.nativeElement.src);
    //}

    this.audioFiles.push(item);
    this.audioStarted.emit({type: 'started'});
    this.play();
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

  resume(): void {
    if (this.audio.paused) {
      this.audio.play();
    }
  }
  

  public stop(): void {
    if (!this.audio.paused) {
      this.audio.pause();
    }
    
    this.audio.currentTime = 0;

    // Clear the audio array
    if (this.audioFiles.length > 0) {
      this.audioFiles.length = 0;
    }

    this.audioStopped.emit({ type: 'stopped'});
    this.audioComplete.emit({ type: 'complete' });
  }
}
