import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notesArray, setNotesArray] = useState([]);

  function addToArray(newNote) {
    setNotesArray((prevNote) => {
      return [newNote, ...prevNote];
    });
  }
  function deleteFromArray(id) {
    return setNotesArray(notesArray.filter((note, index) => index !== id));
  }

  return (
    <div>
      <Header />
      <CreateArea addToArray={addToArray} />
      {notesArray.map(function (item, index) {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            deleteNote={deleteFromArray}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
