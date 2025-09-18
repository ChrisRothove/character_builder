import { Character } from "@app-types/character";

export function ProvisionsPanel({
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
    provisions,
    advancements: {
      plusProvision,
      critProvision,
      plusMasteredCommand,
      critMasteredCommand,
      critKeyItem,
    },
  } = character;

  const totalMastered = provisions.filter((prov) => prov.isMastered);
  const totalKey = provisions.filter((prov) => prov.isKeyItem);
  const sigMax = critKeyItem ? 1 : 0;
  const masteredMax = plusMasteredCommand + critMasteredCommand;
  const max = critProvision + plusProvision + masteredMax;
  return (
    <article className="adv-panel">
      <h2 className="preview-header">Provisions</h2>
      <div className="command-list-item">
        <span>Total Provisions</span>
        <span>
          {provisions.length}/{max}{" "}
        </span>
      </div>
      <div className="command-list-item">
        <span>
          Mastered: {totalMastered.length}/{masteredMax}
        </span>
        <span>
          Signature: {totalKey.length}/{sigMax}
        </span>
      </div>
    </article>
  );
}
