import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Input, Output, ViewChild } from '@angular/core';

const READY_QUEUE_SOUNDS = [
  {
    src: 'BaDumTss.mp3',
    label: 'Ba Dum Tss',
    color: 'primary'
  }, {
    src: 'BlessYou.mp3',
    label: 'Bless You',
    color: 'primary',
    pngicon: 'TheSneeze_24x24.png',
    svgicon: 'the-sneeze'
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
  }
];

const FUNNY_SOUNDS = [
  {
    name: 'Uncategorized',
    label: 'Uncategorized',
    pngicon: 'CraigOutten_28x28.png',
    audio: [
      {
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
        src: 'Breaker19.mp3',
        label: 'Breaker 1-9',
        color: 'primary',
        pngicon: 'SemiTruck_35x24.png',
        svgicon: 'semi-truck'
      }, {
        src: 'ByeFelicia.mp3',
        label: 'Bye Felicia',
        color: 'primary'
      }, {
        src: 'CashMeOutside.mp3',
        label: 'Cash Me Outside',
        color: 'primary'
      }, {
        src: 'Convoy.mp3',
        label: 'Convoy',
        color: 'primary',
        pngicon: 'SemiTruck_35x24.png',
        svgicon: 'semi-truck'
      }, {
        src: 'Crickets.wav',
        label: 'Crickets',
        color: 'primary'
      }, {
        src: 'Fart.mp3',
        label: 'Fart',
        color: 'primary',
        pngicon: 'CraigOutten_28x28.png',
        svgicon: 'craig-outten'
      }, {
        src: 'Gorilla.mp3',
        label: 'Gorilla',
        color: 'primary'
      }, {
        src: 'ImReady.mp3',
        label: 'I\'m Ready',
        color: 'primary',
        pngicon: 'SpongeBob_17x24.png',
        svgicon: 'sponge-bob'
      }, {
        src: 'Meatloaf.mp3',
        label: 'Meatloaf',
        color: 'primary'
      }, {
        src: 'MyPrecious.mp3',
        label: 'My Precious',
        color: 'primary',
        pngicon: 'Gollum_24x24.png',
        svgicon: 'the-gollum'
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
        src: 'Respect.mp3',
        label: 'Respect',
        color: 'primary',
        pngicon: 'FlyingV_31x24.png',
        svgicon: 'flyingv-guitar'
      }, {
        src: 'RunAway.mp3',
        label: 'Run Away',
        color: 'primary'
      }, {
        src: 'SayWhat.mp3',
        label: 'Say What',
        color: 'primary'
      }, {
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
        src: 'WhatDidYouCallMe.mp3',
        label: 'What Did You Call Me',
        color: 'primary',
        pngicon: 'OakenFrozen_25x24.png',
        svgicon: 'oaken-frozen'
      }, {
        src: 'WhatDidYouSay.mp3',
        label: 'What Did You Say',
        color: 'primary',
        pngicon: 'FlyingV_31x24.png',
        svgicon: 'flyingv-guitar'
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
      }
    ]
  }, {
    name: 'Despicable Me',
    label: 'DespicableMe',
    pngicon: 'TheMinion_21x28.png',
    audio: [
      {
        src: 'ItsSoFluffy.mp3',
        label: 'It\'s So Fluffy',
        color: 'primary',
        pngicon: 'TheMinion_21x28.png',
        svgicon: 'the-minion'
      }, {
        src: 'LightBulb.mp3',
        label: 'Light Bulb',
        color: 'primary',
        pngicon: 'TheMinion_21x28.png',
        svgicon: 'the-minion'
      }
    ]
  }, {
    name: 'Heather',
    label: 'Heather',
    pngicon: 'HeatherFleischmann2_24x42.png',
    audio: [
      {
        src: 'Businesses.mp3',
        label: 'Businesses',
        color: 'primary',
        pngicon: 'HeatherFleischmann2_24x42.png',
        svgicon: 'heather-fleischmann'
      }, {
        src: 'Connections.mp3',
        label: 'Connections',
        color: 'primary',
        pngicon: 'HeatherFleischmann2_24x42.png',
        svgicon: 'heather-fleischmann'
      }, {
        src: 'EffectiveCommunication.mp3',
        label: 'Communication',
        color: 'primary',
        pngicon: 'HeatherFleischmann2_24x42.png',
        svgicon: 'heather-fleischmann'
      }, {
        src: 'Graduated.mp3',
        label: 'Graduated',
        color: 'primary',
        pngicon: 'HeatherFleischmann2_24x42.png',
        svgicon: 'heather-fleischmann'
      }, {
        src: 'IWasGreat.mp3',
        label: 'I Was Great',
        color: 'primary',
        pngicon: 'HeatherFleischmann2_24x42.png',
        svgicon: 'heather-fleischmann'
      }, {
        src: 'HeatherIsGreat.mp3',
        label: 'I\'m Great',
        color: 'primary',
        pngicon: 'HeatherFleischmann2_24x42.png',
        svgicon: 'heather-fleischmann'
      }, {
        src: 'InternshipOriented.mp3',
        label: 'Internship Oriented',
        color: 'primary',
        pngicon: 'HeatherFleischmann2_24x42.png',
        svgicon: 'heather-fleischmann'
      }, {
        src: 'Knowledge.mp3',
        label: 'Knowledge',
        color: 'primary',
        pngicon: 'HeatherFleischmann2_24x42.png',
        svgicon: 'heather-fleischmann'
      }, {
        src: 'StevensonSoldMe.mp3',
        label: 'Stevenson Sold Me',
        color: 'primary',
        pngicon: 'HeatherFleischmann2_24x42.png',
        svgicon: 'heather-fleischmann'
      }, {
        src: 'Stutter.mp3',
        label: 'Stutter',
        color: 'primary',
        pngicon: 'HeatherFleischmann2_24x42.png',
        svgicon: 'heather-fleischmann'
      }
    ]
  }, {
    name: 'Looney Tunes',
    label: 'LooneyTunes',
    pngicon: 'Porky_24x24.png',
    audio: [
      {
        src: 'SufferinSuccotash.mp3',
        label: 'Sufferin\' Succotash',
        color: 'primary'
      }, {
        src: 'ThatsAllFolks.mp3',
        label: 'Thats All Folks',
        color: 'primary',
        pngicon: 'Porky_24x24.png',
        svgicon: 'porky'
      }
    ]
  }, {
    name: 'My Little Pony',
    label: 'MyLittlePony',
    pngicon: 'PinkiePie_34x24.png',
    audio: [
      {
        src: 'CelebrateBirthday.mp3',
        label: 'Celebrate Birthday',
        color: 'primary',
        pngicon: 'PinkiePie_34x24.png',
        svgicon: 'pinkie-pie'
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
        src: 'IDidIt.mp3',
        label: 'I Did It',
        color: 'primary',
        pngicon: 'PinkiePie_34x24.png',
        svgicon: 'pinkie-pie'
      }, {
        src: 'MakeItStop.mp3',
        label: 'Make It Stop',
        color: 'primary',
        pngicon: 'PinkiePie_34x24.png',
        svgicon: 'pinkie-pie'
      }, {
        src: 'PartyStarted.mp3',
        label: 'Party Started',
        color: 'primary',
        pngicon: 'PinkiePie_34x24.png',
        svgicon: 'pinkie-pie'
      }
    ]
  }, {
    name: 'The Office',
    label: 'TheOffice',
    pngicon: 'MichaelScott_28x28.png',
    audio: [
      {
        src: 'InThePot.mp3',
        label: 'In The Pot',
        color: 'primary',
        pngicon: 'KevinMalone_28x28.png',
        svgicon: 'kevin-malone'
      }, {
        src: 'LoudNoises.mp3',
        label: 'Loud Noises',
        color: 'primary',
        pngicon: 'MichaelScott_28x28.png',
        svgicon: 'michael-scott'
      }, {
        src: 'MyDogsAreBarking.mp3',
        label: 'My Dogs Are Barking',
        color: 'primary',
        pngicon: 'KevinMalone_28x28.png',
        svgicon: 'kevin-malone'
      }, {
        src: 'NoGodNo.mp3',
        label: 'No God No',
        color: 'primary',
        pngicon: 'MichaelScott_28x28.png',
        svgicon: 'michael-scott'
      }, {
        src: 'WantAnMnM.mp3',
        label: 'Want An M&M',
        color: 'primary',
        pngicon: 'KevinMalone_28x28.png',
        svgicon: 'kevin-malone'
      }
    ]
  }, {
    name: 'Yodeler Kid',
    label: 'YodelerKid',
    pngicon: 'YodelerKid_21x24.png',
    audio: [
      {
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
      }
    ]
  }
]

@Component({
  selector: 'app-tabbed-player',
  templateUrl: './tabbed-player.component.html',
  styleUrls: ['./tabbed-player.component.css']
})
export class TabbedPlayerComponent implements OnInit {
  source: string;
  readyQueueSounds: any = READY_QUEUE_SOUNDS;
  funnySounds: any = FUNNY_SOUNDS;
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

  @ViewChild('audioplayer') player: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
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
