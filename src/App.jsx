import { useState } from "react";
import "./App.css";
import { CreateArea } from "./components/CreateArea";
import { Note } from "./components/Note";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
function App() {
  const [addNote, setAddNote] = useState([]);
  const [isDone, setIsDone] = useState(false);

  function addItem(inputText) {
    setAddNote((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function toggleStripped(id) {
    setAddNote((prevNotes) => {
      return prevNotes.map((d, index) => {
        return index === id ? { ...d, stripped: !d.stripped } : d;
      });
    });
  }

  function deleteNote(id) {
    setAddNote((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <Header />
      <CreateArea addItem={addItem} />
      {addNote.map((d, i) => {
        return (
          <Note
            id={i}
            title={d.title}
            content={d.note}
            stripped={d.stripped}
            onDelete={deleteNote}
            onStrip={toggleStripped}
            key={i}
          />
        );
      })}
      <Footer />
    </>
  );
}

export default App;
