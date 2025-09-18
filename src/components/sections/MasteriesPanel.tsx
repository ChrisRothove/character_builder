import { Character } from "@app-types/character";
import { getTotalAdvancements } from "utils/getTotalAdvancements";

export function MasteriesPanel({
  character,
}: // updateCharacter,
{
  character: Character;
  updateCharacter: <K extends keyof Character>(
    key: K,
    value: Character[K]
  ) => void;
}) {
  // const {
  //   masteries,
  // } = character;
  const advCount = getTotalAdvancements(character);
  const count = Math.floor(advCount / 5);
  return (
    <article className="adv-panel">
      <h2 className="preview-header">Masteries</h2>
      <div className="command-list-item">
        <span>Total Mastery Ranks</span>
        <span>{count}</span>
      </div>
    </article>
  );
}
