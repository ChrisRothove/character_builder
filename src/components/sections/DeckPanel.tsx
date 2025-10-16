import { Character } from "@app-types/character";
import CrownIcon from "@components/bling/CrownIcon";

export default function DeckPanel({ character }: { character: Character }) {
  return (
    <article className="deck-preview">
      <h2 className="preview-header">{character.deckName}</h2>
      <h3>Style</h3>
      <div className="command-list-item">
        <span>Master of Magic</span>
        <span>5pts</span>
      </div>
      <h3>Commands</h3>
      <div className="command-list-item">
        <span>Magic Hour</span>
        <span>
          <CrownIcon isOn={true} />
          6cp
        </span>
      </div>
      <div className="command-list-item">
        <span>Teleport Strike</span>
        <span>
          <CrownIcon isOn={false} />
          4cp
        </span>
      </div>
      <div className="command-list-item">
        <span>Triple Blizzaga</span>
        <span>
          <CrownIcon isOn={false} />
          4cp
        </span>
      </div>
      <div className="command-list-item">
        <span>Thundaga Shot</span>
        <span>
          <CrownIcon isOn={false} />
          4cp
        </span>
      </div>
      <div className="command-list-item">
        <span>Fusion Firaga</span>
        <span>
          <CrownIcon isOn={false} />
          4cp
        </span>
      </div>
    </article>
  );
}
