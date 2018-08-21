
export enum AudioCategory {
  Animation = "Animation",
  Heather = "Heather",
  LooneyTunes = "Looney Tunes",
  MyLittlePony = "My Little Pony",
  Ready = "Ready",
  TVShows = "TV Shows",
  Uncategorized = "Uncategorized",
  Voices = "Voices",
  YodelerKid = "Yodeler Kid"
};

export interface AudioEntry {
  label: string;
  category: AudioCategory;
  source: string;
  color?: string; // this should default to 'primary'
  icon?: string;
};

export const AUDIO_ENTRIES:AudioEntry[] = [
  /* A */
  {
    label: 'Aeuhhh',
    category: AudioCategory.TVShows,
    source: 'TimAllenAeuhhh.mp3',
    icon: 'TimTaylor_24x24.png'
  },

  /* B */

  {
    label: 'Ba Dum Tss',
    category: AudioCategory.Ready,
    source: 'BaDumTss.mp3',
    icon: 'Drum_24x24.png'
  }, {
    label: 'Bad Cough',
    category: AudioCategory.Uncategorized,
    source: 'BadCough.mp3',
    icon: 'TheCough_24x24.png'
  }, {
    label: 'Bathroom',
    category: AudioCategory.Animation,
    source: 'Bathroom.mp3',
    icon: 'EricCartman_26x24.png'
  }, {
    label: 'Big Summer Blowout',
    category: AudioCategory.Animation,
    source: 'BigSummerBlowout.mp3',
    icon: 'OakenFrozen_25x24.png'
  }, {
    label: 'Bless You',
    category: AudioCategory.Ready,
    source: 'BlessYou.mp3',
    icon: 'TheSneeze_24x24.png'
  }, {
    label: 'Boogy To The Woogy',
    category: AudioCategory.Uncategorized,
    source: 'BoogyToTheWoogy.mp3',
    icon: 'New_28x26.png'
  }, {
    label: 'Bottoms Up',
    category: AudioCategory.Ready,
    source: 'BottomsUp.mp3',
    icon: 'SodaCan3_18x24.png'
  }, {
    label: 'Breaker 1-9',
    category: AudioCategory.Uncategorized,
    source: 'Breaker19.mp3',
    icon: 'SemiTruck_35x24.png'
  }, {
    label: 'Burn (Short)',
    category: AudioCategory.TVShows,
    source: 'Burn.mp3',
    icon: 'MichaelKelso_28x28.png'
  }, {
    label: 'Burn (Long)',
    category: AudioCategory.TVShows,
    source: 'Burn2.mp3',
    icon: 'MichaelKelso_28x28.png'
  }, {
    label: 'Bye Felicia',
    category: AudioCategory.Uncategorized,
    source: 'ByeFelicia.mp3',
    icon: 'ByeFelicia_28x28.png'
  },
  
  /* C */
  
  {
    label: 'Cash Me Outside',
    category: AudioCategory.Uncategorized,
    source: 'CashMeOutside.mp3',
    icon: 'CashMeOutside_28x28.png'
  }, {
    label: 'Celebrate Birthday',
    category: AudioCategory.MyLittlePony,
    source: 'CelebrateBirthday.mp3',
    icon: 'PinkiePie_34x24.png'
  }, {
    label: 'Convoy',
    category: AudioCategory.Uncategorized,
    source: 'Convoy.mp3',
    icon: 'SemiTruck_35x24.png'
  }, {
    label: 'Crickets',
    category: AudioCategory.Uncategorized,
    source: 'Crickets.mp3',
    icon: 'Cricket_38x24.png'
  },
  
  /* D */
  
  {
    label: 'Dixie Horn',
    category: AudioCategory.Uncategorized,
    source: 'DixieHorn.mp3',
    icon: 'FXWhiteIcon_20x20.png'
  }, {
    label: 'Drama',
    category: AudioCategory.Ready,
    source: 'Drama.mp3',
    icon: 'Drama_38x24.png'
  },

  /* E */
  
  {
    label: 'Communication',
    category: AudioCategory.Heather,
    source: 'EffectiveCommunication.mp3',
    icon: 'HeatherFleischmann2_24x42.png'
  }, 

  /* F */
  
  {
    label: 'Fangirl Squeal',
    category: AudioCategory.MyLittlePony,
    source: 'FangirlSqueal.mp3',
    icon: 'PinkiePie_34x24.png'
  }, {
    label: 'Fangirl Squeal (Short)',
    category: AudioCategory.MyLittlePony,
    source: 'FangirlSquealShort.mp3',
    icon: 'PinkiePie_34x24.png'
  }, {
    label: 'Fart',
    category: AudioCategory.Ready,
    source: 'Fart.mp3',
    icon: 'CraigOutten_28x28.png'
  }, {
    label: 'Fart (Everyday)',
    category: AudioCategory.Ready,
    source: 'EverydayFart.mp3',
    icon: 'CraigOutten_28x28.png'
  },
  
  /* G */
  
  {
    label: 'Gasp',
    category: AudioCategory.MyLittlePony,
    source: 'Gasp.mp3',
    icon: 'PinkiePie_34x24.png'
  },  {
    label: 'Gasp (Group)',
    category: AudioCategory.MyLittlePony,
    source: 'GaspGroup.mp3',
    icon: 'PinkiePie_34x24.png'
  }, {
    label: 'Glass Breaking',
    category: AudioCategory.Uncategorized,
    source: 'GlassBreaking.mp3',
    icon: 'FXWhiteIcon_20x20.png'
  }, {
    label: 'Good Morning Folks',
    category: AudioCategory.Ready,
    source: 'GoodMorningFolks.mp3',
    icon: 'MichaelFrancis_20x24.png'
  }, {
    label: 'Gonna DoO',
    category: AudioCategory.YodelerKid,
    source: 'GonnaDoO.mp3',
    icon: 'YodelerKid_21x24.png'
  }, {
    label: 'Gorilla',
    category: AudioCategory.Uncategorized,
    source: 'Gorilla.mp3',
  }, {
    label: 'Graduated',
    category: AudioCategory.Animation,
    source: 'Graduated.mp3',
    icon: 'HeatherFleischmann2_24x42.png'
  }, {
    label: 'Gunfire',
    category: AudioCategory.Uncategorized,
    source: 'Gunfire.mp3',
    icon: 'FXWhiteIcon_20x20.png'
  },
  
  /* H */
  
  {
    label: 'Hello',
    category: AudioCategory.Ready,
    source: 'Hello.mp3',
    icon: 'OfficePhone_28x24.png'
  }, {
    label: 'Hi Ho Neighbor',
    category: AudioCategory.TVShows,
    source: 'HiHoNeighbor.mp3',
    icon: 'TimTaylor_24x24.png'
  }, {
    label: 'Hot Dog Friday',
    category: AudioCategory.Uncategorized,
    source: 'ThankGodItsHotDogFriday.mp3',
    icon: 'HotDogFriday_18x26.png'
  }, {
    label: 'Hot Dog Friday Rocks',
    category: AudioCategory.Uncategorized,
    source: 'HotDogFridayRocks.mp3',
    icon: 'HotDogFriday_18x26.png'
  },
  
  /* I */
  
  {
    label: 'I Am Great',
    category: AudioCategory.Heather,
    source: 'HeatherIsGreat.mp3',
    icon: 'HeatherFleischmann2_24x42.png'
  }, {
    label: 'I Am Wonder Mike',
    category: AudioCategory.Uncategorized,
    source: 'IAmWonderMike.mp3',
    icon: 'New_28x26.png'
  }, {
    label: 'I Did It',
    category: AudioCategory.MyLittlePony,
    source: 'IDidIt.mp3',
    icon: 'PinkiePie_34x24.png'
  }, {
    label: 'I Have Businesses',
    category: AudioCategory.Heather,
    source: 'Businesses.mp3',
    icon: 'HeatherFleischmann2_24x42.png'
  }, {
    label: 'I Have Connections',
    category: AudioCategory.Heather,
    source: 'Connections.mp3',
    icon: 'HeatherFleischmann2_24x42.png'
  }, {
    label: 'I Have Knowledge',
    category: AudioCategory.Heather,
    source: 'Knowledge.mp3',
    color: 'primary',
    icon: 'HeatherFleischmann2_24x42.png'
  }, {
    label: 'I Own The House',
    category: AudioCategory.Uncategorized,
    source: 'IOwnTheHouse.mp3',
    icon: 'RobPoole_24x24_2.png'
  }, {
    label: 'I Said Hip Hop',
    category: AudioCategory.Uncategorized,
    source: 'ISaidHipHop.mp3',
    icon: 'New_28x26.png'
  }, {
    label: 'I Was Great',
    category: AudioCategory.Heather,
    source: 'IWasGreat.mp3',
    icon: 'HeatherFleischmann2_24x42.png'
  }, {
    label: 'I\'m Not Selling It',
    category: AudioCategory.Uncategorized,
    source: 'ImNotSellingIt.mp3',
    icon: 'RobPoole_24x24_2.png'
  }, {
    label: 'I\'m Ready',
    category: AudioCategory.Animation,
    source: 'ImReady.mp3',
    icon: 'SpongeBob_17x24.png'
  }, {
    label: 'In The Pot',
    category: AudioCategory.TVShows,
    source: 'InThePot.mp3',
    icon: 'KevinMalone_28x28.png'
  }, {
    label: 'Internship Oriented',
    category: AudioCategory.Heather,
    source: 'InternshipOriented.mp3',
    icon: 'HeatherFleischmann2_24x42.png'
  }, {
    label: 'It\'s So Fluffy',
    category: AudioCategory.Animation,
    source: 'ItsSoFluffy.mp3',
    icon: 'TheMinion_21x28.png'
  },
  
  /* J */
  
  {
    label: 'Just A Moment',
    category: AudioCategory.Uncategorized,
    source: 'JustAMoment.mp3',
    icon: 'BillLumbergh_28x28.png'
  }, {
    label: 'Just A Moment (Full)',
    category: AudioCategory.Uncategorized,
    source: 'JustAMomentFull.mp3',
    icon: 'BillLumbergh_28x28.png'
  },
  
  /* K */

  /* L */
  {
    label: 'Light Bulb',
    category: AudioCategory.Animation,
    source: 'LightBulb.mp3',
    icon: 'TheMinion_21x28.png'
  }, {
    label: 'Loud Noises',
    category: AudioCategory.TVShows,
    source: 'LoudNoises.mp3',
    icon: 'MichaelScott_28x28.png'
  }, 

  /* M */

  {
    label: 'Make It Stop',
    category: AudioCategory.MyLittlePony,
    source: 'MakeItStop.mp3',
    icon: 'PinkiePie_34x24.png'
  }, {
    label: 'Meatloaf',
    category: AudioCategory.TVShows,
    source: 'Meatloaf.mp3',
    icon: 'WillFerrell_18x28.png'
  }, {
    label: 'Motorcycle',
    category: AudioCategory.Ready,
    source: 'Motorcycle.mp3',
    icon: 'HarleyDavidson2_31x24.png'
  }, {
    label: 'My Dogs Are Barking',
    category: AudioCategory.TVShows,
    source: 'MyDogsAreBarking.mp3',
    icon: 'KevinMalone_28x28.png'
  }, {
    label: 'My Precious',
    category: AudioCategory.Uncategorized,
    source: 'MyPrecious.mp3',
    icon: 'Gollum_24x24.png'
  },
  
  /* N */
  
  {
    label: 'No God No',
    category: AudioCategory.TVShows,
    source: 'NoGodNo.mp3',
    icon: 'MichaelScott_28x28.png'
  }, {
    label: 'Nope',
    category: AudioCategory.Ready,
    source: 'Nope.mp3',
    icon: 'ThumbsDown_26x26.png'
  }, {
    label: 'Not The Mama',
    category: AudioCategory.TVShows,
    source: 'NotTheMama.mp3',
    icon: 'BebeDinosaurio_28x24.png'
  },

  /* O */
  {
    label: 'Oh Hell No',
    category: AudioCategory.Uncategorized,
    source: 'OhHellNo.mp3',
    icon: 'CrystalMiller2_19x24.png'
  }, {
    label: 'Oh Lord',
    category: AudioCategory.YodelerKid,
    source: 'OhLord.mp3',
    icon: 'YodelerKid_21x24.png'
  }, {
    label: 'Oh Woah Woah',
    category: AudioCategory.YodelerKid,
    source: 'OhWoahWoah.mp3',
    icon: 'YodelerKid_21x24.png'
  }, {
    label: 'Oh WahAhAhAh',
    category: AudioCategory.Uncategorized,
    source: 'OhWahAhAhAh.mp3'
  }, {
    label: 'Ouch',
    category: AudioCategory.MyLittlePony,
    source: 'Ouch.mp3',
    icon: 'PinkiePie_34x24.png'
  },

  /* P */
  {
    label: 'Party Started',
    category: AudioCategory.MyLittlePony,
    source: 'PartyStarted.mp3',
    icon: 'PinkiePie_34x24.png'
  },

  /* Q */

  /* R */

  {
    label: 'Respect',
    category: AudioCategory.Uncategorized,
    source: 'Respect.mp3',
    icon: 'FlyingV_31x24.png'
  }, {
    label: 'Run Away',
    category: AudioCategory.Uncategorized,
    source: 'RunAway.mp3',
    icon: 'HolyGrail_13x24.png'
  },

  /* S */

  {
    label: 'Say What',
    category: AudioCategory.Uncategorized,
    source: 'SayWhat.mp3'
  }, {
    label: 'Screaming Goat',
    category: AudioCategory.Uncategorized,
    source: 'ScreamingGoat.mp3',
    icon: 'Goat_24x24.png'
  }, {
    label: 'Shh',
    category: AudioCategory.Ready,
    source: 'Shh.mp3',
    icon: 'PinkiePie_34x24.png'
  }, {
    label: 'Shh (Craig)',
    category: AudioCategory.Ready,
    source: 'ShhCraig.mp3',
    icon: 'PinkiePie_34x24.png'
  }, {
    label: 'Shh (Craig Picky)',
    category: AudioCategory.Ready,
    source: 'ShhCraigPicky.mp3',
    icon: 'PinkiePie_34x24.png'
  }, {
    label: 'Shh (Knock Knock)',
    category: AudioCategory.Ready,
    source: 'ShhKnockKnock.mp3',
    icon: 'DrEvil_28x28.png'
  }, {
    label: 'Shh (Little Story)',
    category: AudioCategory.Ready,
    source: 'ShhLittleStory.mp3',
    icon: 'DrEvil_28x28.png'
  }, {
    label: 'Shh (Short)',
    category: AudioCategory.Ready,
    source: 'ShhShort.mp3',
    icon: 'CraigOutten_28x28.png'
  }, {
    label: 'Shh (Whole Bag)',
    category: AudioCategory.Ready,
    source: 'ShhWholeBag.mp3',
    icon: 'DrEvil_28x28.png'
  }, {
    label: 'Shh (Not Helping)',
    category: AudioCategory.Ready,
    source: 'ShhNotHelping.mp3',
    icon: 'PinkiePie_34x24.png'
  }, {
    label: 'Slide Whistle',
    category: AudioCategory.Ready,
    source: 'SlideWhistle.mp3',
    icon: 'FXWhiteIcon_20x20.png'
  }, {
    label: 'Snoring',
    category: AudioCategory.Ready,
    source: 'Snoring.mp3',
    icon: 'FXWhiteIcon_20x20.png'
  }, {
    label: 'Stand Up',
    category: AudioCategory.Ready,
    source: 'StandUp.mp3',
    icon: 'RobPoole_24x24_2.png'
  }, {
    label: 'Stevenson Sold Me',
    category: AudioCategory.Heather,
    source: 'StevensonSoldMe.mp3',
    icon: 'HeatherFleischmann2_24x42.png'
  }, {
    label: 'Stinky Blanket Burn',
    category: AudioCategory.TVShows,
    source: 'StinkyBlanketBurn.mp3',
    icon: 'MichaelKelso_28x28.png'
  }, {
    label: 'Stutter',
    category: AudioCategory.Heather,
    source: 'Stutter.mp3',
    icon: 'HeatherFleischmann2_24x42.png'
  },
  
  /* T */

  , {
    label: 'That\'s Funny',
    category: AudioCategory.Animation,
    source: 'ThatsFunny.mp3',
    icon: 'TowMater_28x28.png'
  }, {
    label: 'Triple Decker Burn',
    category: AudioCategory.TVShows,
    source: 'TripleDeckerBurn.mp3',
    icon: 'MichaelKelso_28x28.png'
  },

  /* U */
  
  /* V */

  {
    label: 'Verizon Ringtone 1',
    category: AudioCategory.Uncategorized,
    source: 'VerizonRingtone1.mp3',
    icon: 'CellPhone_20x24.png'
  },

  /* W */
  
  {
    label: 'Walmart Yodeling Kid',
    category: AudioCategory.YodelerKid,
    source: 'WalmartYodelingKid.mp3',
    icon: 'YodelerKid_21x24.png'
  }, {
    label: 'Want An M&M?',
    category: AudioCategory.TVShows,
    source: 'WantAnMnM.mp3',
    icon: 'KevinMalone_28x28.png'
  }, {
    label: 'We Jumped Out A Window',
    category: AudioCategory.Animation,
    source: 'WeJumpedOutAWindow.mp3',
    icon: 'Baymax_22x24.png'
  }, {
    label: 'What!',
    category: AudioCategory.Uncategorized,
    source: 'What.mp3'
  }, {
    label: 'Welcome To Arbutus (Female)',
    category: AudioCategory.Uncategorized,
    source: 'WelcomeToArbutus-Daisy-39404548.mp3',
    icon: 'RobPoole_24x24_2.png'
  }, {
    label: 'Welcome To Arbutus (Male)',
    category: AudioCategory.Uncategorized,
    source: 'WelcomeToArbutus-John-39404677.mp3',
    icon: 'RobPoole_24x24_2.png'
  }, {
    label: 'What Did You Call Me',
    category: AudioCategory.Animation,
    source: 'WhatDidYouCallMe.mp3',
    icon: 'OakenFrozen_25x24.png'
  }, {
    label: 'What Did You Say',
    category: AudioCategory.Uncategorized,
    source: 'WhatDidYouSay.mp3',
    icon: 'FlyingV_31x24.png'
  }, {
    label: 'Wrong',
    category: AudioCategory.Uncategorized,
    source: 'Wrong.mp3'
  }, {
    label: 'Wrong Wrong Wrong',
    category: AudioCategory.TVShows,
    source: 'WrongWrongWrong.mp3',
    icon: 'DrPerryCox_18x28.png'
  },

  /* X */
  
  /* Y */
  
  {
    label: 'Yaaaaaaay',
    category: AudioCategory.Uncategorized,
    source: 'Yay.mp3',
    icon: 'Cheering_19x28.png'
  }, {
    label: 'Yeah',
    category: AudioCategory.Uncategorized,
    source: 'Yeah.mp3'
  }, {
    label: 'You\'re Welcome',
    category: AudioCategory.Ready,
    source: 'YoureWelcome.mp3'
  },

  /* Z */


  /* Sort */
  {
    source: 'ActLikeThat.mp3',
    label: 'Act Like That',
    color: 'primary',
    icon: 'BugsBunny_15x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'FoghornAdios.mp3',
    label: 'Adios',
    color: 'primary',
    icon: 'FoghornLeghorn_16x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'BugsAdios.mp3',
    label: 'Adios',
    color: 'primary',
    icon: 'BugsBunny_15x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'AsTimeGoesBy.mp3',
    label: 'As Times Goes By',
    color: 'primary',
    icon: 'BugsBunny_15x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'AyeAyeSir.mp3',
    label: 'Aye Aye Sir',
    color: 'primary',
    icon: 'BugsBunny_15x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'BeingWatched.mp3',
    label: 'Being Watched',
    color: 'primary',
    icon: 'BugsBunny_15x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'BigHornyToads.mp3',
    label: 'Big Horny Toads',
    color: 'primary',
    icon: 'BugsBunny_15x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'BlastYourHeadOff.mp3',
    label: 'Blast Your Head Off',
    color: 'primary',
    icon: 'YosemiteSam_24x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'BlowTheShip.mp3',
    label: 'Blow The Ship',
    color: 'primary',
    icon: 'YosemiteSam_24x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'BugsCheer.mp3',
    label: 'Bugs Cheer',
    color: 'primary',
    icon: 'BugsBunny_15x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'BushwackinBaracuda.mp3',
    label: 'Bushwackin\' Baracuda',
    color: 'primary',
    icon: 'YosemiteSam_24x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'CrazyIdgit.mp3',
    label: 'Crazy Idgit!',
    color: 'primary',
    icon: 'YosemiteSam_24x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'DoinItAllWrong.mp3',
    label: 'Doin\' It All Wrong',
    color: 'primary',
    icon: 'FoghornLeghorn_16x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'GetAgoing.mp3',
    label: 'Get Agoing',
    color: 'primary',
    icon: 'YosemiteSam_24x24.png',
    category: AudioCategory.LooneyTunes
  }, {
    source: 'GitAlongLittleDogie.mp3',
    label: 'Git Along Little Dogie',
    color: 'primary',
    icon: 'YosemiteSam_24x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'GoAwayBoy.mp3',
    label: 'Go Away Boy',
    color: 'primary',
    icon: 'FoghornLeghorn_16x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'GoAwayBoy2.mp3',
    label: 'Go Away Boy',
    color: 'primary',
    icon: 'FoghornLeghorn_16x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'GoodbyeNow.mp3',
    label: 'Goodbye Now',
    color: 'primary',
    icon: 'BugsBunny_15x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'GoodnightVarmint.mp3',
    label: 'Goodnight Varmint',
    color: 'primary',
    icon: 'YosemiteSam_24x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'HesABigOne.mp3',
    label: 'He\'s A Big One',
    color: 'primary',
    icon: 'BugsBunny_15x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'HitTheRoad.mp3',
    label: 'Hit The Road',
    color: 'primary',
    icon: 'BugsBunny_15x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'HomeOnTheRange.mp3',
    label: 'Home On The Range',
    color: 'primary',
    icon: 'BugsBunny_15x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'Imbesile.mp3',
    label: 'Imbesile',
    color: 'primary',
    icon: 'BugsBunny_15x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'ImGoingToTell.mp3',
    label: 'I\'m Going To Tell',
    color: 'primary',
    icon: 'BugsBunny_15x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'ItsADeal.mp3',
    label: 'It\' A Deal',
    color: 'primary',
    icon: 'YosemiteSam_24x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'IWantYouBaby.mp3',
    label: 'I Want You Baby',
    color: 'primary',
    icon: 'YosemiteSam_24x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'KingOfTheRoad.mp3',
    label: 'King Of The Road',
    color: 'primary',
    icon: 'FoghornLeghorn_16x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'LayDownYourArms.mp3',
    label: 'Lay Down Your Arms',
    color: 'primary',
    icon: 'YosemiteSam_24x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'LifeOfTheParty.mp3',
    label: 'Life Of The Party',
    color: 'primary',
    icon: 'BugsBunny_15x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'LittlePuny.mp3',
    label: 'Little Puny',
    color: 'primary',
    icon: 'FoghornLeghorn_16x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'MansJob.mp3',
    label: 'Man\'s Job',
    color: 'primary',
    icon: 'FoghornLeghorn_16x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'MoreConfusion.mp3',
    label: 'More Confusion',
    color: 'primary',
    icon: 'FoghornLeghorn_16x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'NiceGirl.mp3',
    label: 'Nice Girl',
    color: 'primary',
    icon: 'FoghornLeghorn_16x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'NiceKid.mp3',
    label: 'Nice Kid',
    color: 'primary',
    icon: 'FoghornLeghorn_16x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'NoGetUpAndGo.mp3',
    label: 'No Get Up And Go',
    color: 'primary',
    icon: 'FoghornLeghorn_16x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'OffnMyPremises.mp3',
    label: 'Off\'n My Premises',
    color: 'primary',
    icon: 'YosemiteSam_24x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'PutPutPut.mp3',
    label: 'Put Put Put',
    color: 'primary',
    icon: 'FoghornLeghorn_16x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'RightOnTime.mp3',
    label: 'Right On Time',
    color: 'primary',
    icon: 'BugsBunny_15x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'SayYourPrayers.mp3',
    label: 'Say Your Prayers',
    color: 'primary',
    icon: 'YosemiteSam_24x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'SharpAsABowlinBall.mp3',
    label: 'Sharp As A Bowlin\' Ball',
    color: 'primary',
    icon: 'FoghornLeghorn_16x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'ShowLittleEgghead.mp3',
    label: 'Show Little Egghead',
    color: 'primary',
    icon: 'FoghornLeghorn_16x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'ShutUp.mp3',
    label: 'Shut Up!',
    color: 'primary',
    icon: 'YosemiteSam_24x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'ShutUpBangBang.mp3',
    label: 'Shut Up! (Bang Bang)',
    color: 'primary',
    icon: 'YosemiteSam_24x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'SillyQuestion.mp3',
    label: 'Silly Question',
    color: 'primary',
    icon: 'BugsBunny_15x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'SoLongScrewy.mp3',
    label: 'So Long Screwy',
    color: 'primary',
    icon: 'BugsBunny_15x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'StrongAsAnOx.mp3',
    label: 'Strong As An Ox',
    color: 'primary',
    icon: 'FoghornLeghorn_16x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'SufferinSuccotash.mp3',
    label: 'Sufferin\' Succotash',
    color: 'primary',
    icon: 'SylvesterCat_13x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'TakeYouApart.mp3',
    label: 'Take You Apart',
    color: 'primary',
    icon: 'BugsBunny_15x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'ThatsAllFolks.mp3',
    label: 'Thats All Folks',
    color: 'primary',
    icon: 'Porky_24x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'ThatWasAJokeGirl.mp3',
    label: 'That Was A Joke Girl',
    color: 'primary',
    icon: 'FoghornLeghorn_16x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'UnwarrantedAttack.mp3',
    label: 'Unwarranted Attack',
    color: 'primary',
    icon: 'FoghornLeghorn_16x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'WhatsGoinOnHere.mp3',
    label: 'What\'s Goin\' On Here',
    color: 'primary',
    icon: 'FoghornLeghorn_16x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'WhatsUpDoc.mp3',
    label: 'What\'s Up Doc',
    color: 'primary',
    icon: 'BugsBunny_15x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'WheredYouGo.mp3',
    label: 'Where\'d You Go?',
    color: 'primary',
    icon: 'BugsBunny_15x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'Woe.mp3',
    label: 'Woe!',
    color: 'primary',
    icon: 'YosemiteSam_24x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'WonderfulIdea.mp3',
    label: 'Wonderful Idea',
    color: 'primary',
    icon: 'BugsBunny_15x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'YaFightsMyWay.mp3',
    label: 'Ya Fights My Way',
    color: 'primary',
    icon: 'YosemiteSam_24x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'YaGottaGo.mp3',
    label: 'Ya Gotta Go',
    color: 'primary',
    icon: 'FoghornLeghorn_16x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'YaKillingMe.mp3',
    label: 'Ya Killing Me',
    color: 'primary',
    icon: 'BugsBunny_15x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'YankeeAbout.mp3',
    label: 'Yankee About',
    color: 'primary',
    icon: 'YosemiteSam_24x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'YaWayOff.mp3',
    label: 'Ya Way Off',
    color: 'primary',
    icon: 'FoghornLeghorn_16x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'YouIdgit.mp3',
    label: 'You Idgit!',
    color: 'primary',
    icon: 'YosemiteSam_24x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'YoullBeSorry.mp3',
    label: 'You\'ll Be Sorry!',
    color: 'primary',
    icon: 'BugsBunny_15x24.png',
    category: AudioCategory.LooneyTunes,
  }, {
    source: 'YourTonguesFlappin.mp3',
    label: 'Your Tongue\'s Flappin\'',
    color: 'primary',
    icon: 'FoghornLeghorn_16x24.png',
    category: AudioCategory.LooneyTunes,
  },



  {
    source: 'Aaaah.wav',
    label: 'Aaaah',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'IveBeenDoing.wav',
    label: 'A Lot Of Thinking',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'TotallyScrewed.wav',
    label: 'Am I Totally Screwed?',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'BlahBlahBlah.wav',
    label: 'Blah Blah Blah',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'Bye.wav',
    label: 'Bye',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'ByeBye2.wav',
    label: 'Bye Bye 1',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'ByeBye4.wav',
    label: 'Bye Bye 2',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'ByeBye5.wav',
    label: 'Bye Bye 3',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'ComeOn1.wav',
    label: 'Come On',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'IWannaDiscuss.wav',
    label: 'Discuss Behavior',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'FridayRocks.wav',
    label: 'Friday Rocks',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'Focus.wav',
    label: 'Focus',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'GetAwayFromMe.mp3',
    label: 'Get Away From Me',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'Hello2.mp3',
    label: 'Hello 1',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'Hello3.mp3',
    label: 'Hello 2',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'Hey.mp3',
    label: 'Hey',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'HeySweetness1.wav',
    label: 'Hey Sweetness 1',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'HeySweetness2.wav',
    label: 'Hey Sweetness 2',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'Hi1.wav',
    label: 'Hi 1',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'Hi2.wav',
    label: 'Hi 2',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'Hi3.wav',
    label: 'Hi 3',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'HotStuffComingUp.wav',
    label: 'Hot Stuff',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'HowDareYou.wav',
    label: 'How Dare You',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'Huh2.wav',
    label: 'Huh',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'ImSorryICant.wav',
    label: 'I Can\'t',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'ICantTakeThis.mp3',
    label: 'I Can\'t Take This',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'IDontThinkSo2.wav',
    label: 'I Don\'t Think So',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'IDontUnderstand.wav',
    label: 'I Don\'t Understand',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'IllKeepCalling1.wav',
    label: 'I\'ll Keep Calling',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'ImGonnaGo.wav',
    label: 'I\'m Gonna Go',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'ImSoHungry.wav',
    label: 'I\'m So Hungry',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'ImSoReady.wav',
    label: 'I\'m So Ready',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'ImSorry.wav',
    label: 'I\'m Sorry',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'ImTheMan.wav',
    label: 'I\'m The Man',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'ItsAlmostTime.wav',
    label: 'It\'s Almost Time',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'ItsMe.wav',
    label: 'It\'s Me',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'ItsMeAgain.wav',
    label: 'It\'s Me Again',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'ItsNotThatEasy.wav',
    label: 'It\'s Not That Easy',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'ItsYou.wav',
    label: 'It\'s You',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'ItsYourSweetheartAgain.wav',
    label: 'It\'s Your Sweetheart',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'JustAboutDoneHoney.wav',
    label: 'Just About Done',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'LetMeOutOfHere1.wav',
    label: 'Let Me Out Of Here',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'MaybeNextTimeHuh.wav',
    label: 'Maybe Next Time',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'Mmm1.wav',
    label: 'Mmm',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'NiceWork.wav',
    label: 'Nice Work',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'No4.wav',
    label: 'No',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'ItSmellsReallyGood.mp3',
    label: 'Smells Really Good',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'ICantBelieveILetYou.wav',
    label: 'Talk Me Into This',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'IThinkThatThisIs.wav',
    label: 'Telling Me Something',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'ThankGodItsFriday.mp3',
    label: 'Thank God It\'s Friday',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'IllTellYouWhatIThink.wav',
    label: 'What I Think',
    category: AudioCategory.Voices,
    color: 'primary'
  }, {
    source: 'ComeOnYouCanDoIt.wav',
    label: 'You Can Do It',
    category: AudioCategory.Voices,
    color: 'primary'
  }
];
