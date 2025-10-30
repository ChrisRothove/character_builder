import { Character } from "@app-types/character";
import { SaveFileInput } from "./inputs/SaveFileInput";

export default function DataPanel({
  characters,
  updateCharacter,
  selectCharacter,
  addCharacter,
  currentCharacterIndex,
}: {
  characters: Array<Character>;
  updateCharacter: <K extends keyof Character>(
    key: K,
    value: Character[K]
  ) => void;
  selectCharacter: (index: number) => void;
  addCharacter: () => void;
  currentCharacterIndex: number;
}) {
  return (
    <article className="adv-panel">
      <h2 className="preview-header">Save Files</h2>
      {characters.map((character, idx) => (
        <SaveFileInput
          character={character}
          selectCharacter={selectCharacter}
          updateCharacter={updateCharacter}
          isActive={idx === currentCharacterIndex}
          index={idx}
          key={"char" + character.id}
        />
      ))}
      <button className="new-button" onClick={addCharacter}>
        <span>+</span>
      </button>
    </article>
  );
}
