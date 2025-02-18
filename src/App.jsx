import { useEffect, useState } from "react";
import "./App.css";
import { CreateArea } from "./components/CreateArea";
import { Note } from "./components/Note";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
function App() {
  const [addNote, setAddNote] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
  localStorage.setItem("notes", JSON.stringify(addNote));
  }, [addNote])
  
  function addItem(inputText) {
    setAddNote((prevItems) => {
      return [...prevItems,  { 
        ...inputText,
        dateTime: new Date().toLocaleString() // Add current date/time
      }];
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
            data={d}
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
