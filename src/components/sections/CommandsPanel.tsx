import { Character } from "@app-types/character";

export function CommandsPanel({
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
    commands,
    advancements: {
      plusCommand,
      plusDeck,
      plusMasteredCommand,
      critMasteredCommand,
      critSignature,
    },
  } = character;

  const totalMastered = commands.filter((command) => command.isMastered);
  const totalSig = commands.filter((command) => command.isSignature);
  const sigMax = critSignature ? 1 : 0;
  const masteredMax = plusMasteredCommand + critMasteredCommand;
  const max = 2 + plusCommand + masteredMax;
  return (
    <article className="adv-panel">
      <h2 className="preview-header">Commands</h2>
      <div className="command-list-item">
        <span>Total Commands</span>
        <span>
          {commands.length}/{max}{" "}
        </span>
      </div>
      <div className="command-list-item">
        <span>Max Deck Size</span>
        <span>{2 + plusDeck} </span>
      </div>
      <div className="command-list-item">
        <span>
          Mastered: {totalMastered.length}/{masteredMax}
        </span>
        <span>
          Signature: {totalSig.length}/{sigMax}
        </span>
      </div>
      <button className="new-button">
        <span>+</span>
      </button>
    </article>
  );
}
