import { Stat, Origin, Ailment, Element } from "./enums";

export type Command = {
  name: string;
  description: string;
  cp: number;
  stat: Stat;
}

export type Style = {
  name: string;
  description: string;
  points: number;
}

export type Mastery = {
  name: string;
  description: string;
  rank: number;
}

export type Link = {
  name: string;
  rank: number;
  linkCommand?: Command;
  linkCommandTwo?: Command;
  linkStyle?: Style;
  linkStyleTwo?: Style;
}

export type Journal = {
  name: string;
  description: string;
  url: string;
}

export type Character = {
  name: string;
  deckName: string;
  posts: number;
  origin: Origin;
  style: Style;
  commands: Array<Command>;
  resources: {
    hp: number;
    ip: number;
    ds: number;
    adv: number;
  };
  stats: {
    strength: string;
    magic: string;
    defense: string;
    agility: string;
  };
  weaknesses: Array<Ailment | Element>;
  resistances: Array<Ailment | Element>;
  masteries: Array<Mastery>;
  provisionDice: string;
  advancements: {
    hpOrIp: number;
    statIncrease: number;
    plusCommand: number;
    plusDeck: number;
    plusProvision: number;
    plusMasteredCommand: number;
    weakAndRes: number;
    critHpOrIp: number;
    critStatIncrease: number;
    critMasteredCommand: number;
    critRefineStyle: number;
    critSignature: number;
    critKeyItem: number;
    critResist: number;
    critProvision: number;
  };
  links: Array<Link>;
  journalEntries: Array<Journal>;
}