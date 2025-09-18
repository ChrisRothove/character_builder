/* eslint-disable react-hooks/exhaustive-deps */
import { Character } from "@app-types/character";
import { Origin, StatValue } from "@app-types/enums";
import { useEffect, useState } from "react";

const LS_KEY = 'characters'
const DEFAULT_CHARACTER: Character = {
  name: 'Character Name',
  deckName: 'Deck Name',
  posts: 0,
  origin: Origin.novice,
  style: {
    name: 'Style Name',
    description: 'desc here',
    points: 3
  },
  resources: {
    hp: 30,
    ip: 10,
    ds: 2,
    adv: 5
  },
  stats: {
    strength: StatValue.d8,
    magic: StatValue.d8,
    defense: StatValue.d8,
    agility: StatValue.d10
  },
  provisionDice: StatValue.d6,
  commands: [],
  provisions: [],
  weaknesses: [],
  resistances: [],
  masteries: [],
  advancements: {
    hpOrIp: 0,
    statIncrease: 0,
    plusCommand: 0,
    plusDeck: 0,
    plusProvision: 0,
    plusMasteredCommand: 0,
    weakAndRes: 0,
    critHpOrIp: 0,
    critStatIncrease: 0, 
    critMasteredCommand: 0,
    critRefineStyle: 0,
    critSignature: 0,
    critKeyItem: 0,
    critResist: 0,
    critProvision: 0
  },
  links: [],
  journalEntries: []
}

export default function useCharacters(characterData: {characters: Array<Character>, setCharacters: (characters: Array<Character>) => void}) {
  const [index, setIndex] = useState<number>(0);
  const getLocalCharacters = () => JSON.parse(localStorage.getItem(LS_KEY) || '[]');

  const localCharacters = getLocalCharacters();
  if (localCharacters.length < 1) {
    localStorage.setItem(LS_KEY, JSON.stringify([DEFAULT_CHARACTER]));
  }

  useEffect(() => {
    const localStorageCharacters = getLocalCharacters();
    characterData.setCharacters(localStorageCharacters);
  }, []);

  const updateCharacter = <K extends keyof Character>(key: K, value: Character[K]): void => {
    const localStorageCharacters = getLocalCharacters();
    console.log(key, value)
    const newCharacter: Character = {
      ...localStorageCharacters[index],
      [key]: value
    }

    localStorageCharacters[index] = newCharacter;
    localStorage.setItem(LS_KEY, JSON.stringify(localStorageCharacters));
    characterData.setCharacters(localStorageCharacters);
  }

  const getCharacterData = () => {
    return getLocalCharacters();
  }

  const selectCharacter = (newIndex: number) => {
    setIndex(newIndex);
  }

  return {
    updateCharacter,
    getCharacterData,
    selectCharacter,
    currentCharacter: getLocalCharacters()[0] || DEFAULT_CHARACTER
  }
}