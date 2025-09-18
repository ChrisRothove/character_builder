import useCharacters from "@components/hooks/useCharacters";
import "@styles/MenuLayout.css";
import { Character } from "@app-types/character";
import { useState } from "react";
import CharacterPanel from "@components/sections/CharacterPanel";
import DeckPanel from "@components/sections/DeckPanel";
import AdvPanel from "@components/sections/AdvPanel";
import StatPanel from "@components/sections/StatPanel";
import { MasteriesPanel } from "@components/sections/MasteriesPanel";
import { StylePanel } from "@components/sections/StylePanel";
import { CommandsPanel } from "@components/sections/CommandsPanel";
import { ProvisionsPanel } from "@components/sections/ProvisionsPanel";

type MenuLayoutProps = {
  characters: Array<Character>;
  setCharacters: (characters: Array<Character>) => void;
};

enum MenuPage {
  HOME = "",
  ADVANCEMENTS = "- Advancements",
  STATS = "- Stats",
  MASTERIES = "- Masteries",
  STYLE = "- Style",
  COMMANDS = "- Commands",
  PROVISIONS = "- Provisions",
  LINKS = "- Links",
  JOURNAL = "- Journal",
  CONFIG = "- Config",
  DATA = "- Data",
}

export default function MenuLayout({
  characters,
  setCharacters,
}: MenuLayoutProps) {
  const [menuPage, setMenuPage] = useState(MenuPage.HOME);
  const setNewPage = (newPage: MenuPage) => {
    return () => {
      if (menuPage === newPage) {
        setMenuPage(MenuPage.HOME);
      } else {
        setMenuPage(newPage);
      }
    };
  };
  const {
    updateCharacter,
    // getCharacterData,
    // selectCharacter,
    currentCharacter,
  } = useCharacters({
    characters,
    setCharacters,
  });
  return (
    <main className="menu-wrapper">
      <header className="menu-header">
        <h1>MENU</h1>
        <h2>Command System Character Builder {menuPage}</h2>
      </header>
      <section className="menu-body">
        <article className="opt-buttons">
          <button onClick={setNewPage(MenuPage.HOME)}>Home</button>
          <button onClick={setNewPage(MenuPage.ADVANCEMENTS)}>
            Advancements
          </button>
          <button onClick={setNewPage(MenuPage.STATS)}>Stats</button>
          <button onClick={setNewPage(MenuPage.MASTERIES)}>Masteries</button>
          <button onClick={setNewPage(MenuPage.STYLE)}>Style</button>
          <button onClick={setNewPage(MenuPage.COMMANDS)}>Commands</button>
          <button onClick={setNewPage(MenuPage.PROVISIONS)}>Provisions</button>
          <button onClick={setNewPage(MenuPage.LINKS)}>Links</button>
          <button onClick={setNewPage(MenuPage.JOURNAL)}>Journal</button>
          <button onClick={setNewPage(MenuPage.CONFIG)}>Config</button>
          <button onClick={setNewPage(MenuPage.DATA)}>Data</button>
        </article>
        {menuPage === MenuPage.HOME && (
          <CharacterPanel character={currentCharacter} />
        )}
        {menuPage === MenuPage.HOME && (
          <DeckPanel character={currentCharacter} />
        )}
        {menuPage === MenuPage.ADVANCEMENTS && (
          <AdvPanel
            character={currentCharacter}
            updateCharacter={updateCharacter}
          />
        )}
        {menuPage === MenuPage.STATS && (
          <StatPanel
            character={currentCharacter}
            updateCharacter={updateCharacter}
          />
        )}
        {menuPage === MenuPage.MASTERIES && (
          <MasteriesPanel
            character={currentCharacter}
            updateCharacter={updateCharacter}
          />
        )}
        {menuPage === MenuPage.STYLE && (
          <StylePanel
            character={currentCharacter}
            updateCharacter={updateCharacter}
          />
        )}
        {menuPage === MenuPage.COMMANDS && (
          <CommandsPanel
            character={currentCharacter}
            updateCharacter={updateCharacter}
          />
        )}
        {menuPage === MenuPage.PROVISIONS && (
          <ProvisionsPanel
            character={currentCharacter}
            updateCharacter={updateCharacter}
          />
        )}
      </section>
      <footer className="menu-footer">
        <p>Choose a Sub-menu.</p>
      </footer>
    </main>
  );
}
