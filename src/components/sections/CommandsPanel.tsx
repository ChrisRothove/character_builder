import { Character, Command } from "@app-types/character";
import ActionInput from "./inputs/ActionInput";
import { Stat } from "@app-types/enums";

const DEFAULT_COMMAND = {
  name: "New Command",
  description: "description",
  cp: 3,
  stat: Stat.NONE,
  isMastered: false,
  isSignature: false,
  isMirage: false,
  isShop: false,
};

export function CommandsPanel({
  character,
  updateCharacter,
}: {
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

  const updateCommands = (newCommand: Command, index: number) => {
    const newCommands = [...commands];
    newCommands[index] = newCommand;
    updateCharacter("commands", newCommands);
  };

  const addNewCommand = () => {
    const newCommands = [...commands];
    newCommands.push(DEFAULT_COMMAND);
    updateCharacter("commands", newCommands);
  };
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
      {commands.map((command, idx) => (
        <ActionInput
          action={command}
          updateAction={(action: Command) => updateCommands(action, idx)}
        />
      ))}
      <button className="new-button" onClick={addNewCommand}>
        <span>+</span>
      </button>
    </article>
  );
}
