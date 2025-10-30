import { Character, Link } from "@app-types/character";
import LinkInput from "./inputs/LinkInput";
import { LinkType } from "@app-types/enums";

const DEFAULT_LINK = {
  name: "Link Name",
  type: LinkType.Friend,
  rank: 1,
};

export default function LinksPanel({
  character,
  updateCharacter,
}: {
  character: Character;
  updateCharacter: <K extends keyof Character>(
    key: K,
    value: Character[K]
  ) => void;
}) {
  const { links } = character;

  const updateLink = (newLink: Link, index: number) => {
    const newLinks = [...links];
    newLinks[index] = newLink;
    updateCharacter("links", newLinks);
  };

  const addNewLink = () => {
    const newLinks = [...links];
    newLinks.push(DEFAULT_LINK);
    updateCharacter("links", newLinks);
  };

  return (
    <article className="adv-panel">
      <h2 className="preview-header">Links</h2>
      {links.map((link, idx) => (
        <LinkInput
          link={link}
          updateLink={(link: Link) => updateLink(link, idx)}
        />
      ))}
      <button className="new-button" onClick={addNewLink}>
        <span>+</span>
      </button>
    </article>
  );
}
