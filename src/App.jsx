import { useState } from "react";
import "./App.css";
import { CreateArea } from "./components/CreateArea";
import { Note } from "./components/Note";
import { Header } from "./components/Header";
import { Footer } from "./components/footer";
function App() {
  const [addNote, setAddNote] = useState([]);
  function addItem(inputText) {
    setAddNote((prevItems) => {
      return [...prevItems, inputText];
    });
  }
  function deleteNote(id) {
    setAddNote(prevNotes => {
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
        return <Note id={i} title={d.title} content={d.note} onDelete={deleteNote} key={i}/>;
      })}
      <Footer />
    </>
  );
}

export default App;