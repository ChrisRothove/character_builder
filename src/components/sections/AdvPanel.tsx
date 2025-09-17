import { Character } from "@app-types/character";
import CounterInput from "./inputs/CounterInput";
import { getTotalAdvancements } from "utils/getTotalAdvancements";

export default function AdvPanel({
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
    hpOrIp,
    statIncrease,
    plusCommand,
    plusDeck,
    plusProvision,
    plusMasteredCommand,
    weakAndRes,
    critHpOrIp,
    critStatIncrease,
    critMasteredCommand,
    critRefineStyle,
    critSignature,
    critKeyItem,
    critResist,
    critProvision,
  } = character.advancements;

  const changeAdvancements = async (key: string, newValue: number) => {
    const newAdvancements = {
      ...character.advancements,
      [key]: newValue,
    };

    await updateCharacter("advancements", newAdvancements);
  };

  return (
    <article className="adv-panel">
      <CounterInput
        name="HP+5 or IP+1"
        value={hpOrIp}
        max={6}
        onChange={(newValue) => changeAdvancements("hpOrIp", newValue)}
      />
      <CounterInput
        name="+1 Stat or Provision Dice Increase"
        value={statIncrease}
        max={1}
        onChange={(newValue) => changeAdvancements("statIncrease", newValue)}
      />
      <CounterInput
        name="+1 Command Deck"
        value={plusDeck}
        max={10}
        onChange={(newValue) => changeAdvancements("plusDeck", newValue)}
      />
      <CounterInput
        name="+1 Command"
        value={plusCommand}
        max={12}
        onChange={(newValue) => changeAdvancements("plusCommand", newValue)}
      />
      <CounterInput
        name="+1 Mastered Command"
        value={plusMasteredCommand}
        max={2}
        onChange={(newValue) =>
          changeAdvancements("plusMasteredCommand", newValue)
        }
      />
      <CounterInput
        name="+1 Provision"
        value={plusProvision}
        max={3}
        onChange={(newValue) => changeAdvancements("plusProvision", newValue)}
      />
      <CounterInput
        name="+1 Weakness/Resistance Pair"
        value={weakAndRes}
        max={2}
        onChange={(newValue) => changeAdvancements("weakAndRes", newValue)}
      />

      <h3></h3>
      <CounterInput
        name="HP+10 or IP+2"
        value={critHpOrIp}
        max={2}
        onChange={(newValue) => changeAdvancements("critHpOrIp", newValue)}
      />
      <CounterInput
        name="+1 Stat or Provision Dice Increase"
        value={critStatIncrease}
        max={1}
        onChange={(newValue) =>
          changeAdvancements("critStatIncrease", newValue)
        }
      />
      <CounterInput
        name="+1 Mastered Command or Provision"
        value={critMasteredCommand}
        max={2}
        onChange={(newValue) =>
          changeAdvancements("critMasteredCommand", newValue)
        }
      />
      <CounterInput
        name="+1 Point to Style"
        value={critRefineStyle}
        max={2}
        onChange={(newValue) => changeAdvancements("critRefineStyle", newValue)}
      />
      <CounterInput
        name="Make a Command your Signature Command"
        value={critSignature}
        max={1}
        onChange={(newValue) => changeAdvancements("critSignature", newValue)}
      />
      <CounterInput
        name="Make a Provision your Key Item"
        value={critKeyItem}
        max={1}
        onChange={(newValue) => changeAdvancements("critKeyItem", newValue)}
      />
      <CounterInput
        name="+1 Resistance"
        value={critResist}
        max={2}
        onChange={(newValue) => changeAdvancements("critResist", newValue)}
      />
      <CounterInput
        name="+1 Provision"
        value={critProvision}
        max={3}
        onChange={(newValue) => changeAdvancements("critProvision", newValue)}
      />
      <div className="command-list-item">
        <span>Total</span>
        <span>
          {getTotalAdvancements(character)}
          /50
        </span>
      </div>
    </article>
  );
}
