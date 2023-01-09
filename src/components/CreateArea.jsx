import React, { useState } from "react";
// import AddIcon from "@material-ui/icons/Add";
// import Fab from "@material-ui/core/Fab";
// import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [noteContent, setNoteContent] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setNoteContent((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }

  function submitNote(event) {
    props.addToArray(noteContent);
    setNoteContent({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={noteContent.title}
          placeholder="Title"
        />

        <textarea
          name="content"
          // onClick={expand}
          onChange={handleChange}
          value={noteContent.content}
          placeholder="Take a note..."
          // rows={isExpanded ? 3 : 1}
        />
        <button
          onClick={(event) => {
            props.addToArray(noteContent);
            setNoteContent({ title: "", content: "" });
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
