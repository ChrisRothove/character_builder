import { Command, Link, Style } from "@app-types/character";
import { LinkType, Stat } from "@app-types/enums";
import CrownIcon from "@components/bling/CrownIcon";
import { ChangeEvent, useState } from "react";
import { DEFAULT_COMMAND } from "../CommandsPanel";

const DEFAULT_STYLE = {
  name: "default name",
  description: "desc here",
  points: 1,
};

function LinkCommand<K extends keyof Link>({
  value,
  commandKey,
  updateFunction,
}: {
  value: Command;
  commandKey: K;
  updateFunction: <K extends keyof Link>(
    value: string | boolean | number,
    commandKey: K,
    key: string
  ) => void;
}) {
  const {
    name,
    description,
    cp = 0,
    stat,
    isShop,
    isMirage,
    isSignature,
    isSubCommand,
  } = value;
  return (
    <span>
      <CrownIcon isOn={cp >= 5} />
      <input
        type="text"
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          updateFunction(e.target.value, commandKey, "name")
        }
      ></input>
      <button
        disabled={cp <= 0}
        onClick={() => updateFunction(cp - 1, commandKey, "cp")}
      >
        -
      </button>{" "}
      <span>
        {cp}/{6}
      </span>{" "}
      <button
        disabled={cp >= 6}
        onClick={() => updateFunction(cp + 1, commandKey, "cp")}
      >
        +
      </button>
      <br />
      <label>
        Stat:
        <select
          name="name"
          id={`${name}-select`}
          value={stat}
          onChange={(e) => updateFunction(e.target.value, commandKey, "stat")}
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
          onChange={() =>
            updateFunction(!isSubCommand, commandKey, "isSubCommand")
          }
        ></input>
        Sub Command
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="isShop"
          checked={isShop}
          onChange={() => updateFunction(!isShop, commandKey, "isShop")}
        ></input>
        Shop Item
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="isMirage"
          checked={isMirage}
          onChange={() => updateFunction(!isMirage, commandKey, "isMirage")}
        ></input>
        Mirage Reward
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="isSignature"
          checked={isSignature}
          onChange={() =>
            updateFunction(!isSignature, commandKey, "isSignature")
          }
        ></input>
        Signature Command
      </label>
      <br />
      <textarea
        rows={6}
        value={description}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          updateFunction(e.target.value, commandKey, "description")
        }
      ></textarea>
    </span>
  );
}

function LinkStyle<K extends keyof Link>({
  value,
  styleKey,
  updateFunction,
}: {
  value: Style;
  styleKey: K;
  updateFunction: <K extends keyof Link>(
    value: string,
    styleKey: K,
    key: string
  ) => void;
}) {
  const { name, description } = value;
  return (
    <span>
      <input
        type="text"
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          updateFunction(e.target.value, styleKey, "name")
        }
      ></input>{" "}
      1 Point
      <br />
      <textarea
        rows={6}
        value={description}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          updateFunction(e.target.value, styleKey, "description")
        }
      ></textarea>
    </span>
  );
}

export default function LinkInput({
  link,
  updateLink,
}: {
  link: Link;
  updateLink: (link: Link) => void;
}) {
  const [open, setOpen] = useState(false);
  const [newLink, setNewLink] = useState(link);
  const {
    name,
    type,
    rank,
    linkCommand,
    linkCommandTwo,
    linkStyle,
    linkStyleTwo,
  } = newLink;
  const isRival = type === LinkType.Rival;
  const isFriend = type === LinkType.Friend;
  const isEnemy = type === LinkType.Enemy;

  const toggle = () => setOpen(!open);
  const update = (
    value: string | number | LinkType | Command | Style,
    key: string
  ) => {
    console.log(`${key}: ${value}`);
    const updatedLink = { ...newLink, [key]: value };
    setNewLink(updatedLink);
  };

  const updateCommand = <K extends keyof Link>(
    value: string | boolean | number,
    commandKey: K,
    key: string
  ) => {
    const newCommand = { ...(newLink[commandKey] as Command), [key]: value };
    update(newCommand, commandKey);
  };

  const updateStyle = <K extends keyof Link>(
    value: string,
    styleKey: K,
    key: string
  ) => {
    const newStyle = { ...(newLink[styleKey] as Style), [key]: value };
    update(newStyle, styleKey);
  };

  const saveChanges = () => {
    updateLink(newLink);
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
          {rank}/{3}
        </span>{" "}
        <button disabled={rank >= 3} onClick={() => update(rank + 1, "rank")}>
          +
        </button>
        <br />
        <label>
          Type:
          <select
            name="name"
            id={`${name}-select`}
            value={type}
            onChange={(e) => update(e.target.value, "type")}
          >
            {Object.values(LinkType).map((opt, idx) => (
              <option value={opt} key={`${opt}-${idx}`}>
                {opt}
              </option>
            ))}
          </select>
        </label>
        {(isFriend || isRival) && rank >= 0 && (
          <>
            <h3>Friend Command</h3>
            <LinkCommand
              value={linkCommand || DEFAULT_COMMAND}
              commandKey="linkCommand"
              updateFunction={updateCommand}
            />
          </>
        )}
        {(isFriend || isRival) && rank >= 2 && (
          <>
            <h3>Friend Style</h3>
            <LinkStyle
              value={linkStyle || DEFAULT_STYLE}
              styleKey="linkStyle"
              updateFunction={updateStyle}
            />
          </>
        )}
        {(isEnemy || isRival) && rank >= 0 && (
          <>
            <h3>Enemy Command</h3>
            <LinkCommand
              value={linkCommandTwo || DEFAULT_COMMAND}
              commandKey="linkCommandTwo"
              updateFunction={updateCommand}
            />
          </>
        )}
        {(isEnemy || isRival) && rank >= 2 && (
          <>
            <h3>Enemy Style</h3>
            <LinkStyle
              value={linkStyleTwo || DEFAULT_STYLE}
              styleKey="linkStyleTwo"
              updateFunction={updateStyle}
            />
          </>
        )}
      </span>
      <button className="yellow-button" onClick={saveChanges}>
        SAVE
      </button>
    </div>
  ) : (
    <div className="command-list-item">
      <span>
        <b>
          {name} [{rank}]
        </b>
      </span>
      <button className="yellow-button" onClick={toggle}>
        EDIT
      </button>
    </div>
  );
}
