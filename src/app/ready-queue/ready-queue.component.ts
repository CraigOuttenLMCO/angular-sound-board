import { Component, OnInit, Input, OnDestroy, AfterViewInit } from '@angular/core';
import { AudioEntry, AUDIO_ENTRIES } from '../audio';
import { LocalStorageService } from '../local-storage.service';
import { SoundService, AudioItem } from '../sound.service';
import { MatDialog } from '@angular/material';
import { AudioEntryOption, EditReadyQueueDialogData, EditReadyQueueComponent } from '../edit-ready-queue/edit-ready-queue.component';
import { Subscription } from 'rxjs/Subscription';

const READY_QUEUE_AUDIO_ENTRIES_KEY: string = "ready.queue.audio.entries";
const READY_QUEUE_AUDIO_ENTRIES_VERSION: number = 1.1;

export interface ReadyQueueAudioEntries {
  version: number;
  audioEntries: AudioEntry[];
};

@Component({
  selector: 'ready-queue',
  templateUrl: './ready-queue.component.html',
  styleUrls: ['./ready-queue.component.css']
})
export class ReadyQueueComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() stopButton: boolean = true;
  @Input() collapsed: boolean = false; // TODO add support
  @Input() editable: boolean = true;

  audioEntries: AudioEntry[] = [];

  audioStartedSubscription: Subscription;
  audioCompleteSubscription: Subscription;
  playing: boolean = false;

  constructor(
    private soundService:SoundService,
    private storageService:LocalStorageService,
    private dialog: MatDialog) {
  }

  ngOnInit() {
    if (this.editable) {
      if (this.storageService.containsKey(READY_QUEUE_AUDIO_ENTRIES_KEY)) {
        //console.log('conains key: ' + READY_QUEUE_AUDIO_ENTRIES_KEY);
        let retrieve: ReadyQueueAudioEntries = this.storageService.get(READY_QUEUE_AUDIO_ENTRIES_KEY);
        //console.log(`[ngOnInit] retrieve value for ${READY_QUEUE_AUDIO_ENTRIES_KEY}`, retrieve);

        if (retrieve && (retrieve.audioEntries)) {
          if (retrieve.audioEntries.length > 0) {
            retrieve.audioEntries.forEach(entry => {
              //console.log('entry', entry);
              const audioEntry: AudioEntry = {
                id: entry.id,
                label: entry.label,
                category: entry.category,
                ready: entry.ready,
                source: entry.source,
                color: entry.color,
                icon: entry.icon
              };

              this.audioEntries.push(audioEntry);
            });
          }
        } else {
          // Only use default when ReadyQueueAudioEntries hasn't been saved to local storage
          this.audioEntries = this.soundService.defaultReadyEntries();
        }
      } else {
        this.audioEntries = this.soundService.defaultReadyEntries();
      }
    } else {
      // Not editable, just load the default ready entries
      this.audioEntries = this.soundService.defaultReadyEntries();
    }
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

  editReadyQueue(event:any): void {
    if (!this.editable) {
      return;
    }

    // blur() - bug fix to remove focus (ripple) once dialog is closed
    event.currentTarget.blur();

    let audioOptions: AudioEntryOption[] = [];

    AUDIO_ENTRIES.forEach(entry => {
      const result = this.audioEntries.find(ready => {
        if (ready.id && entry.id) {
          return ready.id === entry.id
        } else {
          // Backwards compatibility
          return ready.source === entry.source;
        }
      });
      const selected: boolean = result ? true : false;

      let audioOption: AudioEntryOption = {
        id: entry.id,
        label: entry.label,
        category: entry.category,
        ready: entry.ready,
        source: entry.source,
        color: entry.color,
        icon: entry.icon,
        selected: selected
      };

      audioOptions.push(audioOption);
    });

    let dialogData: EditReadyQueueDialogData = {
      audioEntries: audioOptions
    }

    const dialogRef = this.dialog.open(EditReadyQueueComponent, {
      width: '400px',
      data: dialogData
    });
    
    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed:', result);
      //console.log('event:', event);
      //button.nativeElement.blur();

      if (result && (result.length > 0)) {
        this.audioEntries.length = 0;
        this.audioEntries = result.slice();
        /*
        result.forEach(selected => {

          if (selected.selected) {
            //console.log('selected:', selected);
            let entry: AudioEntry = {
              label: selected.label,
              category: selected.category,
              source: selected.source,
              color: selected.color,
              icon: selected.icon,
            };

            this.audioEntries.push(entry);
          }
        });
        */

        // Save the changes made to the ready queue
        this.saveReadyQueue();
      }
    });
  }

  playAudio(file:string): void {
    let item:AudioItem = {
      source: "assets/audio/" + file,
      volume: 1.0
    };

    this.soundService.playAudio(item);
  }

  restoreReadyQueue(): void {
    // Clear the audio entries
    this.audioEntries = [];

    // Restore the default audio entries for the ready queue

    //this.audioEntries = this.soundService.audioEntriesByCategory(AudioCategory.Ready);
    this.audioEntries = this.soundService.defaultReadyEntries();

    this.saveReadyQueue();
  }

  private saveReadyQueue(): void {
    const save: ReadyQueueAudioEntries = {
      version: READY_QUEUE_AUDIO_ENTRIES_VERSION,
      audioEntries: this.audioEntries
    };

    this.storageService.set(READY_QUEUE_AUDIO_ENTRIES_KEY, save);
  }

  stop(): void {
    this.soundService.stop();
  }

  mute(): void {
    this.soundService.mute();
  }
}
