/*
	Sources:
	http://www.pacdv.com/sounds/voices-1.html
*/

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
		label: 'A Lot Of Thinking',
		category: AudioCategory.Voices,
		source: 'IveBeenDoing.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'Aaaah',
		category: AudioCategory.Voices,
		source: 'Aaaah.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'Act Like That',
		category: AudioCategory.LooneyTunes,
		source: 'ActLikeThat.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		label: 'Adios (Bugs)',
		category: AudioCategory.LooneyTunes,
		source: 'BugsAdios.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		label: 'Adios (Foghorn)',
		category: AudioCategory.LooneyTunes,
		source: 'FoghornAdios.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
		label: 'A.D.T.',
		category: AudioCategory.Uncategorized,
		source: 'ADT.mp3',
		icon: 'ADT_29x26.png'
	}, {
		label: 'Aeuhhh',
		category: AudioCategory.TVShows,
		source: 'TimAllenAeuhhh.mp3',
		icon: 'TimTaylor_24x24.png'
	}, {
		label: 'Am I Totally Screwed?',
		category: AudioCategory.Voices,
		source: 'TotallyScrewed.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'As Times Goes By',
		category: AudioCategory.LooneyTunes,
		source: 'AsTimeGoesBy.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		label: 'Aye Aye Sir',
		category: AudioCategory.LooneyTunes,
		source: 'AyeAyeSir.mp3',
		icon: 'BugsBunny_15x24.png'
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
		label: 'Being Watched',
		category: AudioCategory.LooneyTunes,
		source: 'BeingWatched.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		label: 'Big Horny Toads',
		category: AudioCategory.LooneyTunes,
		source: 'BigHornyToads.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		label: 'Big Summer Blowout',
		category: AudioCategory.Animation,
		source: 'BigSummerBlowout.mp3',
		icon: 'OakenFrozen_25x24.png'
	}, {
		label: 'Blah Blah Blah',
		category: AudioCategory.Voices,
		source: 'BlahBlahBlah.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'Blast Your Head Off',
		category: AudioCategory.LooneyTunes,
		source: 'BlastYourHeadOff.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
		label: 'Bless You',
		category: AudioCategory.Ready,
		source: 'BlessYou.mp3',
		icon: 'TheSneeze_24x24.png'
	}, {
		label: 'Blow The Ship',
		category: AudioCategory.LooneyTunes,
		source: 'BlowTheShip.mp3',
		icon: 'YosemiteSam_24x24.png'
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
		label: 'Bugs Cheer',
		category: AudioCategory.LooneyTunes,
		source: 'BugsCheer.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		label: 'Burn (Long)',
		category: AudioCategory.TVShows,
		source: 'Burn2.mp3',
		icon: 'MichaelKelso_28x28.png'
	}, {
		label: 'Burn (Short)',
		category: AudioCategory.TVShows,
		source: 'Burn.mp3',
		icon: 'MichaelKelso_28x28.png'
	}, {
		label: 'Bushwackin\' Baracuda',
		category: AudioCategory.LooneyTunes,
		source: 'BushwackinBaracuda.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
		label: 'Bye',
		category: AudioCategory.Voices,
		source: 'Bye.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'Bye Bye 1',
		category: AudioCategory.Voices,
		source: 'ByeBye2.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'Bye Bye 2',
		category: AudioCategory.Voices,
		source: 'ByeBye4.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'Bye Bye 3',
		category: AudioCategory.Voices,
		source: 'ByeBye5.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'Bye Felisha',
		category: AudioCategory.Uncategorized,
		source: 'ByeFelisha.mp3',
		icon: 'ByeFelisha_28x28.png'
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
		label: 'Come On',
		category: AudioCategory.Voices,
		source: 'ComeOn1.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'Communication',
		category: AudioCategory.Heather,
		source: 'EffectiveCommunication.mp3',
		icon: 'HeatherFleischmann2_24x42.png'
	}, {
		label: 'Convoy',
		category: AudioCategory.Uncategorized,
		source: 'Convoy.mp3',
		icon: 'SemiTruck_35x24.png'
	}, {
		label: 'Crazy Idgit!',
		category: AudioCategory.LooneyTunes,
		source: 'CrazyIdgit.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
		label: 'Crickets',
		category: AudioCategory.Uncategorized,
		source: 'Crickets.mp3',
		icon: 'Cricket_38x24.png'
	},
	
	/* D */
	
	{
		label: 'Discuss Behavior',
		category: AudioCategory.Voices,
		source: 'IWannaDiscuss.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'Dixie Horn',
		category: AudioCategory.Uncategorized,
		source: 'DixieHorn.mp3',
		icon: 'FX_20x20.png'
	}, {
		label: 'Doin\' It All Wrong',
		category: AudioCategory.LooneyTunes,
		source: 'DoinItAllWrong.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
		label: 'Drama',
		category: AudioCategory.Ready,
		source: 'Drama.mp3',
		icon: 'Drama_38x24.png'
  },
  
  /* E */
	
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
		label: 'Fart (Everyday)',
		category: AudioCategory.Ready,
		source: 'EverydayFart.mp3',
		icon: 'CraigOutten_28x28.png'
	}, {
		label: 'Fart (Reverb)',
		category: AudioCategory.Ready,
		source: 'FartReverb.mp3',
		icon: 'CraigOutten_28x28.png'
	}, {
		label: 'Fart (Squish)',
		category: AudioCategory.Ready,
		source: 'SquishFart.mp3',
		icon: 'CraigOutten_28x28.png'
	}, {
		label: 'Focus',
		category: AudioCategory.Voices,
		source: 'Focus.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'Friday Rocks',
		category: AudioCategory.Voices,
		source: 'FridayRocks.mp3',
		icon: 'Voices_36x26.png'
	},
	
	/* G */
	
	{
		label: 'Gasp',
		category: AudioCategory.MyLittlePony,
		source: 'Gasp.mp3',
		icon: 'PinkiePie_34x24.png'
	}, {
		label: 'Gasp (Group)',
		category: AudioCategory.MyLittlePony,
		source: 'GaspGroup.mp3',
		icon: 'PinkiePie_34x24.png'
	}, {
		label: 'Get Agoing',
		category: AudioCategory.LooneyTunes,
		source: 'GetAgoing.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
		label: 'Get Away From Me',
		category: AudioCategory.Voices,
		source: 'GetAwayFromMe.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'Git Along Little Dogie',
		category: AudioCategory.LooneyTunes,
		source: 'GitAlongLittleDogie.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
		label: 'Glass Breaking',
		category: AudioCategory.Uncategorized,
		source: 'GlassBreaking.mp3',
		icon: 'FX_20x20.png'
	}, {
		label: 'Go Away Boy',
		category: AudioCategory.LooneyTunes,
		source: 'GoAwayBoy.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
		label: 'Go Away Boy',
		category: AudioCategory.LooneyTunes,
		source: 'GoAwayBoy2.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
		label: 'Gonna DoO',
		category: AudioCategory.YodelerKid,
		source: 'GonnaDoO.mp3',
		icon: 'YodelerKid_21x24.png'
	}, {
		label: 'Good Morning Folks',
		category: AudioCategory.Ready,
		source: 'GoodMorningFolks.mp3',
		icon: 'MichaelFrancis_20x24.png'
	}, {
		label: 'Goodbye Now',
		category: AudioCategory.LooneyTunes,
		source: 'GoodbyeNow.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		label: 'Goodnight Varmint',
		category: AudioCategory.LooneyTunes,
		source: 'GoodnightVarmint.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
		label: 'Gorilla',
		category: AudioCategory.Uncategorized,
		source: 'Gorilla.mp3'
	}, {
		label: 'Gunfire',
		category: AudioCategory.Uncategorized,
		source: 'Gunfire.mp3',
		icon: 'FX_20x20.png'
	},
	
	/* H */
	
	{
		label: 'Hello',
		category: AudioCategory.Ready,
		source: 'Hello.mp3',
		icon: 'OfficePhone_28x24.png'
	}, {
		label: 'Hello 1',
		category: AudioCategory.Voices,
		source: 'Hello2.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'Hello 2',
		category: AudioCategory.Voices,
		source: 'Hello3.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'He\'s A Big One',
		category: AudioCategory.LooneyTunes,
		source: 'HesABigOne.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		label: 'Hey',
		category: AudioCategory.Voices,
		source: 'Hey.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'Hey Sweetness 1',
		category: AudioCategory.Voices,
		source: 'HeySweetness1.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'Hey Sweetness 2',
		category: AudioCategory.Voices,
		source: 'HeySweetness2.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'Hi 1',
		category: AudioCategory.Voices,
		source: 'Hi1.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'Hi 2',
		category: AudioCategory.Voices,
		source: 'Hi2.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'Hi 3',
		category: AudioCategory.Voices,
		source: 'Hi3.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'Hi Ho Neighbor',
		category: AudioCategory.TVShows,
		source: 'HiHoNeighbor.mp3',
		icon: 'TimTaylor_24x24.png'
	}, {
		label: 'Hit The Road',
		category: AudioCategory.LooneyTunes,
		source: 'HitTheRoad.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		label: 'Home On The Range',
		category: AudioCategory.LooneyTunes,
		source: 'HomeOnTheRange.mp3',
		icon: 'BugsBunny_15x24.png'
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
	}, {
		label: 'Hot Stuff',
		category: AudioCategory.Voices,
		source: 'HotStuffComingUp.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'How Dare You',
		category: AudioCategory.Voices,
		source: 'HowDareYou.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'Huh',
		category: AudioCategory.Voices,
		source: 'Huh2.mp3',
		icon: 'Voices_36x26.png'
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
		label: 'I Can\'t',
		category: AudioCategory.Voices,
		source: 'ImSorryICant.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'I Can\'t Take This',
		category: AudioCategory.Voices,
		source: 'ICantTakeThis.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'I Did It',
		category: AudioCategory.MyLittlePony,
		source: 'IDidIt.mp3',
		icon: 'PinkiePie_34x24.png'
	}, {
		label: 'I Don\'t Think So',
		category: AudioCategory.Voices,
		source: 'IDontThinkSo2.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'I Don\'t Understand',
		category: AudioCategory.Voices,
		source: 'IDontUnderstand.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'I Graduated',
		category: AudioCategory.Heather,
		source: 'Graduated.mp3',
		icon: 'HeatherFleischmann2_24x42.png'
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
		label: 'I Want You Baby',
		category: AudioCategory.LooneyTunes,
		source: 'IWantYouBaby.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
		label: 'I Was Great',
		category: AudioCategory.Heather,
		source: 'IWasGreat.mp3',
		icon: 'HeatherFleischmann2_24x42.png'
	}, {
		label: 'I\'ll Keep Calling',
		category: AudioCategory.Voices,
		source: 'IllKeepCalling1.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'I\'m Going To Tell',
		category: AudioCategory.LooneyTunes,
		source: 'ImGoingToTell.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		label: 'I\'m Gonna Go',
		category: AudioCategory.Voices,
		source: 'ImGonnaGo.mp3',
		icon: 'Voices_36x26.png'
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
		label: 'I\'m So Hungry',
		category: AudioCategory.Voices,
		source: 'ImSoHungry.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'I\'m So Ready',
		category: AudioCategory.Voices,
		source: 'ImSoReady.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'I\'m Sorry',
		category: AudioCategory.Voices,
		source: 'ImSorry.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'I\'m The Man',
		category: AudioCategory.Voices,
		source: 'ImTheMan.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'Imbesile',
		category: AudioCategory.LooneyTunes,
		source: 'Imbesile.mp3',
		icon: 'BugsBunny_15x24.png'
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
		label: 'It\' A Deal',
		category: AudioCategory.LooneyTunes,
		source: 'ItsADeal.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
		label: 'It\'s Almost Time',
		category: AudioCategory.Voices,
		source: 'ItsAlmostTime.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'It\'s Me',
		category: AudioCategory.Voices,
		source: 'ItsMe.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'It\'s Me Again',
		category: AudioCategory.Voices,
		source: 'ItsMeAgain.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'It\'s Not That Easy',
		category: AudioCategory.Voices,
		source: 'ItsNotThatEasy.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'It\'s So Fluffy',
		category: AudioCategory.Animation,
		source: 'ItsSoFluffy.mp3',
		icon: 'TheMinion_21x28.png'
	}, {
		label: 'It\'s You',
		category: AudioCategory.Voices,
		source: 'ItsYou.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'It\'s Your Sweetheart',
		category: AudioCategory.Voices,
		source: 'ItsYourSweetheartAgain.mp3',
		icon: 'Voices_36x26.png'
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
	}, {
		label: 'Just About Done',
		category: AudioCategory.Voices,
		source: 'JustAboutDoneHoney.mp3',
		icon: 'Voices_36x26.png'
	},
	
	/* K */
	
	{
		label: 'King Of The Road',
		category: AudioCategory.LooneyTunes,
		source: 'KingOfTheRoad.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	},
	
	/* L */
	
	{
		label: 'Lay Down Your Arms',
		category: AudioCategory.LooneyTunes,
		source: 'LayDownYourArms.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
		label: 'Let Me Out Of Here',
		category: AudioCategory.Voices,
		source: 'LetMeOutOfHere1.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'Life Of The Party',
		category: AudioCategory.LooneyTunes,
		source: 'LifeOfTheParty.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		label: 'Light Bulb',
		category: AudioCategory.Animation,
		source: 'LightBulb.mp3',
		icon: 'TheMinion_21x28.png'
	}, {
		label: 'Little Puny',
		category: AudioCategory.LooneyTunes,
		source: 'LittlePuny.mp3',
		icon: 'FoghornLeghorn_16x24.png'
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
		label: 'Man\'s Job',
		category: AudioCategory.LooneyTunes,
		source: 'MansJob.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
		label: 'Maybe Next Time',
		category: AudioCategory.Voices,
		source: 'MaybeNextTimeHuh.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'Meatloaf',
		category: AudioCategory.TVShows,
		source: 'Meatloaf.mp3',
		icon: 'WillFerrell_18x28.png'
	}, {
		label: 'Mmm',
		category: AudioCategory.Voices,
		source: 'Mmm1.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'More Confusion',
		category: AudioCategory.LooneyTunes,
		source: 'MoreConfusion.mp3',
		icon: 'FoghornLeghorn_16x24.png'
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
		label: 'Nice Girl',
		category: AudioCategory.LooneyTunes,
		source: 'NiceGirl.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
		label: 'Nice Kid',
		category: AudioCategory.LooneyTunes,
		source: 'NiceKid.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
		label: 'Nice Work',
		category: AudioCategory.Voices,
		source: 'NiceWork.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'No',
		category: AudioCategory.Voices,
		source: 'No4.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'No Get Up And Go',
		category: AudioCategory.LooneyTunes,
		source: 'NoGetUpAndGo.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
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
		label: 'Off\'n My Premises',
		category: AudioCategory.LooneyTunes,
		source: 'OffnMyPremises.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
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
		label: 'Oh WahAhAhAh',
		category: AudioCategory.Uncategorized,
		source: 'OhWahAhAhAh.mp3'
	}, {
		label: 'Oh Woah Woah',
		category: AudioCategory.YodelerKid,
		source: 'OhWoahWoah.mp3',
		icon: 'YodelerKid_21x24.png'
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
	}, {
		label: 'Put Put Put',
		category: AudioCategory.LooneyTunes,
		source: 'PutPutPut.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	},
  
  /* Q */

	/* R */
	
	{
		label: 'Respect',
		category: AudioCategory.Uncategorized,
		source: 'Respect.mp3',
		icon: 'FlyingV_31x24.png'
	}, {
		label: 'Right On Time',
		category: AudioCategory.LooneyTunes,
		source: 'RightOnTime.mp3',
		icon: 'BugsBunny_15x24.png'
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
		label: 'Say Your Prayers',
		category: AudioCategory.LooneyTunes,
		source: 'SayYourPrayers.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
		label: 'Screaming Goat',
		category: AudioCategory.Uncategorized,
		source: 'ScreamingGoat.mp3',
		icon: 'Goat_24x24.png'
	}, {
		label: 'Sharp As A Bowlin\' Ball',
		category: AudioCategory.LooneyTunes,
		source: 'SharpAsABowlinBall.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
		label: 'Shh',
		category: AudioCategory.Ready,
		source: 'Shh.mp3',
		icon: 'PinkiePie_34x24.png'
	}, {
		label: 'Shh (Craig Picky)',
		category: AudioCategory.Ready,
		source: 'ShhCraigPicky.mp3',
		icon: 'PinkiePie_34x24.png'
	}, {
		label: 'Shh (Craig)',
		category: AudioCategory.Ready,
		source: 'ShhCraig.mp3',
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
		label: 'Shh (Not Helping)',
		category: AudioCategory.Ready,
		source: 'ShhNotHelping.mp3',
		icon: 'PinkiePie_34x24.png'
	}, {
		label: 'Shh (Short)',
		category: AudioCategory.Ready,
		source: 'ShhShort.mp3',
		icon: 'CraigOutten_28x28.png'
	}, {
		label: 'Shh (Swimming)',
		category: AudioCategory.Ready,
		source: 'ShhSwimming.mp3',
		icon: 'Nemo_35x26.png'
	}, {
		label: 'Shh (Whole Bag)',
		category: AudioCategory.Ready,
		source: 'ShhWholeBag.mp3',
		icon: 'DrEvil_28x28.png'
	}, {
		label: 'Shh 2',
		category: AudioCategory.Ready,
		source: 'Shh2.mp3',
		icon: 'Nemo_35x26.png'
	}, {
		label: 'Show Little Egghead',
		category: AudioCategory.LooneyTunes,
		source: 'ShowLittleEgghead.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
		label: 'Shut Up!',
		category: AudioCategory.LooneyTunes,
		source: 'ShutUp.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
		label: 'Shut Up! (Bang Bang)',
		category: AudioCategory.LooneyTunes,
		source: 'ShutUpBangBang.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
		label: 'Silly Question',
		category: AudioCategory.LooneyTunes,
		source: 'SillyQuestion.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		label: 'Slide Whistle',
		category: AudioCategory.Uncategorized,
		source: 'SlideWhistle.mp3',
		icon: 'FX_20x20.png'
	}, {
		label: 'Smells Really Good',
		category: AudioCategory.Voices,
		source: 'ItSmellsReallyGood.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'Snoring',
		category: AudioCategory.Uncategorized,
		source: 'Snoring.mp3',
		icon: 'FX_20x20.png'
	}, {
		label: 'So Long Screwy',
		category: AudioCategory.LooneyTunes,
		source: 'SoLongScrewy.mp3',
		icon: 'BugsBunny_15x24.png'
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
		label: 'Strong As An Ox',
		category: AudioCategory.LooneyTunes,
		source: 'StrongAsAnOx.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
		label: 'Sufferin\' Succotash',
		category: AudioCategory.LooneyTunes,
		source: 'SufferinSuccotash.mp3',
		icon: 'SylvesterCat_13x24.png'
	},
	
	/* T */
	
	{
		label: 'Take You Apart',
		category: AudioCategory.LooneyTunes,
		source: 'TakeYouApart.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		label: 'Talk Me Into This',
		category: AudioCategory.Voices,
		source: 'ICantBelieveILetYou.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'Telling Me Something',
		category: AudioCategory.Voices,
		source: 'IThinkThatThisIs.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'Thank God It\'s Friday',
		category: AudioCategory.Voices,
		source: 'ThankGodItsFriday.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'That Was A Joke Girl',
		category: AudioCategory.LooneyTunes,
		source: 'ThatWasAJokeGirl.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
		label: 'Thats All Folks',
		category: AudioCategory.LooneyTunes,
		source: 'ThatsAllFolks.mp3',
		icon: 'Porky_24x24.png'
	}, {
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
	
	{
		label: 'Unwarranted Attack',
		category: AudioCategory.LooneyTunes,
		source: 'UnwarrantedAttack.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	},
	
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
		label: 'What!',
		category: AudioCategory.Uncategorized,
		source: 'What.mp3'
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
		label: 'What I Think',
		category: AudioCategory.Voices,
		source: 'IllTellYouWhatIThink.mp3',
		icon: 'Voices_36x26.png'
	}, {
		label: 'What\'s Goin\' On Here',
		category: AudioCategory.LooneyTunes,
		source: 'WhatsGoinOnHere.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
		label: 'What\'s Up Doc',
		category: AudioCategory.LooneyTunes,
		source: 'WhatsUpDoc.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		label: 'Where\'d You Go?',
		category: AudioCategory.LooneyTunes,
		source: 'WheredYouGo.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		label: 'Woe!',
		category: AudioCategory.LooneyTunes,
		source: 'Woe.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
		label: 'Wonderful Idea',
		category: AudioCategory.LooneyTunes,
		source: 'WonderfulIdea.mp3',
		icon: 'BugsBunny_15x24.png'
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
		label: 'Ya Fights My Way',
		category: AudioCategory.LooneyTunes,
		source: 'YaFightsMyWay.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
		label: 'Ya Gotta Go',
		category: AudioCategory.LooneyTunes,
		source: 'YaGottaGo.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
		label: 'Ya Killing Me',
		category: AudioCategory.LooneyTunes,
		source: 'YaKillingMe.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		label: 'Ya Way Off',
		category: AudioCategory.LooneyTunes,
		source: 'YaWayOff.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
		label: 'Yaaaaaaay',
		category: AudioCategory.Uncategorized,
		source: 'Yay.mp3',
		icon: 'Cheering_19x28.png'
	}, {
		label: 'Yankee About',
		category: AudioCategory.LooneyTunes,
		source: 'YankeeAbout.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
		label: 'Yeah',
		category: AudioCategory.Uncategorized,
		source: 'Yeah.mp3'
	}, {
		label: 'You Idgit!',
		category: AudioCategory.LooneyTunes,
		source: 'YouIdgit.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
		label: 'You\'ll Be Sorry!',
		category: AudioCategory.LooneyTunes,
		source: 'YoullBeSorry.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		label: 'Your Tongue\'s Flappin\'',
		category: AudioCategory.LooneyTunes,
		source: 'YourTonguesFlappin.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
		label: 'You\'re Welcome',
		category: AudioCategory.Ready,
		source: 'YoureWelcome.mp3'
  }
  
  /* Z */
];
