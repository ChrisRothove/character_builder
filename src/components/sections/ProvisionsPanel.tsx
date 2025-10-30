import { Character, Provision } from "@app-types/character";
import ActionInput from "./inputs/ActionInput";
import { Stat } from "@app-types/enums";

const DEFAULT_PROVISION = {
  name: "New Provision",
  description: "description",
  ip: 1,
  stat: Stat.NONE,
  isMastered: false,
  isKeyItem: false,
  isMirage: false,
  isShop: false,
};

export function ProvisionsPanel({
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

  const updateProvisions = (newProvision: Provision, index: number) => {
    const newProvisions = [...provisions];
    newProvisions[index] = newProvision;
    updateCharacter("provisions", newProvisions);
  };

  const addNewProvision = () => {
    const newProvisions = [...provisions];
    newProvisions.push(DEFAULT_PROVISION);
    updateCharacter("provisions", newProvisions);
  };

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
      {provisions.map((provision, idx) => (
        <ActionInput
          action={provision}
          updateAction={(action: Provision) => updateProvisions(action, idx)}
        />
      ))}
      <button className="new-button" onClick={addNewProvision}>
        <span>+</span>
      </button>
    </article>
  );
}
