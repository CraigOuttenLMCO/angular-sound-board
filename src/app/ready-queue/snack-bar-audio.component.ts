import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-snack-bar-audio',
  templateUrl: './snack-bar-audio.component.html',
  styleUrls: ['./snack-bar-audio.component.css']
})
export class SnackBarAudioComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
  }

  ngOnInit() {
  }
}
