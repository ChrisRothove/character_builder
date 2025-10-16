import { Mastery } from "@app-types/character";
import CrownIcon from "@components/bling/CrownIcon";
import { ChangeEvent, useState } from "react";

export default function MasteryInput({
  mastery,
  updateMastery,
}: {
  mastery: Mastery;
  updateMastery: (mastery: Mastery) => void;
}) {
  const [open, setOpen] = useState(true);
  const [newMastery, setNewMastery] = useState(mastery);
  const { name, description, rank } = newMastery;
  // Component Changes
  const toggle = () => setOpen(!open);
  const update = (value: string | number, key: string) => {
    setNewMastery((prev: Mastery) => ({ ...prev, [key]: value }));
  };
  // Committing Changes
  const saveChanges = () => {
    updateMastery(newMastery);
    toggle();
  };
  return open ? (
    <div className="command-list-item">
      <span>
        <input
          type="text"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            update(e.target.value, "name")
          }
        ></input>
        <button disabled={rank <= 0} onClick={() => update(rank - 1, "rank")}>
          -
        </button>{" "}
        <span>
          {rank}/{5}
        </span>{" "}
        <button disabled={rank >= 5} onClick={() => update(rank + 1, "rank")}>
          +
        </button>
        <br />
        <textarea
          rows={3}
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
        <CrownIcon isOn />
        <b>
          {name} [{rank}/5]
        </b>
        <div style={{ width: "250px" }}>{description}</div>
      </span>
      <button className="yellow-button" onClick={toggle}>
        EDIT
      </button>
    </div>
  );
}
