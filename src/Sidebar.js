import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faTrash,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar(props) {
  let notes = props.notes.map((ele) => {
    return (
      <div className="note" key={ele.id}>
        <div id={ele.id} onClick={handleNoteClick}>
          {ele.name}
        </div>
        <span className="edit" mycustomattribute={ele.id} onClick={handleEdit}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </span>
        <span
          className="delete"
          mycustomattribute={ele.id}
          onClick={handleDelete}
        >
          <FontAwesomeIcon icon={faTrash} />
        </span>
      </div>
    );
  });
  function handleEdit(e) {
    document.querySelector(".editPage").style = `display: flex`;
    props.setEdit(e.target.getAttribute("mycustomattribute"));
    for (let ele of props.notes) {
      if (ele.id == e.target.getAttribute("mycustomattribute")) {
        document.querySelector(".editPage input").value = ele.name;
      } else {
        continue;
      }
    }
  }
  function handleDelete(e) {
    document.querySelector(".deletePage").style = `display: flex`;
    props.setEdit(e.target.getAttribute("mycustomattribute"));
  }
  function addNote() {
    let newNotes = [];
    if (props.notes.length > 0) {
      newNotes = [
        ...props.notes,
        ...[
          {
            id: props.notes[props.notes.length - 1].id + 1,
            name: "note " + (props.notes[props.notes.length - 1].id + 1),
            content: "",
          },
        ],
      ];
    } else {
      document.getElementById("textarea").removeAttribute("readonly");
      newNotes = [
        ...props.notes,
        ...[
          {
            id: "1",
            name: "note 1",
            content: "# Hello World",
          },
        ],
      ];
    }
    props.setNotes(newNotes);
  }
  function handleNoteClick(e) {
    props.setClickNote(e.target.getAttribute("id"));
    // document.getElementById("textarea").style = "display:block";
    // document.getElementById("preview").style = "display:none";
  }
  return (
    <div className="sidebar">
      <div className="head">
        <h1>Notes</h1>
        <span className="add-note" onClick={addNote}>
          <FontAwesomeIcon icon={faPlus} />
        </span>
      </div>
      {notes}
    </div>
  );
}
