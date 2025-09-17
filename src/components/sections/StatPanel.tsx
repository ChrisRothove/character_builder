import { Character } from "@app-types/character";
import CounterInput from "./inputs/CounterInput";
import SelectInput from "./inputs/SelectInput";
import { StatValue, WeakRes } from "@app-types/enums";
import { VariableSelect } from "./inputs/VariableSelect";

export default function StatPanel({
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
    stats: { strength, magic, defense, agility },
    resources: { hp, ip },
    provisionDice,
    weaknesses,
    resistances,
    advancements: { weakAndRes, critResist },
  } = character;

  const changeResource = (key: string, newValue: number) => {
    const newResources = {
      ...character.resources,
      [key]: newValue,
    };

    updateCharacter("resources", newResources);
  };

  const changeStat = (key: string, value: string) => {
    const newValue: StatValue = value as StatValue;

    updateCharacter("stats", {
      ...character.stats,
      [key]: newValue,
    });
  };

  return (
    <article className="adv-panel">
      <CounterInput
        name="HP"
        value={hp}
        max={80}
        increment={5}
        onChange={(newValue) => changeResource("hp", newValue)}
      />
      <CounterInput
        name="IP"
        value={ip}
        max={20}
        onChange={(newValue) => changeResource("ip", newValue)}
      />
      <h3>Dice</h3>
      <SelectInput
        name="Provision Dice"
        value={provisionDice}
        options={Object.values(StatValue)}
        onChange={(value) => updateCharacter("provisionDice", value)}
      />
      <SelectInput
        name="Strength"
        value={strength}
        options={Object.values(StatValue)}
        onChange={(value) => changeStat("strength", value)}
      />
      <SelectInput
        name="Magic"
        value={magic}
        options={Object.values(StatValue)}
        onChange={(value) => changeStat("magic", value)}
      />
      <SelectInput
        name="Defense"
        value={defense}
        options={Object.values(StatValue)}
        onChange={(value) => changeStat("defense", value)}
      />
      <SelectInput
        name="Agility"
        value={agility}
        options={Object.values(StatValue)}
        onChange={(value) => changeStat("agility", value)}
      />
      <h3>Resistances</h3>
      <VariableSelect
        name="resistance"
        value={resistances}
        count={1 + weakAndRes + critResist}
        defaultValue={WeakRes.None}
        options={Object.values(WeakRes)}
        onChange={(value) => updateCharacter("resistances", value)}
      />
      <h3>Weaknesses</h3>
      <VariableSelect
        name="weakness"
        value={weaknesses}
        count={weakAndRes}
        defaultValue={WeakRes.None}
        options={Object.values(WeakRes)}
        onChange={(value) => updateCharacter("weaknesses", value)}
      />
    </article>
  );
}
