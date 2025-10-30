import { Action } from "@app-types/character";
import { Stat } from "@app-types/enums";
import CrownIcon from "@components/bling/CrownIcon";
import { ChangeEvent, useState } from "react";

export default function ActionInput({
  action,
  updateAction,
}: {
  action: Action;
  updateAction: (action: Action) => void;
}) {
  const [open, setOpen] = useState(false);
  const [newAction, setNewAction] = useState(action);
  const {
    name,
    description,
    stat,
    isMastered,
    isMirage,
    isShop,
    isSubCommand,
  } = newAction;

  const resKey = (newAction.ip || 0) > (newAction.cp || 0) ? "ip" : "cp";
  const res = (resKey === "ip" ? newAction.ip : newAction.cp) || 0;
  const isSpecial = newAction.isSignature || newAction.isKeyItem;
  const specialLabel = resKey === "cp" ? "Signature" : "Key Item";
  const specialname = resKey === "cp" ? "isSignature" : "isKeyItem";
  // Component Changes
  const toggle = () => setOpen(!open);
  const update = (value: string | number | boolean | Stat, key: string) => {
    const toMastered = (key === "ip" || key === "cp") && (value as number) >= 5;
    const fromMastered =
      (key === "ip" || key === "cp") && (value as number) <= 4;
    const shouldBeMastered =
      !toMastered && !fromMastered ? isMastered : toMastered;
    setNewAction((prev: Action) => ({
      ...prev,
      [key]: value,
      isMastered: shouldBeMastered,
    }));
  };
  // Committing Changes
  const saveChanges = () => {
    updateAction(newAction);
    toggle();
  };

  return open ? (
    <div className="command-list-item">
      <span>
        <CrownIcon isOn={isMastered} />
        <input
          type="text"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            update(e.target.value, "name")
          }
        ></input>
        <button disabled={res <= 0} onClick={() => update(res - 1, resKey)}>
          -
        </button>{" "}
        <span>
          {res}/{6}
        </span>{" "}
        <button disabled={res >= 6} onClick={() => update(res + 1, resKey)}>
          +
        </button>
        <br />
        <label>
          Stat:
          <select
            name="name"
            id={`${name}-select`}
            value={stat}
            onChange={(e) => update(e.target.value, "stat")}
          >
            {Object.values(Stat).map((opt, idx) => (
              <option value={opt} key={`${opt}-${idx}`}>
                {opt}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isSub"
            checked={isSubCommand}
            onChange={() => update(!isSubCommand, "isSubCommand")}
          ></input>
          Sub Command
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isShop"
            checked={isShop}
            onChange={() => update(!isShop, "isShop")}
          ></input>
          Shop Item
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isMirage"
            checked={isMirage}
            onChange={() => update(!isMirage, "isMirage")}
          ></input>
          Mirage Reward
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isSpecial"
            checked={isSpecial}
            onChange={() => update(!isSpecial, specialname)}
          ></input>
          {specialLabel}
        </label>
        <br />
        <textarea
          rows={6}
          value={description}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            update(e.target.value, "description")
          }
        ></textarea>
      </span>
      <button className="yellow-button" onClick={saveChanges}>
        SAVE
      </button>
    </div>
  ) : (
    <div className="command-list-item">
      <span>
        <b>
          <CrownIcon isOn={isMastered} /> {name} [{res}
          {resKey} | {stat}]
        </b>
      </span>
      <button className="yellow-button" onClick={toggle}>
        EDIT
      </button>
    </div>
  );
}
