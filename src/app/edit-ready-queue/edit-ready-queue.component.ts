import { Component, OnInit, ViewChild, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA, MatSelectionList } from '@angular/material';
import { AudioEntry } from '../audio';


export interface AudioEntryOption extends AudioEntry {
  selected: boolean;
};

export interface EditReadyQueueDialogData {
  audioEntries: AudioEntryOption[];
};

@Component({
  selector: 'app-edit-ready-queue',
  templateUrl: './edit-ready-queue.component.html',
  styleUrls: ['./edit-ready-queue.component.css']
})
export class EditReadyQueueComponent implements OnInit {
  @ViewChild('selections') selections: MatSelectionList;

  audioEntries: AudioEntryOption[] = [];

  constructor(
    public dialogRef: MatDialogRef<EditReadyQueueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EditReadyQueueDialogData) {
      this.audioEntries = data.audioEntries;
  }

  ngOnInit() {
  }

  /*
  onNoClick(): void {
    this.dialogRef.close();
  }
  */

  onApply(): void {
    let selecteds: AudioEntry[] = [];

    this.selections.selectedOptions.selected.forEach(selected => {
      if (selected.selected) {
        let entry: AudioEntry = {
          id: selected.value.id,
          label: selected.value.label,
          category: selected.value.category,
          ready: selected.value.ready,
          source: selected.value.source,
          color: selected.value.color,
          icon: selected.value.icon,
        };

        selecteds.push(entry);
      }
    });

    if (selecteds.length > 0) {
      selecteds.sort((a: AudioEntry, b: AudioEntry) => {
        // Sort by label
        let labelA: string = a.label.toUpperCase(); // ignore upper and lowercase
        let labelB : string = b.label.toUpperCase(); // ignore upper and lowercase

        if (labelA < labelB) {
          return -1;
        }
        if (labelA > labelB) {
          return 1;
        }

        // Labels must be equal
        return 0;
      });
    }

    this.dialogRef.close(selecteds);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
