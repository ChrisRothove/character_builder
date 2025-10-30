import { Character, Command, Provision } from "@app-types/character";
import CrownIcon from "@components/bling/CrownIcon";

export default function DeckPanel({ character }: { character: Character }) {
  const { style, commands, provisions } = character;

  return (
    <article className="deck-preview">
      <h2 className="preview-header">{character.deckName}</h2>
      <h3>Style</h3>
      <div className="command-list-item">
        <span>{style.name}</span>
        <span>{style.points}</span>
      </div>
      <h3>Commands</h3>
      {commands.map((command: Command) => (
        <div className="command-list-item">
          <span>{command.name}</span>
          <span>
            <CrownIcon isOn={command.isMastered} />
            {command.cp}cp
          </span>
        </div>
      ))}
      {provisions.length > 0 && (
        <>
          <h3>Provisions</h3>
          {provisions.map((provision: Provision) => (
            <div className="command-list-item">
              <span>{provision.name}</span>
              <span>
                <CrownIcon isOn={provision.isMastered} />
                {provision.ip}cp
              </span>
            </div>
          ))}
        </>
      )}
    </article>
  );
}
