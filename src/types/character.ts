import { Stat, Origin, WeakRes, StatValue } from "./enums";

export interface Command {
  name: string;
  description: string;
  ip?: number;
  cp?: number;
  stat: Stat;
  isMastered?: boolean;
  isKeyItem?: boolean;
  isSignature?: boolean;
  isMirage?: boolean;
  isShop?: boolean;
}

export interface Provision {
  name: string;
  description: string;
  ip?: number;
  cp?: number;
  stat: Stat;
  isMastered?: boolean;
  isKeyItem?: boolean;
  isSignature?: boolean;
  isMirage?: boolean;
  isShop?: boolean;
}

export type Action = Command | Provision;

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
  provisions: Array<Provision>;
  resources: {
    hp: number;
    ip: number;
    ds: number;
    adv: number;
  };
  stats: {
    strength: StatValue;
    magic: StatValue;
    defense: StatValue;
    agility: StatValue;
  };
  weaknesses: Array<WeakRes>;
  resistances: Array<WeakRes>;
  masteries: Array<Mastery>;
  provisionDice: StatValue;
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