import { Character } from "@app-types/character";

export const getTotalAdvancements = (character: Character) => {
  return Object.values(character.advancements).reduce(
    (prv, cur) => prv + cur,
    0
  );
};