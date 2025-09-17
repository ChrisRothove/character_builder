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
            <span className="stat-value">{character.resources.ds}</span>
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
              backgroundImage:
                'url("https://media3.giphy.com/media/zpCUgLwCBaZ1e/200w.gif?cid=6c09b952xe3ymsmm1e8alpf65elsbcal8h0531o51o24konq&ep=v1_gifs_search&rid=200w.gif&ct=g")',
            }}
          ></div>
          <div
            style={{
              backgroundImage:
                'url("https://rukminim2.flixcart.com/image/750/900/l1pc3gw0/poster/0/y/e/medium-aqua-kingdom-hearts-matte-finish-poster-butcutnw8632-original-imagd7d6jafteagn.jpeg?q=20&crop=false")',
            }}
          ></div>
          <div
            style={{
              backgroundImage:
                'url("https://media1.tenor.com/images/93ca41721d94178e1bbc6075115f40b5/tenor.gif?itemid=12236710")',
            }}
          ></div>
        </div>
      </div>
    </article>
  );
}
