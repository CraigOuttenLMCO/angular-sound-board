import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Input, Output, ViewChild } from '@angular/core';

const AUDIO_ENTRIES = [
  /*
  name: 'Demo Sounds',
  audio: [{
    src: 'song1.mp3',
    label: 'Song 1',
    color: 'primary'
  }, {
    src: 'song2.mp3',
    label: 'Song2',
    color: 'primary'
  }]
  },*/ {
    name: 'Ready Queue',
    audio: [{
      src: 'BaDumTss.mp3',
      label: 'Ba Dum Tss',
      color: 'primary'
    }, {
      src: 'BlessYou.mp3',
      label: 'Bless You',
      color: 'primary'
    }, {
      src: 'BottomsUp.mp3',
      label: 'Bottoms Up',
      color: 'primary',
      pngicon: 'SodaCan3_18x24.png',
      svgicon: 'soda-can'
    }, {
      src: 'Drama.mp3',
      label: 'Drama',
      color: 'primary'
    }, {
      src: 'GoodMorningFolks.mp3',
      label: 'Good Morning Folks',
      color: 'primary',
      pngicon: 'MichaelFrancis_20x24.png',
      svgicon: 'michael-francis'
    }, {
      src: 'Hello.mp3',
      label: 'Hello',
      color: 'primary'
    }, {
      src: 'Motorcycle.mp3',
      label: 'Motorcycle',
      color: 'primary',
      pngicon: 'HarleyDavidson2_31x24.png',
      svgicon: 'harley-davisdon'
    }, {
      src: 'Nope.wav',
      label: 'Nope',
      color: 'primary'
    }, {
      src: 'Shh.mp3',
      label: 'Shh',
      color: 'primary',
      pngicon: 'PinkiePie_34x24.png',
      svgicon: 'pinkie-pie'
    }, {
      src: 'ShhCraig.mp3',
      label: 'Shh (Craig)',
      color: 'primary',
      pngicon: 'PinkiePie_34x24.png',
      svgicon: 'pinkie-pie'
    }, {
      src: 'ShhNotHelping.mp3',
      label: 'Shh Not Helping',
      color: 'primary',
      pngicon: 'PinkiePie_34x24.png',
      svgicon: 'pinkie-pie'
    }, {
      src: 'ShhShort.mp3',
      label: 'Shh (Short)',
      color: 'primary'
    }, ]
  }, {
  name: 'Office Sounds',
  audio: [{
    src: 'TimAllenAeuhhh.mp3',
    label: 'Aeuhhh',
    color: 'primary',
    pngicon: 'TimTaylor_24x24.png',
    svgicon: 'tim-taylor'
  }, {
    src: 'BadCough.mp3',
    label: 'Bad Cough',
    color: 'primary',
    pngicon: 'TheCough_24x24.png',
    svgicon: 'the-cough'
  }, {
    src: 'Bathroom.mp3',
    label: 'Bathroom',
    color: 'primary',
    pngicon: 'EricCartman_26x24.png',
    svgicon: 'eric-cartman'
  }, {
    src: 'BigSummerBlowout.mp3',
    label: 'Big Summer Blowout',
    color: 'primary',
    pngicon: 'OakenFrozen_25x24.png',
    svgicon: 'oaken-frozen'
  }, {
    src: 'ByeFelicia.mp3',
    label: 'Bye Felicia',
    color: 'primary'
  }, {
    src: 'CelebrateBirthday.mp3',
    label: 'Celebrate Birthday',
    color: 'primary',
    pngicon: 'PinkiePie_34x24.png',
    svgicon: 'pinkie-pie'
  }, {
    src: 'EffectiveCommunication.mp3',
    label: 'Communication',
    color: 'primary',
    pngicon: 'HeatherFleischmann2_24x42.png',
    svgicon: 'heather-fleischmann'
  }, {
    src: 'Crickets.wav',
    label: 'Crickets',
    color: 'primary'
  }, {
    src: 'FangirlSqueal.mp3',
    label: 'Fangirl Squeal',
    color: 'primary',
    pngicon: 'PinkiePie_34x24.png',
    svgicon: 'pinkie-pie'
  }, {
    src: 'FangirlSquealShort.mp3',
    label: 'Fangirl Squeal (Short)',
    color: 'primary',
    pngicon: 'PinkiePie_34x24.png',
    svgicon: 'pinkie-pie'
  }, {
    src: 'Fart.mp3',
    label: 'Fart',
    color: 'primary',
    pngicon: 'CraigOutten_28x28.png',
    svgicon: 'craig-outten'
  }, 
{
    src: 'Gasp.mp3',
    label: 'Gasp',
    color: 'primary',
    pngicon: 'PinkiePie_34x24.png',
    svgicon: 'pinkie-pie'
  },  {
    src: 'GaspGroup.mp3',
    label: 'Gasp (Group)',
    color: 'primary',
    pngicon: 'PinkiePie_34x24.png',
    svgicon: 'pinkie-pie'
  }, {
    src: 'Gorilla.mp3',
    label: 'Gorilla',
    color: 'primary'
  }, {
    src: 'IDidIt.mp3',
    label: 'I Did It',
    color: 'primary',
    pngicon: 'PinkiePie_34x24.png',
    svgicon: 'pinkie-pie'
  }, {
    src: 'ImReady.mp3',
    label: 'I\'m Ready',
    color: 'primary',
    pngicon: 'SpongeBob_17x24.png',
    svgicon: 'sponge-bob'
  }, {
    src: 'LightBulb.mp3',
    label: 'Light Bulb',
    color: 'primary',
    pngicon: 'TheMinion_21x28.png',
    svgicon: 'the-minion'
  }, {
    src: 'LoudNoises.mp3',
    label: 'Loud Noises',
    color: 'primary',
    pngicon: 'MichaelScott_28x28.png',
    svgicon: 'michael-scott'
  }, {
    src: 'MakeItStop.mp3',
    label: 'Make It Stop',
    color: 'primary',
    pngicon: 'PinkiePie_34x24.png',
    svgicon: 'pinkie-pie'
  }, {
    src: 'Meatloaf.mp3',
    label: 'Meatloaf',
    color: 'primary'
  }, {
    src: 'NoGodNo.mp3',
    label: 'No God No',
    color: 'primary',
    pngicon: 'MichaelScott_28x28.png',
    svgicon: 'michael-scott'
  }, {
    src: 'NotTheMama.mp3',
    label: 'Not The Mama',
    color: 'primary'
  }, {
    src: 'OhHellNo.mp3',
    label: 'Oh Hell No',
    color: 'primary',
    pngicon: 'CrystalMiller2_19x24.png',
    svgicon: 'crystal-miller'
  }, {
    src: 'OhWahAhAhAh.mp3',
    label: 'Oh WahAhAhAh',
    color: 'primary'
  }, {
    src: 'PartyStarted.mp3',
    label: 'Party Started',
    color: 'primary',
    pngicon: 'PinkiePie_34x24.png',
    svgicon: 'pinkie-pie'
  }, {
    src: 'RunAway.mp3',
    label: 'Run Away',
    color: 'primary'
  }, {
    src: 'SayWhat.mp3',
    label: 'Say What',
    color: 'primary'
  }, 
  {
    src: 'ScreamingGoat.mp3',
    label: 'Screaming Goat',
    color: 'primary',
    pngicon: 'Goat_24x24.png',
    svgicon: 'goat'
  },{
    src: 'StandUp.mp3',
    label: 'Stand Up',
    color: 'primary',
    pngicon: 'RobPoole_24x24_2.png',
    svgicon: 'rob-poole'
  }, {
    src: 'SufferinSuccotash.mp3',
    label: 'Sufferin\' Succotash',
    color: 'primary'
  }, {
    src: 'ThatsAllFolks.mp3',
    label: 'Thats All Folks',
    color: 'primary',
    pngicon: 'Porky_24x24.png',
    svgicon: 'porky'
  }, {
    src: 'ThatsFunny.mp3',
    label: 'That\'s Funny',
    color: 'primary',
    pngicon: 'TowMater_28x28.png',
    svgicon: 'tow-mater'
  }, {
    src: 'VerizonRingtone1.mp3',
    label: 'Verizon Ringtone 1',
    color: 'primary',
    pngicon: 'CellPhone_20x24.png',
    svgicon: 'cell-phone'
  }, {
    src: 'What.mp3',
    label: 'What!',
    color: 'primary'
  }, {
    src: 'Wrong.mp3',
    label: 'Wrong',
    color: 'primary'
  }, {
    src: 'WrongWrongWrong.mp3',
    label: 'Wrong Wrong Wrong',
    color: 'primary'
  }, {
    src: 'Yay.mp3',
    label: 'Yaaaaaaay',
    color: 'primary'
  }, {
    src: 'Yeah.mp3',
    label: 'Yeah',
    color: 'primary'
  }, {
    newline: true
  }, {
    src: 'GonnaDoO.mp3',
    label: 'Gonna DoO',
    color: 'primary',
    pngicon: 'YodelerKid_21x24.png',
    svgicon: 'yodeler-kid'
  }, {
    src: 'OhLord.mp3',
    label: 'Oh Lord',
    color: 'primary',
    pngicon: 'YodelerKid_21x24.png',
    svgicon: 'yodeler-kid'
  }, {
    src: 'OhWoahWoah.mp3',
    label: 'Oh Woah Woah',
    color: 'primary',
    pngicon: 'YodelerKid_21x24.png',
    svgicon: 'yodeler-kid'
  }, {
    src: 'WalmartYodelingKid.mp3',
    label: 'Walmart Yodeling Kid',
    color: 'primary',
    pngicon: 'YodelerKid_21x24.png',
    svgicon: 'yodeler-kid'
  }]
}];

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
