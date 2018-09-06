import { AudioCategory } from "../audio";

export interface AudioGroup {
  category: AudioCategory;
  label?: string;
  icon?: string;
};

export const AUDIO_GROUPS:AudioGroup[] = [
  { // Uncategorized
    category: AudioCategory.Uncategorized,
    icon: 'CraigOutten_28x28.png'
  }, { // Animation
    category: AudioCategory.Animation,
    icon: 'TheMinion_21x28.png'
  }, { // FX
    category: AudioCategory.FX,
    icon: 'FX_20x20.png'
  }, { // Heather
    category: AudioCategory.Heather,
    icon: 'HeatherFleischmann2_24x42.png'
  }, { // Looney Tunes
    category: AudioCategory.LooneyTunes,
    icon: 'Porky_24x24.png'
  }, { // My Little Pony
    category: AudioCategory.MyLittlePony,
    icon: 'PinkiePie_34x24.png',
  }, { // TV
    category: AudioCategory.TV,
    icon: 'MichaelScott_28x28.png',
  }, { // Voices
    category: AudioCategory.Voices,
    icon: 'Voices_36x26.png'
  }, { // Yodeler Kid
    category: AudioCategory.YodelerKid,
    icon: 'YodelerKid_21x24.png'
  }
];
