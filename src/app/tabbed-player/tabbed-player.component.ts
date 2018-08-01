import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Input, Output, ViewChild } from '@angular/core';

const READY_QUEUE_SOUNDS = [
  {
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
    src: 'ShhNotHelping.mp3',
    label: 'Shh Not Helping',
    color: 'primary',
    pngicon: 'PinkiePie_34x24.png',
    svgicon: 'pinkie-pie'
  }, {
    src: 'ShhShort.mp3',
    label: 'Shh (Short)',
    color: 'primary',
    pngicon: 'CraigOutten_28x28.png',
    svgicon: 'craig-outten'
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
  }
];

const FUNNY_SOUNDS = [
  {
    name: 'Uncategorized',
    label: 'Uncategorized',
    pngicon: 'CraigOutten_28x28.png',
    audio: [
      {
        src: 'BadCough.mp3',
        label: 'Bad Cough',
        color: 'primary',
        pngicon: 'TheCough_24x24.png',
        svgicon: 'the-cough'
      }, {
        src: 'Breaker19.mp3',
        label: 'Breaker 1-9',
        color: 'primary',
        pngicon: 'SemiTruck_35x24.png',
        svgicon: 'semi-truck'
      }, {
        src: 'ByeFelicia.mp3',
        label: 'Bye Felicia',
        color: 'primary',
        pngicon: 'ByeFelicia_28x28.png',
        svgicon: 'bye-felicia'
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
        color: 'primary',
        pngicon: 'Cricket_38x24.png',
        svgicon: 'the-cricket'
      }, {
        src: 'Gorilla.mp3',
        label: 'Gorilla',
        color: 'primary'
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
        src: 'MyPrecious.mp3',
        label: 'My Precious',
        color: 'primary',
        pngicon: 'Gollum_24x24.png',
        svgicon: 'the-gollum'
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
        src: 'Yay.mp3',
        label: 'Yaaaaaaay',
        color: 'primary',
        pngicon: 'Cheering_19x28.png',
        svgicon: 'kids-cheering'
      }, {
        src: 'Yeah.mp3',
        label: 'Yeah',
        color: 'primary'
      }
    ]
  }, {
    name: 'Animation',
    label: 'Animation',
    pngicon: 'TheMinion_21x28.png',
    audio: [
      {
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
        src: 'ImReady.mp3',
        label: 'I\'m Ready',
        color: 'primary',
        pngicon: 'SpongeBob_17x24.png',
        svgicon: 'sponge-bob'
      }, {
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
      }, {
        src: 'ThatsFunny.mp3',
        label: 'That\'s Funny',
        color: 'primary',
        pngicon: 'TowMater_28x28.png',
        svgicon: 'tow-mater'
      }, {
        src: 'WhatDidYouCallMe.mp3',
        label: 'What Did You Call Me',
        color: 'primary',
        pngicon: 'OakenFrozen_25x24.png',
        svgicon: 'oaken-frozen'
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
        src: 'ActLikeThat.mp3',
        label: 'Act Like That',
        color: 'primary',
        pngicon: 'BugsBunny_15x24.png',
        svgicon: 'bugs-bunny'
      }, {
        src: 'FoghornAdios.mp3',
        label: 'Adios',
        color: 'primary',
        pngicon: 'FoghornLeghorn_16x24.png',
        svgicon: 'forhorn-leghorn'
      }, {
        src: 'BugsAdios.mp3',
        label: 'Adios',
        color: 'primary',
        pngicon: 'BugsBunny_15x24.png',
        svgicon: 'bugs-bunny'
      }, {
        src: 'AsTimeGoesBy.mp3',
        label: 'As Times Goes By',
        color: 'primary',
        pngicon: 'BugsBunny_15x24.png',
        svgicon: 'bugs-bunny'
      }, {
        src: 'AyeAyeSir.mp3',
        label: 'Aye Aye Sir',
        color: 'primary',
        pngicon: 'BugsBunny_15x24.png',
        svgicon: 'bugs-bunny'
      }, {
        src: 'BeingWatched.mp3',
        label: 'Being Watched',
        color: 'primary',
        pngicon: 'BugsBunny_15x24.png',
        svgicon: 'bugs-bunny'
      }, {
        src: 'BigHornyToads.mp3',
        label: 'Big Horny Toads',
        color: 'primary',
        pngicon: 'BugsBunny_15x24.png',
        svgicon: 'bugs-bunny'
      }, {
        src: 'BlastYourHeadOff.mp3',
        label: 'Blast Your Head Off',
        color: 'primary',
        pngicon: 'YosemiteSam_24x24.png',
        svgicon: 'yosemite-sam'
      }, {
        src: 'BlowTheShip.mp3',
        label: 'Blow The Ship',
        color: 'primary',
        pngicon: 'YosemiteSam_24x24.png',
        svgicon: 'yosemite-sam'
      }, {
        src: 'BugsCheer.mp3',
        label: 'Bugs Cheer',
        color: 'primary',
        pngicon: 'BugsBunny_15x24.png',
        svgicon: 'bugs-bunny'
      }, {
        src: 'BushwackinBaracuda.mp3',
        label: 'Bushwackin\' Baracuda',
        color: 'primary',
        pngicon: 'YosemiteSam_24x24.png',
        svgicon: 'yosemite-sam'
      }, {
        src: 'CrazyIdgit.mp3',
        label: 'Crazy Idgit!',
        color: 'primary',
        pngicon: 'YosemiteSam_24x24.png',
        svgicon: 'yosemite-sam'
      }, {
        src: 'DoinItAllWrong.mp3',
        label: 'Doin\' It All Wrong',
        color: 'primary',
        pngicon: 'FoghornLeghorn_16x24.png',
        svgicon: 'forhorn-leghorn'
      }, {
        src: 'GetAgoing.mp3',
        label: 'Get Agoing',
        color: 'primary',
        pngicon: 'YosemiteSam_24x24.png',
        svgicon: 'yosemite-sam'
      }, {
        src: 'GitAlongLittleDogie.mp3',
        label: 'Git Along Little Dogie',
        color: 'primary',
        pngicon: 'YosemiteSam_24x24.png',
        svgicon: 'yosemite-sam'
      }, {
        src: 'GoAwayBoy.mp3',
        label: 'Go Away Boy',
        color: 'primary',
        pngicon: 'FoghornLeghorn_16x24.png',
        svgicon: 'forhorn-leghorn'
      }, {
        src: 'GoAwayBoy2.mp3',
        label: 'Go Away Boy',
        color: 'primary',
        pngicon: 'FoghornLeghorn_16x24.png',
        svgicon: 'forhorn-leghorn'
      }, {
        src: 'GoodbyeNow.mp3',
        label: 'Goodbye Now',
        color: 'primary',
        pngicon: 'BugsBunny_15x24.png',
        svgicon: 'bugs-bunny'
      }, {
        src: 'GoodnightVarmint.mp3',
        label: 'Goodnight Varmint',
        color: 'primary',
        pngicon: 'YosemiteSam_24x24.png',
        svgicon: 'yosemite-sam'
      }, {
        src: 'HesABigOne.mp3',
        label: 'He\'s A Big One',
        color: 'primary',
        pngicon: 'BugsBunny_15x24.png',
        svgicon: 'bugs-bunny'
      }, {
        src: 'HitTheRoad.mp3',
        label: 'Hit The Road',
        color: 'primary',
        pngicon: 'BugsBunny_15x24.png',
        svgicon: 'bugs-bunny'
      }, {
        src: 'HomeOnTheRange.mp3',
        label: 'Home On The Range',
        color: 'primary',
        pngicon: 'BugsBunny_15x24.png',
        svgicon: 'bugs-bunny'
      }, {
        src: 'Imbesile.mp3',
        label: 'Imbesile',
        color: 'primary',
        pngicon: 'BugsBunny_15x24.png',
        svgicon: 'bugs-bunny'
      }, {
        src: 'ImGoingToTell.mp3',
        label: 'I\'m Going To Tell',
        color: 'primary',
        pngicon: 'BugsBunny_15x24.png',
        svgicon: 'bugs-bunny'
      }, {
        src: 'ItsADeal.mp3',
        label: 'It\' A Deal',
        color: 'primary',
        pngicon: 'YosemiteSam_24x24.png',
        svgicon: 'yosemite-sam'
      }, {
        src: 'IWantYouBaby.mp3',
        label: 'I Want You Baby',
        color: 'primary',
        pngicon: 'YosemiteSam_24x24.png',
        svgicon: 'yosemite-sam'
      }, {
        src: 'KingOfTheRoad.mp3',
        label: 'King Of The Road',
        color: 'primary',
        pngicon: 'FoghornLeghorn_16x24.png',
        svgicon: 'forhorn-leghorn'
      }, {
        src: 'LayDownYourArms.mp3',
        label: 'Lay Down Your Arms',
        color: 'primary',
        pngicon: 'YosemiteSam_24x24.png',
        svgicon: 'yosemite-sam'
      }, {
        src: 'LifeOfTheParty.mp3',
        label: 'Life Of The Party',
        color: 'primary',
        pngicon: 'BugsBunny_15x24.png',
        svgicon: 'bugs-bunny'
      }, {
        src: 'LittlePuny.mp3',
        label: 'Little Puny',
        color: 'primary',
        pngicon: 'FoghornLeghorn_16x24.png',
        svgicon: 'forhorn-leghorn'
      }, {
        src: 'MansJob.mp3',
        label: 'Man\'s Job',
        color: 'primary',
        pngicon: 'FoghornLeghorn_16x24.png',
        svgicon: 'forhorn-leghorn'
      }, {
        src: 'MoreConfusion.mp3',
        label: 'More Confusion',
        color: 'primary',
        pngicon: 'FoghornLeghorn_16x24.png',
        svgicon: 'forhorn-leghorn'
      }, {
        src: 'NiceGirl.mp3',
        label: 'Nice Girl',
        color: 'primary',
        pngicon: 'FoghornLeghorn_16x24.png',
        svgicon: 'forhorn-leghorn'
      }, {
        src: 'NiceKid.mp3',
        label: 'Nice Kid',
        color: 'primary',
        pngicon: 'FoghornLeghorn_16x24.png',
        svgicon: 'forhorn-leghorn'
      }, {
        src: 'NoGetUpAndGo.mp3',
        label: 'No Get Up And Go',
        color: 'primary',
        pngicon: 'FoghornLeghorn_16x24.png',
        svgicon: 'forhorn-leghorn'
      }, {
        src: 'OffnMyPremises.mp3',
        label: 'Off\'n My Premises',
        color: 'primary',
        pngicon: 'YosemiteSam_24x24.png',
        svgicon: 'yosemite-sam'
      }, {
        src: 'PutPutPut.mp3',
        label: 'Put Put Put',
        color: 'primary',
        pngicon: 'FoghornLeghorn_16x24.png',
        svgicon: 'forhorn-leghorn'
      }, {
        src: 'RightOnTime.mp3',
        label: 'Right On Time',
        color: 'primary',
        pngicon: 'BugsBunny_15x24.png',
        svgicon: 'bugs-bunny'
      }, {
        src: 'SayYourPrayers.mp3',
        label: 'Say Your Prayers',
        color: 'primary',
        pngicon: 'YosemiteSam_24x24.png',
        svgicon: 'yosemite-sam'
      }, {
        src: 'SharpAsABowlinBall.mp3',
        label: 'Sharp As A Bowlin\' Ball',
        color: 'primary',
        pngicon: 'FoghornLeghorn_16x24.png',
        svgicon: 'forhorn-leghorn'
      }, {
        src: 'ShowLittleEgghead.mp3',
        label: 'Show Little Egghead',
        color: 'primary',
        pngicon: 'FoghornLeghorn_16x24.png',
        svgicon: 'forhorn-leghorn'
      }, {
        src: 'ShutUp.mp3',
        label: 'Shut Up!',
        color: 'primary',
        pngicon: 'YosemiteSam_24x24.png',
        svgicon: 'yosemite-sam'
      }, {
        src: 'ShutUpBangBang.mp3',
        label: 'Shut Up! (Bang Bang)',
        color: 'primary',
        pngicon: 'YosemiteSam_24x24.png',
        svgicon: 'yosemite-sam'
      }, {
        src: 'SillyQuestion.mp3',
        label: 'Silly Question',
        color: 'primary',
        pngicon: 'BugsBunny_15x24.png',
        svgicon: 'bugs-bunny'
      }, {
        src: 'SoLongScrewy.mp3',
        label: 'So Long Screwy',
        color: 'primary',
        pngicon: 'BugsBunny_15x24.png',
        svgicon: 'bugs-bunny'
      }, {
        src: 'StrongAsAnOx.mp3',
        label: 'Strong As An Ox',
        color: 'primary',
        pngicon: 'FoghornLeghorn_16x24.png',
        svgicon: 'forhorn-leghorn'
      }, {
        src: 'SufferinSuccotash.mp3',
        label: 'Sufferin\' Succotash',
        color: 'primary',
        pngicon: 'SylvesterCat_13x24.png',
        svgicon: 'sylvester-cat'
      }, {
        src: 'TakeYouApart.mp3',
        label: 'Take You Apart',
        color: 'primary',
        pngicon: 'BugsBunny_15x24.png',
        svgicon: 'bugs-bunny'
      }, {
        src: 'ThatsAllFolks.mp3',
        label: 'Thats All Folks',
        color: 'primary',
        pngicon: 'Porky_24x24.png',
        svgicon: 'porky-pig'
      }, {
        src: 'ThatWasAJokeGirl.mp3',
        label: 'That Was A Joke Girl',
        color: 'primary',
        pngicon: 'FoghornLeghorn_16x24.png',
        svgicon: 'forhorn-leghorn'
      }, {
        src: 'UnwarrantedAttack.mp3',
        label: 'Unwarranted Attack',
        color: 'primary',
        pngicon: 'FoghornLeghorn_16x24.png',
        svgicon: 'forhorn-leghorn'
      }, {
        src: 'WhatsGoinOnHere.mp3',
        label: 'What\'s Goin\' On Here',
        color: 'primary',
        pngicon: 'FoghornLeghorn_16x24.png',
        svgicon: 'forhorn-leghorn'
      }, {
        src: 'WhatsUpDoc.mp3',
        label: 'What\'s Up Doc',
        color: 'primary',
        pngicon: 'BugsBunny_15x24.png',
        svgicon: 'bugs-bunny'
      }, {
        src: 'WheredYouGo.mp3',
        label: 'Where\'d You Go?',
        color: 'primary',
        pngicon: 'BugsBunny_15x24.png',
        svgicon: 'bugs-bunny'
      }, {
        src: 'Woe.mp3',
        label: 'Woe!',
        color: 'primary',
        pngicon: 'YosemiteSam_24x24.png',
        svgicon: 'yosemite-sam'
      }, {
        src: 'WonderfulIdea.mp3',
        label: 'Wonderful Idea',
        color: 'primary',
        pngicon: 'BugsBunny_15x24.png',
        svgicon: 'bugs-bunny'
      }, {
        src: 'YaFightsMyWay.mp3',
        label: 'Ya Fights My Way',
        color: 'primary',
        pngicon: 'YosemiteSam_24x24.png',
        svgicon: 'yosemite-sam'
      }, {
        src: 'YaGottaGo.mp3',
        label: 'Ya Gotta Go',
        color: 'primary',
        pngicon: 'FoghornLeghorn_16x24.png',
        svgicon: 'forhorn-leghorn'
      }, {
        src: 'YaKillingMe.mp3',
        label: 'Ya Killing Me',
        color: 'primary',
        pngicon: 'BugsBunny_15x24.png',
        svgicon: 'bugs-bunny'
      }, {
        src: 'YankeeAbout.mp3',
        label: 'Yankee About',
        color: 'primary',
        pngicon: 'YosemiteSam_24x24.png',
        svgicon: 'yosemite-sam'
      }, {
        src: 'YaWayOff.mp3',
        label: 'Ya Way Off',
        color: 'primary',
        pngicon: 'FoghornLeghorn_16x24.png',
        svgicon: 'forhorn-leghorn'
      }, {
        src: 'YouIdgit.mp3',
        label: 'You Idgit!',
        color: 'primary',
        pngicon: 'YosemiteSam_24x24.png',
        svgicon: 'yosemite-sam'
      }, {
        src: 'YoullBeSorry.mp3',
        label: 'You\'ll Be Sorry!',
        color: 'primary',
        pngicon: 'BugsBunny_15x24.png',
        svgicon: 'bugs-bunny'
      }, {
        src: 'YourTonguesFlappin.mp3',
        label: 'Your Tongue\'s Flappin\'',
        color: 'primary',
        pngicon: 'FoghornLeghorn_16x24.png',
        svgicon: 'forhorn-leghorn'
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
    name: 'TV Shows',
    label: 'TVShows',
    pngicon: 'MichaelScott_28x28.png',
    audio: [
      {
        src: 'TimAllenAeuhhh.mp3',
        label: 'Aeuhhh',
        color: 'primary',
        pngicon: 'TimTaylor_24x24.png',
        svgicon: 'tim-taylor'
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
        src: 'StinkyBlanketBurn.mp3',
        label: 'Stinky Blanket Burn',
        color: 'primary',
        pngicon: 'MichaelKelso_28x28.png',
        svgicon: 'michael-kelso'
      }, {
        src: 'TripleDeckerBurn.mp3',
        label: 'Triple Decker Burn',
        color: 'primary',
        pngicon: 'MichaelKelso_28x28.png',
        svgicon: 'michael-kelso'
      }, {
        src: 'WantAnMnM.mp3',
        label: 'Want An M&M',
        color: 'primary',
        pngicon: 'KevinMalone_28x28.png',
        svgicon: 'kevin-malone'
      }, {
        src: 'WrongWrongWrong.mp3',
        label: 'Wrong Wrong Wrong',
        color: 'primary',
        pngicon: 'DrPerryCox_18x28.png',
        svgicon: 'drperry-cox'
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
