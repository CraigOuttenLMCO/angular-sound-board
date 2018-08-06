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
      color: 'primary',
      pngicon: 'Drum_24x24.png',
      svgicon: 'the-drum'
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
      color: 'primary',
      pngicon: 'Drama_38x24.png',
      svgicon: 'the-drama'
    }, {
      src: 'Fart.mp3',
      label: 'Fart',
      color: 'primary',
      pngicon: 'CraigOutten_28x28.png',
      svgicon: 'craig-outten'
    }, {
      src: 'GoodMorningFolks.mp3',
      label: 'Good Morning Folks',
      color: 'primary',
      pngicon: 'MichaelFrancis_20x24.png',
      svgicon: 'michael-francis'
    }, {
      src: 'Hello.mp3',
      label: 'Hello',
      color: 'primary',
      pngicon: 'OfficePhone_28x24.png',
      svgicon: 'office-phone'
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
      src: 'ShhCraigPicky.mp3',
      label: 'Shh (Craig Picky)',
      color: 'primary',
      pngicon: 'PinkiePie_34x24.png',
      svgicon: 'pinkie-pie'
    }, {
      src: 'ShhKnockKnock.mp3',
      label: 'Shh (Knock Knock)',
      color: 'primary',
      pngicon: 'DrEvil_28x28.png',
      svgicon: 'dr-evil'
    }, {
      src: 'ShhLittle Story.mp3',
      label: 'Shh (Little Story)',
      color: 'primary',
      pngicon: 'DrEvil_28x28.png',
      svgicon: 'dr-evil'
    }, {
      src: 'ShhShort.mp3',
      label: 'Shh (Short)',
      color: 'primary',
      pngicon: 'CraigOutten_28x28.png',
      svgicon: 'craig-outten'
    }, {
      src: 'ShhWholeBag.mp3',
      label: 'Shh (Whole Bag)',
      color: 'primary',
      pngicon: 'DrEvil_28x28.png',
      svgicon: 'dr-evil'
    }, {
      src: 'ShhNotHelping.mp3',
      label: 'Shh Not Helping',
      color: 'primary',
      pngicon: 'PinkiePie_34x24.png',
      svgicon: 'pinkie-pie'
    }, {
      src: 'StandUp.mp3',
      label: 'Stand Up',
      color: 'primary',
      pngicon: 'RobPoole_24x24_2.png',
      svgicon: 'rob-poole'
    }, {
      src: 'YoureWelcome.mp3',
      label: 'You\'re Welcome',
      color: 'primary'
    }]
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
    src: 'Breaker19.mp3',
    label: 'Breaker 1-9',
    color: 'primary',
    pngicon: 'SemiTruck_35x24.png',
    svgicon: 'semi-truck'
  }, {
    src: 'Burn.mp3',
    label: 'Burn (Short)',
    color: 'primary',
    pngicon: 'MichaelKelso_28x28.png',
    svgicon: 'michael-kelso'
  }, {
    src: 'Burn2.mp3',
    label: 'Burn (Long)',
    color: 'primary',
    pngicon: 'MichaelKelso_28x28.png',
    svgicon: 'michael-kelso'
  }, {
    src: 'ByeFelicia.mp3',
    label: 'Bye Felicia',
    color: 'primary',
    pngicon: 'ByeFelicia_28x28.png',
    svgicon: 'bye-felicia'
  }, {
    src: 'CashMeOutside.mp3',
    label: 'Cash Me Outside',
    color: 'primary',
    pngicon: 'CashMeOutside_28x28.png',
    svgicon: 'cashme-outside'
  }, {
    src: 'CelebrateBirthday.mp3',
    label: 'Celebrate Birthday',
    color: 'primary',
    pngicon: 'PinkiePie_34x24.png',
    svgicon: 'pinkie-pie'
  }, {
    src: 'Convoy.mp3',
    label: 'Convoy',
    color: 'primary',
    pngicon: 'SemiTruck_35x24.png',
    svgicon: 'semi-truck'
  }, {
    src: 'Crickets.wav',
    label: 'Crickets',
    color: 'primary',
    pngicon: 'Cricket_38x24.png',
    svgicon: 'the-cricket'
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
    src: 'Gorilla.mp3',
    label: 'Gorilla',
    color: 'primary'
  }, {
    src: 'HiHoNeighbor.mp3',
    label: 'Hi Ho Neighbor',
    color: 'primary',
    pngicon: 'TimTaylor_24x24.png',
    svgicon: 'tim-taylor'
  }, {
    src: 'IDidIt.mp3',
    label: 'I Did It',
    color: 'primary',
    pngicon: 'PinkiePie_34x24.png',
    svgicon: 'pinkie-pie'
  }, {
    src: 'ImNotSellingIt.mp3',
    label: 'I\'m Not Selling It',
    color: 'primary',
    pngicon: 'RobPoole_24x24_2.png',
    svgicon: 'rob-poole'
  }, {
    src: 'ImReady.mp3',
    label: 'I\'m Ready',
    color: 'primary',
    pngicon: 'SpongeBob_17x24.png',
    svgicon: 'sponge-bob'
  }, {
    src: 'InThePot.mp3',
    label: 'In The Pot',
    color: 'primary',
    pngicon: 'KevinMalone_28x28.png',
    svgicon: 'kevin-malone'
  }, {
    src: 'IOwnTheHouse.mp3',
    label: 'I Own The House',
    color: 'primary',
    pngicon: 'RobPoole_24x24_2.png',
    svgicon: 'rob-poole'
  }, {
    src: 'ItsSoFluffy.mp3',
    label: 'It\'s So Fluffy',
    color: 'primary',
    pngicon: 'TheMinion_21x28.png',
    svgicon: 'the-minion'
  }, {
    src: 'WeJumpedOutAWindow.mp3',
    label: 'We Jumped Out A Window',
    color: 'primary',
    pngicon: 'Baymax_22x24.png',
    svgicon: 'the-baymax'
  }, {
    src: 'JustAMoment.mp3',
    label: 'Just A Moment',
    color: 'primary',
    pngicon: 'BillLumbergh_28x28.png',
    svgicon: 'bill-lumbergh'
  }, {
    src: 'JustAMomentFull.mp3',
    label: 'Just A Moment (Full)',
    color: 'primary',
    pngicon: 'BillLumbergh_28x28.png',
    svgicon: 'bill-lumbergh'
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
    color: 'primary',
    pngicon: 'WillFerrell_18x28.png',
    svgicon: 'will-ferrell'
  }, {
    src: 'MyDogsAreBarking.mp3',
    label: 'My Dogs Are Barking',
    color: 'primary',
    pngicon: 'KevinMalone_28x28.png',
    svgicon: 'kevin-malone'
  }, {
    src: 'MyPrecious.mp3',
    label: 'My Precious',
    color: 'primary',
    pngicon: 'Gollum_24x24.png',
    svgicon: 'the-gollum'
  }, {
    src: 'NoGodNo.mp3',
    label: 'No God No',
    color: 'primary',
    pngicon: 'MichaelScott_28x28.png',
    svgicon: 'michael-scott'
  }, {
    src: 'NotTheMama.mp3',
    label: 'Not The Mama',
    color: 'primary',
    pngicon: 'BebeDinosaurio_28x24.png',
    svgicon: 'bebe-dinosaurio'
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
    src: 'Respect.mp3',
    label: 'Respect',
    color: 'primary',
    pngicon: 'FlyingV_31x24.png',
    svgicon: 'flyingv-guitar'
  }, {
    src: 'RunAway.mp3',
    label: 'Run Away',
    color: 'primary',
    pngicon: 'HolyGrail_13x24.png',
    svgicon: 'holy-grail'
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
  }, {
    src: 'SufferinSuccotash.mp3',
    label: 'Sufferin\' Succotash',
    color: 'primary',
    pngicon: 'SylvesterCat_13x24.png',
    svgicon: 'sylvester-cat'
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
    src: 'WantAnMnM.mp3',
    label: 'Want An M&M',
    color: 'primary',
    pngicon: 'KevinMalone_28x28.png',
    svgicon: 'kevin-malone'
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
    color: 'primary',
    pngicon: 'DrPerryCox_18x28.png',
    svgicon: 'drperry-cox'
  }, {
    src: 'Yay.mp3',
    label: 'Yaaaaaaay',
    color: 'primary',
    pngicon: 'Cheering_19x28.png',
    svgicon: 'kids-cheering'
  }, {
    src: 'Yeah.mp3',
    label: 'Yeah',
    color: 'primary'
  }, {
    divider: true
  }, {
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
  }, {
    divider: true
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
