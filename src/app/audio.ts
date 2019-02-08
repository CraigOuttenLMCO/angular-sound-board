/*
	Sources:
	http://www.pacdv.com/sounds/voices-1.html
	https://www.youtube.com/user/SoundEffectsFactory/videos
*/

/* Current Max ID: 265 */

export enum AudioCategory {
	Animation = "Animation",
	FX = "FX",
	Heather = "Heather",
	LooneyTunes = "Looney Tunes",
	MyLittlePony = "My Little Pony",
	TV = "TV",
	Uncategorized = "Uncategorized",
	Voices = "Voices",
	YodelerKid = "Yodeler Kid"
};

export interface AudioEntry {
	id: number;
	label: string;
	category: AudioCategory;
	ready?: boolean; // if true, place in the ready queue
	source: string;
	color?: string; // this should default to 'primary'
	icon?: string;
};

export const AUDIO_ENTRIES:AudioEntry[] = [
	
	/* A */
	
	{
		id: 1,
		label: 'A Lot Of Thinking',
		category: AudioCategory.Voices,
		source: 'IveBeenDoing.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 2,
		label: 'Aaaah',
		category: AudioCategory.Voices,
		source: 'Aaaah.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 3,
		label: 'Act Like That',
		category: AudioCategory.LooneyTunes,
		source: 'ActLikeThat.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		id: 4,
		label: 'Adios (Bugs)',
		category: AudioCategory.LooneyTunes,
		source: 'BugsAdios.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		id: 5,
		label: 'Adios (Foghorn)',
		category: AudioCategory.LooneyTunes,
		source: 'FoghornAdios.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
		id: 6,
		label: 'A.D.T.',
		category: AudioCategory.Uncategorized,
		source: 'ADT.mp3',
		icon: 'ADT_29x26.png'
	}, {
		id: 7,
		label: 'Aeuhhh',
		category: AudioCategory.TV,
		source: 'TimAllenAeuhhh.mp3',
		icon: 'TimTaylor_24x24.png'
	}, {
		id: 8,
		label: 'Am I Totally Screwed?',
		category: AudioCategory.Voices,
		source: 'TotallyScrewed.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 9,
		label: 'As Times Goes By',
		category: AudioCategory.LooneyTunes,
		source: 'AsTimeGoesBy.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		id: 10,
		label: 'Aye Aye Sir',
		category: AudioCategory.LooneyTunes,
		source: 'AyeAyeSir.mp3',
		icon: 'BugsBunny_15x24.png'
	},
	
	/* B */
	
	{
		id: 11,
		label: 'Ba Dum Tss',
		category: AudioCategory.FX,
		ready: true,
		source: 'BaDumTss.mp3',
		icon: 'Drum_24x24.png'
	}, {
		id: 12,
		label: 'Bad Cough',
		category: AudioCategory.Uncategorized,
		source: 'BadCough.mp3',
		icon: 'TheCough_24x24.png'
	}, {
		id: 13,
		label: 'Bathroom',
		category: AudioCategory.Animation,
		source: 'Bathroom.mp3',
		icon: 'EricCartman_26x24.png'
	}, {
		id: 14,
		label: 'Being Watched',
		category: AudioCategory.LooneyTunes,
		source: 'BeingWatched.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		id: 15,
		label: 'Big Horny Toads',
		category: AudioCategory.LooneyTunes,
		source: 'BigHornyToads.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		id: 16,
		label: 'Big Summer Blowout',
		category: AudioCategory.Animation,
		source: 'BigSummerBlowout.mp3',
		icon: 'OakenFrozen_25x24.png'
	}, {
		id: 17,
		label: 'Blah Blah Blah',
		category: AudioCategory.Voices,
		source: 'BlahBlahBlah.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 18,
		label: 'Blast Your Head Off',
		category: AudioCategory.LooneyTunes,
		source: 'BlastYourHeadOff.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
		id: 19,
		label: 'Bless You',
		category: AudioCategory.Voices,
		ready: true,
		source: 'BlessYou.mp3',
		icon: 'Obama_24x24.png'
	}, {
		id: 20,
		label: 'Blow The Ship',
		category: AudioCategory.LooneyTunes,
		source: 'BlowTheShip.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
		id: 21,
		label: 'Boogy To The Woogy',
		category: AudioCategory.Uncategorized,
		source: 'BoogyToTheWoogy.mp3',
		icon: 'New_28x26.png'
	}, {
		id: 22,
		label: 'Bottoms Up',
		category: AudioCategory.Uncategorized,
		ready: true,
		source: 'BottomsUp.mp3',
		icon: 'SodaCan3_18x24.png'
	}, {
		id: 23,
		label: 'Breaker 1-9',
		category: AudioCategory.TV,
		source: 'Breaker19.mp3',
		icon: 'SemiTruck_35x24.png'
	}, {
		id: 24,
		label: 'Breaker 1-9 (Full)',
		category: AudioCategory.TV,
		source: 'Breaker19Full.mp3',
		icon: 'SemiTruck_35x24.png'
	}, {
		id: 25,
		label: 'Bugs Cheer',
		category: AudioCategory.LooneyTunes,
		source: 'BugsCheer.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		id: 26,
		label: 'Burn (Long)',
		category: AudioCategory.TV,
		source: 'Burn2.mp3',
		icon: 'MichaelKelso_28x28.png'
	}, {
		id: 27,
		label: 'Burn (Short)',
		category: AudioCategory.TV,
		source: 'Burn.mp3',
		icon: 'MichaelKelso_28x28.png'
	}, {
		id: 28,
		label: 'Bushwackin\' Baracuda',
		category: AudioCategory.LooneyTunes,
		source: 'BushwackinBaracuda.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
		id: 29,
		label: 'Bye',
		category: AudioCategory.Voices,
		source: 'Bye.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 30,
		label: 'Bye Bye 1',
		category: AudioCategory.Voices,
		source: 'ByeBye2.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 31,
		label: 'Bye Bye 2',
		category: AudioCategory.Voices,
		source: 'ByeBye4.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 32,
		label: 'Bye Bye 3',
		category: AudioCategory.Voices,
		source: 'ByeBye5.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 33,
		label: 'Bye Felisha',
		category: AudioCategory.TV,
		source: 'ByeFelisha.mp3',
		icon: 'ByeFelisha_28x28.png'
	},
	
	/* C */
	
	{
		id: 34,
		label: 'Cash Me Outside',
		category: AudioCategory.TV,
		source: 'CashMeOutside.mp3',
		icon: 'CashMeOutside_28x28.png'
	}, {
		id: 35,
		label: 'Celebrate Birthday',
		category: AudioCategory.MyLittlePony,
		source: 'CelebrateBirthday.mp3',
		icon: 'PinkiePie_34x24.png'
	}, {
		id: 36,
		label: 'Come On',
		category: AudioCategory.Voices,
		source: 'ComeOn1.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 37,
		label: 'Communication',
		category: AudioCategory.Heather,
		source: 'EffectiveCommunication.mp3',
		icon: 'HeatherFleischmann2_24x42.png'
	}, {
		id: 38,
		label: 'Convoy',
		category: AudioCategory.TV,
		source: 'Convoy.mp3',
		icon: 'SemiTruck_35x24.png'
	}, {
		id: 39,
		label: 'Crazy Idgit!',
		category: AudioCategory.LooneyTunes,
		source: 'CrazyIdgit.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
		id: 40,
		label: 'Crickets',
		category: AudioCategory.FX,
		source: 'Crickets.mp3',
		icon: 'Cricket_38x24.png'
	},
	
	/* D */
	
	{
		id: 41,
		label: 'Did I Stutter?',
		category: AudioCategory.TV,
		source: 'DidIStutter.mp3',
		icon: 'StanleyHudson_24x24.png'
	}, {
		id: 42,
		label: 'Discuss Behavior',
		category: AudioCategory.Voices,
		source: 'IWannaDiscuss.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 43,
		label: 'Dixie Horn',
		category: AudioCategory.FX,
		source: 'DixieHorn.mp3',
		icon: 'FX_20x20.png'
	}, {
		id: 44,
		label: 'Doin\' It All Wrong',
		category: AudioCategory.LooneyTunes,
		source: 'DoinItAllWrong.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
		id: 45,
		label: 'Drama',
		category: AudioCategory.Uncategorized,
		ready: true,
		source: 'Drama.mp3',
		icon: 'Drama_38x24.png'
	},

	/* E */
	
	/* F */
	
	{
		id: 239,
		label: 'Fake News',
		category: AudioCategory.Voices,
		source: 'FakeNews.mp3',
		icon: 'DonaldTrump_29x24.png'
	}, {
		id: 46,
		label: 'Fangirl Squeal',
		category: AudioCategory.MyLittlePony,
		source: 'FangirlSqueal.mp3',
		icon: 'PinkiePie_34x24.png'
	}, {
		id: 47,
		label: 'Fangirl Squeal (Short)',
		category: AudioCategory.MyLittlePony,
		source: 'FangirlSquealShort.mp3',
		icon: 'PinkiePie_34x24.png'
	}, {
		id: 48,
		label: 'Fart (Everyday)',
		category: AudioCategory.FX,
		ready: true,
		source: 'EverydayFart.mp3',
		icon: 'CraigOutten_28x28.png'
	}, {
		id: 49,
		label: 'Fart (Reverb)',
		category: AudioCategory.FX,
		ready: true,
		source: 'FartReverb.mp3',
		icon: 'CraigOutten_28x28.png'
	}, {
		id: 50,
		label: 'Fart (Squish)',
		category: AudioCategory.FX,
		ready: true,
		source: 'SquishFart.mp3',
		icon: 'CraigOutten_28x28.png'
	}, {
		id: 243,
		label: 'Fired Him',
		category: AudioCategory.Voices,
		source: 'FiredHimImmediately.mp3',
		icon: 'DonaldTrump_29x24.png'
	}, {
		id: 51,
		label: 'Focus',
		category: AudioCategory.Voices,
		source: 'Focus.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 52,
		label: 'Friday Rocks',
		category: AudioCategory.Voices,
		source: 'FridayRocks.mp3',
		icon: 'Voices_36x26.png'
	},
	
	/* G */
	
	{
		id: 53,
		label: 'Gasp',
		category: AudioCategory.MyLittlePony,
		source: 'Gasp.mp3',
		icon: 'PinkiePie_34x24.png'
	}, {
		id: 54,
		label: 'Gasp (Group)',
		category: AudioCategory.MyLittlePony,
		source: 'GaspGroup.mp3',
		icon: 'PinkiePie_34x24.png'
	}, {
		id: 55,
		label: 'Get Agoing',
		category: AudioCategory.LooneyTunes,
		source: 'GetAgoing.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
		id: 56,
		label: 'Get Away From Me',
		category: AudioCategory.Voices,
		source: 'GetAwayFromMe.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 57,
		label: 'Git Along Little Dogie',
		category: AudioCategory.LooneyTunes,
		source: 'GitAlongLittleDogie.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
		id: 58,
		label: 'Glass Breaking',
		category: AudioCategory.FX,
		source: 'GlassBreaking.mp3',
		icon: 'FX_20x20.png'
	}, {
		id: 59,
		label: 'Go Away Boy',
		category: AudioCategory.LooneyTunes,
		source: 'GoAwayBoy.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
		id: 60,
		label: 'Go Away Boy',
		category: AudioCategory.LooneyTunes,
		source: 'GoAwayBoy2.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
		id: 61,
		label: 'Gonna DoO',
		category: AudioCategory.YodelerKid,
		source: 'GonnaDoO.mp3',
		icon: 'YodelerKid_21x24.png'
	}, {
		id: 62,
		label: 'Good Morning Folks',
		category: AudioCategory.Voices,
		ready: true,
		source: 'GoodMorningFolks.mp3',
		icon: 'MichaelFrancis_20x24.png'
	}, {
		id: 63,
		label: 'Goodbye Now',
		category: AudioCategory.LooneyTunes,
		source: 'GoodbyeNow.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		id: 64,
		label: 'Goodnight Varmint',
		category: AudioCategory.LooneyTunes,
		source: 'GoodnightVarmint.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
		id: 65,
		label: 'Gorilla',
		category: AudioCategory.Uncategorized,
		source: 'Gorilla.mp3'
	}, {
		id: 66,
		label: 'Gunfire',
		category: AudioCategory.FX,
		source: 'Gunfire.mp3',
		icon: 'FX_20x20.png'
	},
	
	/* H */
	
	{
		id: 67,
		label: 'Hello',
		category: AudioCategory.Voices,
		ready: true,
		source: 'Hello.mp3',
		icon: 'OfficePhone_28x24.png'
	}, {
		id: 68,
		label: 'Hello 1',
		category: AudioCategory.Voices,
		source: 'Hello2.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 69,
		label: 'Hello 2',
		category: AudioCategory.Voices,
		source: 'Hello3.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 70,
		label: 'He\'s A Big One',
		category: AudioCategory.LooneyTunes,
		source: 'HesABigOne.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		id: 71,
		label: 'Hey',
		category: AudioCategory.Voices,
		source: 'Hey.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 72,
		label: 'Hey Sweetness 1',
		category: AudioCategory.Voices,
		source: 'HeySweetness1.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 73,
		label: 'Hey Sweetness 2',
		category: AudioCategory.Voices,
		source: 'HeySweetness2.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 74,
		label: 'Hi 1',
		category: AudioCategory.Voices,
		source: 'Hi1.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 75,
		label: 'Hi 2',
		category: AudioCategory.Voices,
		source: 'Hi2.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 76,
		label: 'Hi 3',
		category: AudioCategory.Voices,
		source: 'Hi3.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 77,
		label: 'Hi Ho Neighbor',
		category: AudioCategory.TV,
		source: 'HiHoNeighbor.mp3',
		icon: 'TimTaylor_24x24.png'
	}, {
		id: 78,
		label: 'Hit The Road',
		category: AudioCategory.LooneyTunes,
		source: 'HitTheRoad.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		id: 79,
		label: 'Home On The Range',
		category: AudioCategory.LooneyTunes,
		source: 'HomeOnTheRange.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		id: 80,
		label: 'Hot Dog Friday',
		category: AudioCategory.Uncategorized,
		source: 'ThankGodItsHotDogFriday.mp3',
		icon: 'HotDogFriday_18x26.png'
	}, {
		id: 81,
		label: 'Hot Dog Friday Rocks',
		category: AudioCategory.Uncategorized,
		source: 'HotDogFridayRocks.mp3',
		icon: 'HotDogFriday_18x26.png'
	}, {
		id: 82,
		label: 'Hot Stuff',
		category: AudioCategory.Voices,
		source: 'HotStuffComingUp.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 83,
		label: 'How Dare You',
		category: AudioCategory.Voices,
		source: 'HowDareYou.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 84,
		label: 'Huh',
		category: AudioCategory.Voices,
		source: 'Huh2.mp3',
		icon: 'Voices_36x26.png'
	},
	
	/* I */
	
	{
		id: 85,
		label: 'I Am Great',
		category: AudioCategory.Heather,
		source: 'HeatherIsGreat.mp3',
		icon: 'HeatherFleischmann2_24x42.png'
	}, {
		id: 86,
		label: 'I Am Wonder Mike',
		category: AudioCategory.Uncategorized,
		source: 'IAmWonderMike.mp3',
		icon: 'New_28x26.png'
	}, {
		id: 87,
		label: 'I Can\'t',
		category: AudioCategory.Voices,
		source: 'ImSorryICant.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 88,
		label: 'I Can\'t Take This',
		category: AudioCategory.Voices,
		source: 'ICantTakeThis.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 89,
		label: 'I Did It',
		category: AudioCategory.MyLittlePony,
		source: 'IDidIt.mp3',
		icon: 'PinkiePie_34x24.png'
	}, {
		id: 90,
		label: 'I Don\'t Think So',
		category: AudioCategory.Voices,
		source: 'IDontThinkSo2.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 91,
		label: 'I Don\'t Understand',
		category: AudioCategory.Voices,
		source: 'IDontUnderstand.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 92,
		label: 'I Graduated',
		category: AudioCategory.Heather,
		source: 'Graduated.mp3',
		icon: 'HeatherFleischmann2_24x42.png'
	}, {
		id: 93,
		label: 'I Have Businesses',
		category: AudioCategory.Heather,
		source: 'Businesses.mp3',
		icon: 'HeatherFleischmann2_24x42.png'
	}, {
		id: 94,
		label: 'I Have Connections',
		category: AudioCategory.Heather,
		source: 'Connections.mp3',
		icon: 'HeatherFleischmann2_24x42.png'
	}, {
		id: 95,
		label: 'I Have Knowledge',
		category: AudioCategory.Heather,
		source: 'Knowledge.mp3',
		icon: 'HeatherFleischmann2_24x42.png'
	}, {
		id: 96,
		label: 'I Own The House',
		category: AudioCategory.Voices,
		source: 'IOwnTheHouse.mp3',
		icon: 'RobPoole_24x24_2.png'
	}, {
		id: 97,
		label: 'I Said Hip Hop',
		category: AudioCategory.Uncategorized,
		source: 'ISaidHipHop.mp3',
		icon: 'New_28x26.png'
	}, {
		id: 98,
		label: 'I Want You Baby',
		category: AudioCategory.LooneyTunes,
		source: 'IWantYouBaby.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
		id: 99,
		label: 'I Was Great',
		category: AudioCategory.Heather,
		source: 'IWasGreat.mp3',
		icon: 'HeatherFleischmann2_24x42.png'
	}, {
		id: 100,
		label: 'I\'ll Keep Calling',
		category: AudioCategory.Voices,
		source: 'IllKeepCalling1.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 101,
		label: 'I\'m Going To Tell',
		category: AudioCategory.LooneyTunes,
		source: 'ImGoingToTell.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		id: 102,
		label: 'I\'m Gonna Go',
		category: AudioCategory.Voices,
		source: 'ImGonnaGo.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 103,
		label: 'I\'m Not Selling It',
		category: AudioCategory.Voices,
		source: 'ImNotSellingIt.mp3',
		icon: 'RobPoole_24x24_2.png'
	}, {
		id: 235,
		label: 'I\'m Proud Of You',
		category: AudioCategory.Voices,
		source: 'ImProudOfYou.mp3'
	}, {
		id: 104,
		label: 'I\'m Ready',
		category: AudioCategory.Animation,
		source: 'ImReady.mp3',
		icon: 'SpongeBob_17x24.png'
	}, {
		id: 236,
		label: 'I\'m Really Proud Of You',
		category: AudioCategory.Voices,
		source: 'ImReallyProudOfYou.mp3'
	}, {
		id: 105,
		label: 'I\'m So Hungry',
		category: AudioCategory.Voices,
		source: 'ImSoHungry.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 106,
		label: 'I\'m So Ready',
		category: AudioCategory.Voices,
		source: 'ImSoReady.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 107,
		label: 'I\'m Sorry',
		category: AudioCategory.Voices,
		source: 'ImSorry.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 108,
		label: 'I\'m The Man',
		category: AudioCategory.Voices,
		source: 'ImTheMan.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 109,
		label: 'Imbesile',
		category: AudioCategory.LooneyTunes,
		source: 'Imbesile.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		id: 231,
		label: 'In The End',
		category: AudioCategory.Uncategorized,
		source: 'InTheEnd.mp3'
	}, {
		id: 110,
		label: 'In The Pot',
		category: AudioCategory.TV,
		source: 'InThePot.mp3',
		icon: 'KevinMalone_28x28.png'
	}, {
		id: 111,
		label: 'Internship Oriented',
		category: AudioCategory.Heather,
		source: 'InternshipOriented.mp3',
		icon: 'HeatherFleischmann2_24x42.png'
	}, {
		id: 112,
		label: 'It\' A Deal',
		category: AudioCategory.LooneyTunes,
		source: 'ItsADeal.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
		id: 113,
		label: 'It\'s Almost Time',
		category: AudioCategory.Voices,
		source: 'ItsAlmostTime.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 114,
		label: 'It\'s Me',
		category: AudioCategory.Voices,
		source: 'ItsMe.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 115,
		label: 'It\'s Me Again',
		category: AudioCategory.Voices,
		source: 'ItsMeAgain.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 116,
		label: 'It\'s Not That Easy',
		category: AudioCategory.Voices,
		source: 'ItsNotThatEasy.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 117,
		label: 'It\'s So Fluffy',
		category: AudioCategory.Animation,
		source: 'ItsSoFluffy.mp3',
		icon: 'TheMinion_21x28.png'
	}, {
		id: 118,
		label: 'It\'s You',
		category: AudioCategory.Voices,
		source: 'ItsYou.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 119,
		label: 'It\'s Your Sweetheart',
		category: AudioCategory.Voices,
		source: 'ItsYourSweetheartAgain.mp3',
		icon: 'Voices_36x26.png'
	},
	
	/* J */
	
	{
		id: 251,
		label: 'Joined The Conference',
		category: AudioCategory.Voices,
		source: 'HasJoinedTheConference.mp3',
		ready: false
	}, {
		id: 259,
		label: 'Joined The Conversation',
		category: AudioCategory.Voices,
		source: 'HasJoinedTheConversation.mp3',
		ready: false
	}, {
		id: 252,
		label: 'Joined The Meeting',
		category: AudioCategory.Voices,
		source: 'HasJoinedTheMeeting.mp3',
		ready: false
	}, {
		id: 260,
		label: 'Joined The Standup',
		category: AudioCategory.Voices,
		source: 'HasJoinedTheStandup.mp3',
		ready: false
	}, {
		id: 120,
		label: 'Just A Moment',
		category: AudioCategory.TV,
		source: 'JustAMoment.mp3',
		icon: 'BillLumbergh_28x28.png'
	}, {
		id: 121,
		label: 'Just A Moment (Full)',
		category: AudioCategory.TV,
		source: 'JustAMomentFull.mp3',
		icon: 'BillLumbergh_28x28.png'
	}, {
		id: 122,
		label: 'Just About Done',
		category: AudioCategory.Voices,
		source: 'JustAboutDoneHoney.mp3',
		icon: 'Voices_36x26.png'
	},
	
	/* K */
	
	{
		id: 123,
		label: 'King Of The Road',
		category: AudioCategory.LooneyTunes,
		source: 'KingOfTheRoad.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	},
	
	/* L */
	
	{
		id: 124,
		label: 'Lay Down Your Arms',
		category: AudioCategory.LooneyTunes,
		source: 'LayDownYourArms.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
		id: 253,
		label: 'Left The Conference',
		category: AudioCategory.Voices,
		source: 'HasLeftTheConference.mp3',
		ready: false
	}, {
		id: 261,
		label: 'Left The Conversation',
		category: AudioCategory.Voices,
		source: 'HasLeftTheConversation.mp3',
		ready: false
	}, {
		id: 254,
		label: 'Left The Meeting',
		category: AudioCategory.Voices,
		source: 'HasLeftTheMeeting.mp3',
		ready: false
	}, {
		id: 262,
		label: 'Left The Standup',
		category: AudioCategory.Voices,
		source: 'HasLeftTheStandup.mp3',
		ready: false
	}, {
		id: 125,
		label: 'Let Me Out Of Here',
		category: AudioCategory.Voices,
		source: 'LetMeOutOfHere1.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 126,
		label: 'Life Of The Party',
		category: AudioCategory.LooneyTunes,
		source: 'LifeOfTheParty.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		id: 127,
		label: 'Light Bulb',
		category: AudioCategory.Animation,
		source: 'LightBulb.mp3',
		icon: 'TheMinion_21x28.png'
	}, {
		id: 128,
		label: 'Little Puny',
		category: AudioCategory.LooneyTunes,
		source: 'LittlePuny.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
		id: 129,
		label: 'Loud Noises',
		category: AudioCategory.TV,
		source: 'LoudNoises.mp3',
		icon: 'MichaelScott_28x28.png'
	},
	
	/* M */
	
	{
		id: 130,
		label: 'Make It Stop',
		category: AudioCategory.MyLittlePony,
		source: 'MakeItStop.mp3',
		icon: 'PinkiePie_34x24.png'
	}, {
		id: 131,
		label: 'Man\'s Job',
		category: AudioCategory.LooneyTunes,
		source: 'MansJob.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
		id: 132,
		label: 'Maybe Next Time',
		category: AudioCategory.Voices,
		source: 'MaybeNextTimeHuh.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 133,
		label: 'Meatloaf',
		category: AudioCategory.TV,
		source: 'Meatloaf.mp3',
		icon: 'WillFerrell_18x28.png'
	}, {
		id: 134,
		label: 'Mmm',
		category: AudioCategory.Voices,
		source: 'Mmm1.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 135,
		label: 'More Confusion',
		category: AudioCategory.LooneyTunes,
		source: 'MoreConfusion.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
		id: 136,
		label: 'Motorcycle',
		category: AudioCategory.FX,
		ready: true,
		source: 'Motorcycle.mp3',
		icon: 'HarleyDavidson2_31x24.png'
	}, {
		id: 237,
		label: 'Motorcycle 2',
		category: AudioCategory.FX,
		ready: true,
		source: 'Motorcycle2.mp3',
		icon: 'HarleyDavidson2_31x24.png'
	}, {
		id: 137,
		label: 'My Dogs Are Barking',
		category: AudioCategory.TV,
		source: 'MyDogsAreBarking.mp3',
		icon: 'KevinMalone_28x28.png'
	}, {
		id: 138,
		label: 'My Precious',
		category: AudioCategory.TV,
		source: 'MyPrecious.mp3',
		icon: 'Gollum_24x24.png'
	},
	
	/* N */
	
	{
		id: 242,
		label: 'Never Been Released',
		category: AudioCategory.Voices,
		source: 'NeverBeenReleased.mp3',
		icon: 'DonaldTrump_29x24.png'
	}, {
		id: 241,
		label: 'Never Been Written',
		category: AudioCategory.Voices,
		source: 'NeverBeenWritten.mp3',
		icon: 'DonaldTrump_29x24.png'
	}, {
		id: 139,
		label: 'Nice Girl',
		category: AudioCategory.LooneyTunes,
		source: 'NiceGirl.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
		id: 140,
		label: 'Nice Kid',
		category: AudioCategory.LooneyTunes,
		source: 'NiceKid.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
		id: 141,
		label: 'Nice Work',
		category: AudioCategory.Voices,
		source: 'NiceWork.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 142,
		label: 'No',
		category: AudioCategory.Voices,
		source: 'No4.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 143,
		label: 'No Get Up And Go',
		category: AudioCategory.LooneyTunes,
		source: 'NoGetUpAndGo.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
		id: 144,
		label: 'No God No',
		category: AudioCategory.TV,
		source: 'NoGodNo.mp3',
		icon: 'MichaelScott_28x28.png'
	}, {
		id: 145,
		label: 'Nope',
		category: AudioCategory.Voices,
		ready: true,
		source: 'Nope.mp3',
		icon: 'ThumbsDown_26x26.png'
	}, {
		id: 238,
		label: 'Not A Fence',
		category: AudioCategory.Voices,
		source: 'NotAFence.mp3',
		icon: 'DonaldTrump_29x24.png'
	}, {
		id: 146,
		label: 'Not The Mama',
		category: AudioCategory.TV,
		source: 'NotTheMama.mp3',
		icon: 'BebeDinosaurio_28x24.png'
	},
	
	/* O */
	
	{
		id: 147,
		label: 'Off\'n My Premises',
		category: AudioCategory.LooneyTunes,
		source: 'OffnMyPremises.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
		id: 148,
		label: 'Oh Hell No',
		category: AudioCategory.Voices,
		source: 'OhHellNo.mp3',
		icon: 'CrystalMiller2_19x24.png'
	}, {
		id: 149,
		label: 'Oh Lord',
		category: AudioCategory.YodelerKid,
		source: 'OhLord.mp3',
		icon: 'YodelerKid_21x24.png'
	}, {
		id: 150,
		label: 'Oh WahAhAhAh',
		category: AudioCategory.Uncategorized,
		source: 'OhWahAhAhAh.mp3'
	}, {
		id: 151,
		label: 'Oh Woah Woah',
		category: AudioCategory.YodelerKid,
		source: 'OhWoahWoah.mp3',
		icon: 'YodelerKid_21x24.png'
	}, {
		id: 152,
		label: 'Ouch',
		category: AudioCategory.MyLittlePony,
		source: 'Ouch.mp3',
		icon: 'PinkiePie_34x24.png'
	}, {
		id: 153,
		label: 'Outboard Motor',
		category: AudioCategory.LooneyTunes,
		source: 'OutboardMotor.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	},
	
	/* P */
	
	{
		id: 154,
		label: 'Party Started',
		category: AudioCategory.MyLittlePony,
		source: 'PartyStarted.mp3',
		icon: 'PinkiePie_34x24.png'
	}, {
		id: 240,
		label: 'Phony Stuff',
		category: AudioCategory.Voices,
		source: 'PhonyStuff.mp3',
		icon: 'DonaldTrump_29x24.png'
	}, {
		id: 155,
		label: 'Put Put Put (Boy)',
		category: AudioCategory.LooneyTunes,
		source: 'PutPutPutBoy.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
		id: 156,
		label: 'Put Put Put (Woman)',
		category: AudioCategory.LooneyTunes,
		source: 'PutPutPut.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	},

	/* Q */

	/* R */
	
	{
		id: 157,
		label: 'Respect',
		category: AudioCategory.Uncategorized,
		source: 'Respect.mp3',
		icon: 'FlyingV_31x24.png'
	}, {
		id: 158,
		label: 'Right On Time',
		category: AudioCategory.LooneyTunes,
		source: 'RightOnTime.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		id: 159,
		label: 'Ring Alarm',
		category: AudioCategory.Uncategorized,
		source: 'RingAlarm.mp3',
		icon: 'RingSecurity_24x24.png'
	}, {
		id: 160,
		label: 'Ring Alarm (Full)',
		category: AudioCategory.Uncategorized,
		source: 'RingAlarmFull.mp3',
		icon: 'RingSecurity_24x24.png'
	}, {
		id: 161,
		label: 'Ring Chime (Double)',
		category: AudioCategory.Uncategorized,
		source: 'RingChimeDouble.mp3',
		icon: 'RingSecurity_24x24.png'
	}, {
		id: 162,
		label: 'Ring Chime (Single)',
		category: AudioCategory.Uncategorized,
		source: 'RingChimeSingle.mp3',
		icon: 'RingSecurity_24x24.png'
	}, {
		id: 264,
		label: 'Rob Poole',
		category: AudioCategory.Voices,
		source: 'RobPoole.mp3',
		ready: false,
		icon: 'RobPoole_24x24_2.png'
	}, {
		id: 265,
		label: 'Rob Poole III',
		category: AudioCategory.Voices,
		source: 'RobPooleIII.mp3',
		ready: false,
		icon: 'RobPoole_24x24_2.png'
	}, {
		id: 163,
		label: 'Run Away',
		category: AudioCategory.TV,
		source: 'RunAway.mp3',
		icon: 'HolyGrail_13x24.png'
	}, {
		id: 250,
		label: 'Ryan Bower',
		category: AudioCategory.Voices,
		source: 'RyanBower.mp3',
		ready: false
	}, {
		id: 263,
		label: 'Ryan Bower 2',
		category: AudioCategory.Voices,
		source: 'RyanBower2.mp3',
		ready: false
	}, {
		id: 247,
		label: 'Ryan Join Conference',
		category: AudioCategory.Voices,
		source: 'RyanBowerHasJoinedTheConference.mp3',
		ready: false
	}, {
		id: 255,
		label: 'Ryan Join Conversation',
		category: AudioCategory.Voices,
		source: 'RyanBowerHasJoinedTheConversation.mp3',
		ready: false
	}, {
		id: 246,
		label: 'Ryan Join Meeting',
		category: AudioCategory.Voices,
		source: 'RyanBowerHasJoinedTheMeeting.mp3',
		ready: true
	}, {
		id: 256,
		label: 'Ryan Join Standup',
		category: AudioCategory.Voices,
		source: 'RyanBowerHasJoinedTheStandup.mp3',
		ready: true
	}, {
		id: 248,
		label: 'Ryan Left Conference',
		category: AudioCategory.Voices,
		source: 'RyanBowerHasLeftTheConference.mp3',
		ready: false
	}, {
		id: 257,
		label: 'Ryan Left Conversation',
		category: AudioCategory.Voices,
		source: 'RyanBowerHasLeftTheConversation.mp3',
		ready: false
	}, {
		id: 249,
		label: 'Ryan Left Meeting',
		category: AudioCategory.Voices,
		source: 'RyanBowerHasLeftTheMeeting.mp3',
		ready: true
	}, {
		id: 258,
		label: 'Ryan Left Standup',
		category: AudioCategory.Voices,
		source: 'RyanBowerHasLeftTheStandup.mp3',
		ready: true
	},
	
	/* S */
	
	{
		id: 164,
		label: 'Say What',
		category: AudioCategory.Voices,
		source: 'SayWhat.mp3'
	}, {
		id: 165,
		label: 'Say Your Prayers',
		category: AudioCategory.LooneyTunes,
		source: 'SayYourPrayers.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
		id: 166,
		label: 'Screaming Goat',
		category: AudioCategory.Uncategorized,
		source: 'ScreamingGoat.mp3',
		icon: 'Goat_24x24.png'
	}, {
		id: 167,
		label: 'Sharp As A Bowlin\' Ball',
		category: AudioCategory.LooneyTunes,
		source: 'SharpAsABowlinBall.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
		id: 168,
		label: 'Shh',
		category: AudioCategory.MyLittlePony,
		ready: true,
		source: 'Shh.mp3',
		icon: 'PinkiePie_34x24.png'
	}, {
		id: 169,
		label: 'Shh (Craig Picky)',
		category: AudioCategory.MyLittlePony,
		ready: true,
		source: 'ShhCraigPicky.mp3',
		icon: 'PinkiePie_34x24.png'
	}, {
		id: 170,
		label: 'Shh (Craig)',
		category: AudioCategory.MyLittlePony,
		ready: true,
		source: 'ShhCraig.mp3',
		icon: 'PinkiePie_34x24.png'
	}, {
		id: 171,
		label: 'Shh (Knock Knock)',
		category: AudioCategory.TV,
		ready: true,
		source: 'ShhKnockKnock.mp3',
		icon: 'DrEvil_28x28.png'
	}, {
		id: 172,
		label: 'Shh (Little Story)',
		category: AudioCategory.TV,
		ready: true,
		source: 'ShhLittleStory.mp3',
		icon: 'DrEvil_28x28.png'
	}, {
		id: 173,
		label: 'Shh (Not Helping)',
		category: AudioCategory.MyLittlePony,
		ready: true,
		source: 'ShhNotHelping.mp3',
		icon: 'PinkiePie_34x24.png'
	}, {
		id: 174,
		label: 'Shh (Short)',
		category: AudioCategory.Uncategorized,
		ready: true,
		source: 'ShhShort.mp3',
		icon: 'CraigOutten_28x28.png'
	}, {
		id: 175,
		label: 'Shh (Swimming)',
		category: AudioCategory.Animation,
		ready: true,
		source: 'ShhSwimming.mp3',
		icon: 'Nemo_35x26.png'
	}, {
		id: 176,
		label: 'Shh (Whole Bag)',
		category: AudioCategory.TV,
		ready: true,
		source: 'ShhWholeBag.mp3',
		icon: 'DrEvil_28x28.png'
	}, {
		id: 177,
		label: 'Shh 2',
		category: AudioCategory.Animation,
		ready: true,
		source: 'Shh2.mp3',
		icon: 'Nemo_35x26.png'
	}, {
		id: 178,
		label: 'Show Little Egghead',
		category: AudioCategory.LooneyTunes,
		source: 'ShowLittleEgghead.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
		id: 179,
		label: 'Shut Up!',
		category: AudioCategory.LooneyTunes,
		source: 'ShutUp.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
		id: 180,
		label: 'Shut Up! (Bang Bang)',
		category: AudioCategory.LooneyTunes,
		source: 'ShutUpBangBang.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
		id: 181,
		label: 'Silly Question',
		category: AudioCategory.LooneyTunes,
		source: 'SillyQuestion.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		id: 182,
		label: 'Slide Whistle',
		category: AudioCategory.FX,
		source: 'SlideWhistle.mp3',
		icon: 'FX_20x20.png'
	}, {
		id: 183,
		label: 'Smells Really Good',
		category: AudioCategory.Voices,
		source: 'ItSmellsReallyGood.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 184,
		label: 'Snoring',
		category: AudioCategory.FX,
		source: 'Snoring.mp3',
		icon: 'FX_20x20.png'
	}, {
		id: 185,
		label: 'So Long Screwy',
		category: AudioCategory.LooneyTunes,
		source: 'SoLongScrewy.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		id: 186,
		label: 'Stand Up',
		category: AudioCategory.Uncategorized,
		ready: true,
		source: 'StandUp.mp3',
		icon: 'RobPoole_24x24_2.png'
	}, {
		id: 187,
		label: 'Stevenson Sold Me',
		category: AudioCategory.Heather,
		source: 'StevensonSoldMe.mp3',
		icon: 'HeatherFleischmann2_24x42.png'
	}, {
		id: 188,
		label: 'Stinky Blanket Burn',
		category: AudioCategory.TV,
		source: 'StinkyBlanketBurn.mp3',
		icon: 'MichaelKelso_28x28.png'
	}, {
		id: 189,
		label: 'Strong As An Ox',
		category: AudioCategory.LooneyTunes,
		source: 'StrongAsAnOx.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
		id: 190,
		label: 'Stutter',
		category: AudioCategory.Heather,
		source: 'Stutter.mp3',
		icon: 'HeatherFleischmann2_24x42.png'
	}, {
		id: 191,
		label: 'Sufferin\' Succotash',
		category: AudioCategory.LooneyTunes,
		source: 'SufferinSuccotash.mp3',
		icon: 'SylvesterCat_13x24.png'
	},
	
	/* T */
	
	{
		id: 192,
		label: 'Take You Apart',
		category: AudioCategory.LooneyTunes,
		source: 'TakeYouApart.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		id: 193,
		label: 'Talk Me Into This',
		category: AudioCategory.Voices,
		source: 'ICantBelieveILetYou.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 194,
		label: 'Telling Me Something',
		category: AudioCategory.Voices,
		source: 'IThinkThatThisIs.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 195,
		label: 'Thank God It\'s Friday',
		category: AudioCategory.Voices,
		source: 'ThankGodItsFriday.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 196,
		label: 'That Was A Joke Girl',
		category: AudioCategory.LooneyTunes,
		source: 'ThatWasAJokeGirl.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
		id: 197,
		label: 'Thats All Folks',
		category: AudioCategory.LooneyTunes,
		source: 'ThatsAllFolks.mp3',
		icon: 'Porky_24x24.png'
	}, {
		id: 198,
		label: 'That\'s Funny',
		category: AudioCategory.Animation,
		source: 'ThatsFunny.mp3',
		icon: 'TowMater_28x28.png'
	}, {
		id: 199,
		label: 'Tire Screech',
		category: AudioCategory.FX,
		source: 'TireScreech.mp3',
		icon: 'FX_20x20.png'
	}, {
		id: 200,
		label: 'Triple Decker Burn',
		category: AudioCategory.TV,
		source: 'TripleDeckerBurn.mp3',
		icon: 'MichaelKelso_28x28.png'
	}, {
		id: 233,
		label: 'Truck Horn 1',
		category: AudioCategory.FX,
		source: 'TruckHorn1.mp3',
		icon: 'SemiTruck_35x24.png'
	}, {
		id: 234,
		label: 'Truck Horn 2',
		category: AudioCategory.FX,
		source: 'TruckHorn2.mp3',
		icon: 'SemiTruck_35x24.png'
	},
	
	/* U */
	
	{
		id: 201,
		label: 'Unwarranted Attack',
		category: AudioCategory.LooneyTunes,
		source: 'UnwarrantedAttack.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	},
	
	/* V */
	
	{
		id: 202,
		label: 'Verizon Ringtone 1',
		category: AudioCategory.Uncategorized,
		source: 'VerizonRingtone1.mp3',
		icon: 'CellPhone_20x24.png'
	},
	
	/* W */
	
	{
		id: 203,
		label: 'Walmart Yodeling Kid',
		category: AudioCategory.YodelerKid,
		source: 'WalmartYodelingKid.mp3',
		icon: 'YodelerKid_21x24.png'
	}, {
		id: 204,
		label: 'Want An M&M?',
		category: AudioCategory.TV,
		source: 'WantAnMnM.mp3',
		icon: 'KevinMalone_28x28.png'
	}, {
		id: 205,
		label: 'We Jumped Out A Window',
		category: AudioCategory.Animation,
		source: 'WeJumpedOutAWindow.mp3',
		icon: 'Baymax_22x24.png'
	}, {
		id: 206,
		label: 'Welcome To Arbutus (Female)',
		category: AudioCategory.Voices,
		source: 'WelcomeToArbutus-Daisy-39404548.mp3',
		icon: 'RobPoole_24x24_2.png'
	}, {
		id: 207,
		label: 'Welcome To Arbutus (Male)',
		category: AudioCategory.Voices,
		source: 'WelcomeToArbutus-John-39404677.mp3',
		icon: 'RobPoole_24x24_2.png'
	}, {
		id: 208,
		label: 'What!',
		category: AudioCategory.Voices,
		source: 'What.mp3'
	}, {
		id: 209,
		label: 'What Did You Call Me',
		category: AudioCategory.Animation,
		source: 'WhatDidYouCallMe.mp3',
		icon: 'OakenFrozen_25x24.png'
	}, {
		id: 210,
		label: 'What Did You Say',
		category: AudioCategory.Uncategorized,
		source: 'WhatDidYouSay.mp3',
		icon: 'FlyingV_31x24.png'
	}, {
		id: 211,
		label: 'What I Think',
		category: AudioCategory.Voices,
		source: 'IllTellYouWhatIThink.mp3',
		icon: 'Voices_36x26.png'
	}, {
		id: 212,
		label: 'What\'s Goin\' On Here',
		category: AudioCategory.LooneyTunes,
		source: 'WhatsGoinOnHere.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
		id: 213,
		label: 'What\'s Up Doc',
		category: AudioCategory.LooneyTunes,
		source: 'WhatsUpDoc.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		id: 214,
		label: 'Where\'d You Go?',
		category: AudioCategory.LooneyTunes,
		source: 'WheredYouGo.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		id: 215,
		label: 'Woe!',
		category: AudioCategory.LooneyTunes,
		source: 'Woe.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
		id: 216,
		label: 'Wonderful Idea',
		category: AudioCategory.LooneyTunes,
		source: 'WonderfulIdea.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		id: 217,
		label: 'Wrong',
		category: AudioCategory.Voices,
		source: 'Wrong.mp3',
		icon: 'DonaldTrump_29x24.png'
	}, {
		id: 244,
		label: 'Wrong 100%',
		category: AudioCategory.Voices,
		source: 'Wrong100Percent.mp3',
		icon: 'DonaldTrump_29x24.png'
	}, {
		id: 245,
		label: 'Wrong 2',
		category: AudioCategory.Voices,
		source: 'Wrong2.mp3',
		icon: 'DonaldTrump_29x24.png'
	}, {
		id: 218,
		label: 'Wrong Wrong Wrong',
		category: AudioCategory.TV,
		source: 'WrongWrongWrong.mp3',
		icon: 'DrPerryCox_18x28.png'
	},

	/* X */

	/* Y */
	
	{
		id: 219,
		label: 'Ya Fights My Way',
		category: AudioCategory.LooneyTunes,
		source: 'YaFightsMyWay.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
		id: 220,
		label: 'Ya Gotta Go',
		category: AudioCategory.LooneyTunes,
		source: 'YaGottaGo.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
		id: 221,
		label: 'Ya Killing Me',
		category: AudioCategory.LooneyTunes,
		source: 'YaKillingMe.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		id: 222,
		label: 'Ya Way Off',
		category: AudioCategory.LooneyTunes,
		source: 'YaWayOff.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
		id: 223,
		label: 'Yaaaaaaay',
		category: AudioCategory.Voices,
		source: 'Yay.mp3',
		icon: 'Cheering_19x28.png'
	}, {
		id: 224,
		label: 'Yankee About',
		category: AudioCategory.LooneyTunes,
		source: 'YankeeAbout.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
		id: 225,
		label: 'Yeah',
		category: AudioCategory.Voices,
		source: 'Yeah.mp3'
	}, {
		id: 226,
		label: 'You Idgit!',
		category: AudioCategory.LooneyTunes,
		source: 'YouIdgit.mp3',
		icon: 'YosemiteSam_24x24.png'
	}, {
		id: 227,
		label: 'You\'ll Be Sorry!',
		category: AudioCategory.LooneyTunes,
		source: 'YoullBeSorry.mp3',
		icon: 'BugsBunny_15x24.png'
	}, {
		id: 228,
		label: 'Your Tongue\'s Flappin\'',
		category: AudioCategory.LooneyTunes,
		source: 'YourTonguesFlappin.mp3',
		icon: 'FoghornLeghorn_16x24.png'
	}, {
		id: 229,
		label: 'You\'re Welcome',
		category: AudioCategory.Voices,
		ready: true,
		source: 'YoureWelcome.mp3',
		icon: 'Obama_24x24.png'
	}, {
		id: 230,
		label: 'You\'re Welcome 2',
		category: AudioCategory.Voices,
		ready: true,
		source: 'YoureWelcome2.mp3',
		icon: 'Obama_24x24.png'
	}, {
		id: 232,
		label: 'You\'re Welcome 3',
		category: AudioCategory.Voices,
		ready: true,
		source: 'YoureWelcome3.mp3',
		icon: 'Obama_24x24.png'
	}

	/* Z */
];
