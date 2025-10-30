import { Character } from "@app-types/character";
import { getTotalAdvancements } from "utils/getTotalAdvancements";

type CharacterPanelProps = {
  character: Character;
};

export default function CharacterPanel({ character }: CharacterPanelProps) {
  return (
    <article className="char-preview">
      <div className="char-preview-container">
        <div className="char-data">
          <h2 className="preview-header">{character.name}</h2>
          <div className="char-stat-line">
            <span className="stat-name">ADV</span>
            <span className="stat-value">
              {getTotalAdvancements(character)}
            </span>
          </div>
          <div className="char-stat-line">
            <span className="stat-name">HP</span>
            <span className="stat-value">{character.resources.hp}</span>
          </div>
          <div className="char-stat-line">
            <span className="stat-name">IP</span>
            <span className="stat-value">{character.resources.ip}</span>
          </div>
          <div className="char-stat-line">
            <span className="stat-name">DECK</span>
            <span className="stat-value">
              {character.advancements.plusDeck + 2}
            </span>
          </div>
          <div className="char-stat-line">
            <span className="stat-name">PRV</span>
            <span className="stat-value">{character.provisionDice}</span>
          </div>
          <div className="char-stat-line">
            <span className="stat-name">STR</span>
            <span className="stat-value">{character.stats.strength}</span>
          </div>
          <div className="char-stat-line">
            <span className="stat-name">MAG</span>
            <span className="stat-value">{character.stats.magic}</span>
          </div>
          <div className="char-stat-line">
            <span className="stat-name">DEF</span>
            <span className="stat-value">{character.stats.defense}</span>
          </div>
          <div className="char-stat-line">
            <span className="stat-name">AGL</span>
            <span className="stat-value">{character.stats.agility}</span>
          </div>
          <div className="char-stat-line">
            <span className="stat-name">WEAK</span>
            <span className="stat-value">
              {character.weaknesses.join(", ")}
            </span>
          </div>
          <div className="char-stat-line">
            <span className="stat-name">RES</span>
            <span className="stat-value">
              {character.resistances.join(", ")}
            </span>
          </div>
        </div>
        <div className="char-images">
          <div
            style={{
              backgroundImage: `url("${character.config.imageOne}")`,
            }}
          ></div>
          <div
            style={{
              backgroundImage: `url("${character.config.imageTwo}")`,
            }}
          ></div>
          <div
            style={{
              backgroundImage: `url("${character.config.imageThree}")`,
            }}
          ></div>
        </div>
      </div>
    </article>
  );
}
