import { Style } from "@app-types/character";
import { ChangeEvent, useState } from "react";

export default function StyleInput({
  style,
  updateStyle,
  max,
}: {
  style: Style;
  updateStyle: (style: Style) => void;
  max: number;
}) {
  const [open, setOpen] = useState(true);
  const [newStyle, setNewStyle] = useState(style);
  const { name, description, points } = newStyle;
  // Component Changes
  const toggle = () => setOpen(!open);
  const update = (value: string | number, key: string) => {
    setNewStyle((prev: Style) => ({ ...prev, [key]: value }));
  };
  // Committing Changes
  const saveChanges = () => {
    updateStyle(newStyle);
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
        <button
          disabled={points <= 0}
          onClick={() => update(points - 1, "points")}
        >
          -
        </button>{" "}
        <span>
          {points}/{max}
        </span>{" "}
        <button
          disabled={points >= max}
          onClick={() => update(points + 1, "points")}
        >
          +
        </button>
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
          {name} [{points}/{max}]
        </b>
        <div style={{ width: "250px" }}>{description}</div>
      </span>
      <button className="yellow-button" onClick={toggle}>
        EDIT
      </button>
    </div>
  );
}
