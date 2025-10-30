import { Character, Journal, Timeline } from "@app-types/character";
import { ChangeEvent, useState } from "react";

export default function JournalPanel({
  character,
  updateCharacter,
}: {
  character: Character;
  updateCharacter: <K extends keyof Character>(
    key: K,
    value: Character[K]
  ) => void;
}) {
  const [journals, setJournals] = useState(character.journalEntries);
  const [currentJournal, setCurrentJournal] = useState<number | null>(null);

  const updateJournal = <K extends keyof Timeline>(
    key: K,
    value: Timeline[K],
    index: number
  ) => {
    setJournals((prev) => {
      const newJournals = [...prev];
      newJournals[index][key] = value;
      return newJournals;
    });
  };

  const updateEntry = <K extends keyof Journal>(
    key: K,
    value: Journal[K],
    index: number
  ) => {
    const oldJournal = journals[currentJournal || 0];
    const newJournalEntries = [...oldJournal.entries];
    newJournalEntries[index][key] = value;
    updateJournal("entries", newJournalEntries, currentJournal || 0);
  };

  const saveJournal = () => {
    updateCharacter("journalEntries", journals);
    setCurrentJournal(null);
  };

  const addNewJournal = () => {
    setJournals([...journals, { name: "New Journal", entries: [] }]);
  };

  const addNewEntry = () => {
    const newJournalEntries = [...journals[currentJournal || 0].entries];
    newJournalEntries.push({
      name: "New Entry",
      description: "Desc here",
      url: "",
    });
    updateJournal("entries", newJournalEntries, currentJournal || 0);
  };

  const shouldDisable = (index: number) =>
    currentJournal !== null && index !== currentJournal;

  return (
    <>
      <article className="adv-panel">
        <h2 className="preview-header">Journals</h2>
        {journals.map((journal, idx) =>
          idx === currentJournal ? (
            <div className="command-list-item" key={"journal" + idx}>
              <span>
                <input
                  name="journalName"
                  type="text"
                  value={journal.name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updateJournal("name", e.target.value, idx)
                  }
                ></input>
              </span>
              <button className="yellow-button" onClick={saveJournal}>
                SAVE
              </button>
            </div>
          ) : (
            <div className="command-list-item" key={journal.name}>
              <span>{journal.name}</span>
              <button
                className="yellow-button"
                onClick={() => setCurrentJournal(idx)}
                disabled={shouldDisable(idx)}
              >
                EDIT
              </button>
            </div>
          )
        )}
        <button
          className="new-button"
          onClick={addNewJournal}
          disabled={currentJournal !== null}
        >
          <span>+</span>
        </button>
      </article>
      {currentJournal !== null && (
        <article className="adv-panel">
          <h2 className="preview-header">Entries</h2>
          {journals[currentJournal].entries.map((entry, idx) => (
            <div className="command-list-item" key={"entry" + idx}>
              <span>
                <label>
                  Title:{" "}
                  <input
                    type="text"
                    value={entry.name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      updateEntry("name", e.target.value, idx)
                    }
                  ></input>
                </label>
                <br />
                <label>
                  Url:{" "}
                  <input
                    type="text"
                    value={journals[currentJournal].entries[idx].url}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      updateEntry("url", e.target.value, idx)
                    }
                  ></input>
                </label>
                <br />
                <label>
                  Synopsis: <br />
                  <textarea
                    rows={3}
                    value={entry.description}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                      updateEntry("description", e.target.value, idx)
                    }
                  ></textarea>
                </label>
              </span>
            </div>
          ))}
          <button className="new-button" onClick={addNewEntry}>
            <span>+</span>
          </button>
        </article>
      )}
    </>
  );
}
