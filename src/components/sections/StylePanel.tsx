import { Character } from "@app-types/character";

export function StylePanel({
  character,
}: // updateCharacter,
{
  character: Character;
  updateCharacter: <K extends keyof Character>(
    key: K,
    value: Character[K]
  ) => void;
}) {
  const {
    // style,
    advancements: { critRefineStyle },
  } = character;

  const count = 3 + critRefineStyle;
  return (
    <article className="adv-panel">
      <h2 className="preview-header">Style</h2>
      <div className="command-list-item">
        <span>Total Style Points</span>
        <span>{count}</span>
      </div>
    </article>
  );
}
