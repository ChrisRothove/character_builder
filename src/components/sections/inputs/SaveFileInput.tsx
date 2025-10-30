import { Character, Config } from "@app-types/character";
import { ChangeEvent } from "react";

export function SaveFileInput({
  character,
  updateCharacter,
  isActive,
  selectCharacter,
  index,
}: {
  character: Character;
  updateCharacter: <K extends keyof Character>(
    key: K,
    value: Character[K]
  ) => void;
  isActive: boolean;
  selectCharacter: (index: number) => void;
  index: number;
}) {
  const { name, deckName, config } = character;

  const updateConfig = <K extends keyof Config>(key: K, value: Config[K]) => {
    const newConfig = { ...config, [key]: value };
    updateCharacter("config", newConfig);
  };
  console.log(isActive);
  return isActive ? (
    <div
      className="command-list-item save"
      style={{
        backgroundImage: `url("${character.config.imageOne}")`,
        backgroundColor: character.config.primaryColor,
        borderColor: character.config.secondaryColor,
        color: character.config.accentColor,
      }}
    >
      <span>
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              updateCharacter("name", e.target.value)
            }
          ></input>
        </label>
        <br />
        <label>
          Deck:{" "}
          <input
            type="text"
            value={deckName}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              updateCharacter("deckName", e.target.value)
            }
          ></input>
        </label>
        <br />
        <h3>Config</h3>
        <label>
          Primary Color:{" "}
          <input
            type="text"
            value={config.primaryColor}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              updateConfig("primaryColor", e.target.value)
            }
          ></input>
        </label>
        <br />
        <label>
          Secondary Color:{" "}
          <input
            type="text"
            value={config.secondaryColor}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              updateConfig("secondaryColor", e.target.value)
            }
          ></input>
        </label>
        <br />
        <label>
          Accent Color:{" "}
          <input
            type="text"
            value={config.accentColor}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              updateConfig("accentColor", e.target.value)
            }
          ></input>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="showMirage"
            checked={config.showMirage}
            onChange={() => updateConfig("showMirage", !config.showMirage)}
          ></input>
          Show Mirage
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="showLinks"
            checked={config.showLinks}
            onChange={() => updateConfig("showLinks", !config.showLinks)}
          ></input>
          Show Links
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="showTimelines"
            checked={config.showTimelines}
            onChange={() =>
              updateConfig("showTimelines", !config.showTimelines)
            }
          ></input>
          Show Journal
        </label>
        <br />
        <label>
          Image 1:{" "}
          <input
            type="text"
            value={config.imageOne}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              updateConfig("imageOne", e.target.value)
            }
          ></input>
        </label>
        <br />
        <label>
          Image 2:{" "}
          <input
            type="text"
            value={config.imageTwo}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              updateConfig("imageTwo", e.target.value)
            }
          ></input>
        </label>
        <br />
        <label>
          Image 3:{" "}
          <input
            type="text"
            value={config.imageThree}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              updateConfig("imageThree", e.target.value)
            }
          ></input>
        </label>
        <br />
      </span>
      <button className="yellow-button" disabled>
        Active
      </button>
    </div>
  ) : (
    <div
      className="command-list-item save-closed"
      style={{
        backgroundImage: `url("${character.config.imageOne}")`,
        backgroundColor: character.config.primaryColor,
        borderColor: character.config.secondaryColor,
        color: character.config.accentColor,
      }}
    >
      <span>
        <b>{name}</b>
        <br />
        {deckName}
        <br />
      </span>
      <button className="yellow-button" onClick={() => selectCharacter(index)}>
        Select
      </button>
    </div>
  );
}
