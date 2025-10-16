import { Character, Mastery } from "@app-types/character";
import { getTotalAdvancements } from "utils/getTotalAdvancements";
import MasteryInput from "./inputs/MasteryInput";

const DEFAULT_MASTERY = {
  name: "New Mastery",
  description: "What did it cost?",
  rank: 0,
};
export function MasteriesPanel({
  character,
  updateCharacter,
}: {
  character: Character;
  updateCharacter: <K extends keyof Character>(
    key: K,
    value: Character[K]
  ) => void;
}) {
  const { masteries } = character;
  const advCount = getTotalAdvancements(character);
  const count = Math.floor(advCount / 5);

  const updateMastery = (newMastery: Mastery, index: number) => {
    const newMasteries = [...masteries];
    newMasteries[index] = newMastery;
    updateCharacter("masteries", newMasteries);
  };

  const newMastery = () => {
    const newMasteries = [...masteries];
    newMasteries.push({ ...DEFAULT_MASTERY });
    updateCharacter("masteries", newMasteries);
  };

  return (
    <article className="adv-panel">
      <h2 className="preview-header">Masteries</h2>
      <div className="command-list-item">
        <span>Mastery Ranks from Advancements</span>
        <span>{count}</span>
      </div>
      {masteries.map((mastery, idx) => (
        <MasteryInput
          mastery={mastery}
          updateMastery={(value) => updateMastery(value, idx)}
        />
      ))}
      <button className="new-button" onClick={newMastery}>
        <span>+</span>
      </button>
    </article>
  );
}
