import React, { useEffect } from "react";
import Sidebar from "./Sidebar.js";
import Main from "./Main.js";

import "./App.css";
import "./style.css";

function App() {
  let v = [];
  let m;
  if (
    window.localStorage.localData !== undefined &&
    window.localStorage.localData !== "[]"
  ) {
    v = JSON.parse(window.localStorage.localData);
    m = 1;
  } else {
    v = [{ id: 1, name: "note 1", content: "# hello world" }];
    m = 0;
  }
  const [notesData, setNotesData] = React.useState(v);
  useEffect(() => {
    window.localStorage.localData = JSON.stringify(notesData);
  }, [notesData]);
  console.log(notesData);
  let x = "";
  notesData > 0 ? (x = notesData[0].id) : (x = "1");
  const [clickedNote, setClickedNote] = React.useState(x);

  let data = "";
  if (notesData.length > 0) {
    for (let note of notesData) {
      if (note.id == clickedNote) {
        data = note.content;
      } else {
        continue;
      }
    }
  } else {
    m = 0;
    document.getElementById("textarea").setAttribute("readonly", "");
  }
  function setData(e) {
    let newNotesData = [];
    for (let note of notesData) {
      if (note.id == clickedNote) {
        newNotesData.push({
          id: note.id,
          name: note.name,
          content: e,
        });
      } else {
        newNotesData.push(note);
      }
    }
    setNotesData(newNotesData);
  }
  function handleCancel() {
    document.querySelector(".editPage").style = `display: none`;
    document.querySelector(".deletePage").style = `display: none`;
  }
  let [edit, setEdit] = React.useState("");
  function handleOk() {
    let newNotesData = [];
    for (let ele of notesData) {
      if (ele.id == edit) {
        newNotesData.push({
          id: ele.id,
          name: document.querySelector(".editInput").value,
          content: ele.content,
        });
      } else {
        newNotesData.push(ele);
      }
    }
    document.querySelector(".editPage").style = `display: none`;
    setNotesData(newNotesData);
  }
  function handleConfirm() {
    let newNotesData = [];
    for (let ele of notesData) {
      if (ele.id == edit) {
        continue;
      } else {
        newNotesData.push(ele);
      }
    }
    document.querySelector(".deletePage").style = `display: none`;
    setNotesData(newNotesData);
  }
  return (
    <div className="container">
      <div className="editPage">
        <div>
          <label>
            <div>Please Enter A New Name For Your Note</div>
            <input className="editInput"></input>
          </label>
          <button onClick={handleOk}>OK</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
      <div className="deletePage">
        <div>
          <div>Please Confirm That You Want To Delete This Note</div>
          <div>
            <button onClick={handleConfirm}>Confirm</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      </div>
      <Sidebar
        notes={notesData}
        setNotes={setNotesData}
        clickNote={clickedNote}
        setClickNote={setClickedNote}
        setEdit={setEdit}
      />
      <Main data={data} setData={setData} clickNote={clickedNote} m={m} />
    </div>
  );
}

export default App;
