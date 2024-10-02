import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faH,
  faB,
  faItalic,
  faStrikethrough,
  faLink,
  faQuoteRight,
  faCode,
  faImage,
  faList,
  faListOl,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function Main(props) {
  let buttonsEditor = document.querySelectorAll("header span");
  let data = props.data;
  let setData = props.setData;
  const [selected, setSelected] = React.useState([]);
  let start, finish;

  React.useEffect(() => {
    let txtarea = document.getElementById("textarea");
    txtarea.setSelectionRange(selected[0], selected[1]);
    txtarea.focus();
  }, [selected]);

  function handleClick(e) {
    let txtarea = document.getElementById("textarea");
    start = txtarea.selectionStart;
    finish = txtarea.selectionEnd;
    let name = e.target.getAttribute("name");
    let currentTxt = data;
    let newTxt = "";
    // txtarea.setSelectionRange(1, 10);

    switch (name) {
      case "faH":
        if (start != finish) {
          newTxt = `${currentTxt.slice(0, start)}\n\n# ${currentTxt.slice(
            start,
            finish
          )}\n\n${currentTxt.slice(finish)}`;
          setData(newTxt);
          setSelected([start + 4, finish + 4]);
        } else {
          if (currentTxt[start] === " ") {
            start -= 1;
          }
          let indexOne = currentTxt.lastIndexOf(" ", start) + 1;
          let indexTwo = currentTxt.indexOf(" ", start);
          if (indexTwo == -1) {
            indexTwo = currentTxt.length;
          }
          newTxt = `${currentTxt.slice(0, indexOne)}\n\n# ${currentTxt.slice(
            indexOne,
            indexTwo
          )}\n\n${currentTxt.slice(indexTwo)}`;
          setData(newTxt);
          setSelected([indexOne + 4, indexTwo + 4]);
        }
        break;
      case "faB":
        newTxt = `${currentTxt.slice(0, start)}**${currentTxt.slice(
          start,
          finish
        )}**${currentTxt.slice(finish)}`;
        setData(newTxt);
        setSelected([start + 2, finish + 2]);
        break;
      case "faItalic":
        newTxt = `${currentTxt.slice(0, start)}++${currentTxt.slice(
          start,
          finish
        )}++${currentTxt.slice(finish)}`;
        setData(newTxt);
        setSelected([start + 2, finish + 2]);
        break;
      case "faStrikethrough":
        newTxt = `${currentTxt.slice(0, start)}~~${currentTxt.slice(
          start,
          finish
        )}~~${currentTxt.slice(finish)}`;
        setData(newTxt);
        setSelected([start + 2, finish + 2]);
        break;
      case "faLink":
        if (start != finish) {
          newTxt = `${currentTxt.slice(0, start)}[${currentTxt.slice(
            start,
            finish
          )}](URL)${currentTxt.slice(finish)}`;
          setData(newTxt);
          setSelected([start + 1, finish + 1]);
        } else {
          if (currentTxt[start] === " ") {
            start -= 1;
          }
          let indexOne = currentTxt.lastIndexOf(" ", start) + 1;
          let indexTwo = currentTxt.indexOf(" ", start);
          if (indexTwo == -1) {
            indexTwo = currentTxt.length;
          }
          newTxt = `${currentTxt.slice(0, indexOne)}[${currentTxt.slice(
            indexOne,
            indexTwo
          )}](URL)${currentTxt.slice(indexTwo)}`;
          setData(newTxt);
          setSelected([indexOne + 1, indexTwo + 1]);
        }
        break;
      case "faQuoteRight":
        if (start != finish) {
          newTxt = `${currentTxt.slice(0, start)}\n\n>> ${currentTxt.slice(
            start,
            finish
          )}\n\n${currentTxt.slice(finish)}`;
          setData(newTxt);
          setSelected([start + 4, finish + 4]);
        } else {
          if (currentTxt[start] === " ") {
            start -= 1;
          }
          let indexOne = currentTxt.lastIndexOf(" ", start) + 1;
          let indexTwo = currentTxt.indexOf(" ", start);
          if (indexTwo == -1) {
            indexTwo = currentTxt.length;
          }
          newTxt = `${currentTxt.slice(0, indexOne)}\n\n>> ${currentTxt.slice(
            indexOne,
            indexTwo
          )}\n\n${currentTxt.slice(indexTwo)}`;
          setData(newTxt);
          setSelected([indexOne + 5, indexTwo + 5]);
        }
        break;
      case "faCode":
        if (start != finish) {
          newTxt = `${currentTxt.slice(0, start)}\`${currentTxt.slice(
            start,
            finish
          )}\`${currentTxt.slice(finish)}`;
          setData(newTxt);
          setSelected([start + 1, finish + 1]);
        } else {
          if (currentTxt[start] === " ") {
            console.log(currentTxt.length);
            start -= 1;
          }
          let indexOne = currentTxt.lastIndexOf(" ", start) + 1;
          let indexTwo = currentTxt.indexOf(" ", start);
          if (indexTwo == -1) {
            indexTwo = currentTxt.length;
          }
          newTxt = `${currentTxt.slice(0, indexOne)}\`${currentTxt.slice(
            indexOne,
            indexTwo
          )}\`${currentTxt.slice(indexTwo)}`;
          setData(newTxt);
          setSelected([indexOne + 1, indexTwo + 1]);
        }
        break;
      case "faImage":
        if (start != finish) {
          newTxt = `${currentTxt.slice(0, start)}![](${currentTxt.slice(
            start,
            finish
          )})${currentTxt.slice(finish)}`;
          setData(newTxt);
          setSelected([start + 4, finish + 4]);
        } else {
          if (currentTxt[start] === " ") {
            console.log(currentTxt.length);
            start -= 1;
          }
          let indexOne = currentTxt.lastIndexOf(" ", start) + 1;
          let indexTwo = currentTxt.indexOf(" ", start);
          if (indexTwo == -1) {
            indexTwo = currentTxt.length;
          }
          newTxt = `${currentTxt.slice(0, indexOne)}![](${currentTxt.slice(
            indexOne,
            indexTwo
          )})${currentTxt.slice(indexTwo)}`;
          setData(newTxt);
          setSelected([indexOne + 4, indexTwo + 4]);
        }
        break;
      case "faList":
        if (start != finish) {
          newTxt = `${currentTxt.slice(0, start)}\n\n- ${currentTxt.slice(
            start,
            finish
          )}${data[finish + 1] == "\n" ? "" : "\n\n"}${currentTxt.slice(
            finish
          )}`;
          setData(newTxt);
          setSelected([start + 4, finish + 4]);
        } else {
          if (currentTxt[start] === " ") {
            console.log(currentTxt.length);
            start -= 1;
          }
          let indexOne = currentTxt.lastIndexOf(" ", start) + 1;
          let indexTwo = currentTxt.indexOf(" ", start);
          if (indexTwo == -1) {
            indexTwo = currentTxt.length;
          }
          newTxt = `${currentTxt.slice(0, indexOne)}\n\n- ${currentTxt.slice(
            indexOne,
            indexTwo
          )}${data[indexTwo + 1] == "\n" ? "" : "\n\n"}${currentTxt.slice(
            indexTwo
          )}`;
          setData(newTxt);
          setSelected([indexOne + 4, indexTwo + 4]);
        }
        break;
      case "faListOl":
        if (start != finish) {
          newTxt = `${currentTxt.slice(0, start)}\n\n1. ${currentTxt.slice(
            start,
            finish
          )}${data[finish + 1] == "\n" ? "" : "\n\n"}${currentTxt.slice(
            finish
          )}`;
          setData(newTxt);
          setSelected([start + 5, finish + 5]);
        } else {
          if (currentTxt[start] === " ") {
            console.log(currentTxt.length);
            start -= 1;
          }
          let indexOne = currentTxt.lastIndexOf(" ", start) + 1;
          let indexTwo = currentTxt.indexOf(" ", start);
          if (indexTwo == -1) {
            indexTwo = currentTxt.length;
          }
          newTxt = `${currentTxt.slice(0, indexOne)}\n\n1. ${currentTxt.slice(
            indexOne,
            indexTwo
          )}${data[indexTwo + 1] == "\n" ? "" : "\n\n"}${currentTxt.slice(
            indexTwo
          )}`;
          setData(newTxt);
          setSelected([indexOne + 5, indexTwo + 5]);
        }
        break;
      case "faListCheck":
        if (start != finish) {
          newTxt = `${currentTxt.slice(0, start)}\n\n-[] ${currentTxt.slice(
            start,
            finish
          )}${data[finish + 1] == "\n" ? "" : "\n\n"}${currentTxt.slice(
            finish
          )}`;
          setData(newTxt);
          setSelected([start + 6, finish + 6]);
        } else {
          if (currentTxt[start] === " ") {
            console.log(currentTxt.length);
            start -= 1;
          }
          let indexOne = currentTxt.lastIndexOf(" ", start) + 1;
          let indexTwo = currentTxt.indexOf(" ", start);
          if (indexTwo == -1) {
            indexTwo = currentTxt.length;
          }
          newTxt = `${currentTxt.slice(0, indexOne)}\n\n-[] ${currentTxt.slice(
            indexOne,
            indexTwo
          )}${data[indexTwo + 1] == "\n" ? "" : "\n\n"}${currentTxt.slice(
            indexTwo
          )}`;
          setData(newTxt);
          setSelected([indexOne + 6, indexTwo + 6]);
        }
        break;
      default:
        break;
    }
  }

  function handleChange(e) {
    setData(e.target.value);
  }

  let [Pr, setPr] = React.useState(props.m);
  function handleWrite() {
    setPr(0);
    document.getElementById("textarea").style = `display:block`;
    document.getElementById("preview").style = `display:none`;
    document.getElementById("textarea").focus();
    document.getElementById("textarea").value = data;
    for (let span of buttonsEditor) {
      span.style.display = `inline`;
    }
  }
  function handlePreview() {
    setPr(1);
    document.getElementById("textarea").style = `display : none`;
    document.getElementById("preview").style = `display : block`;

    // console.log(buttonEditor);
    for (let span of buttonsEditor) {
      span.style.display = `none`;
    }

    let txtHTML = [];
    let h = 0;
    for (let char of data) {
      if (char == "#") {
        txtHTML.push(`<`, `h`, `1`, `>`);
        h = 1;
      } else {
        if (char == "\n" && h == 1) {
          txtHTML.push(`<`, `/`, `h`, `1`, `>`);
          h = 0;
        } else {
          txtHTML.push(char);
        }
      }
    }
    let txtHTML2 = [];
    let b = 0;
    for (let i = 0; i < txtHTML.length; i++) {
      let char = txtHTML[i];
      if (char == `*` && txtHTML[i + 1] == `*` && b == 0) {
        txtHTML2.push(...`<span class = "bold">`.split(""));
        b = 1;
      } else {
        if (char == `*` && txtHTML[i - 1] == `*`) {
          continue;
        } else {
          if (char == `*` && txtHTML[i + 1] == `*` && b == 1) {
            txtHTML2.push(...`</span>`.split(""));
            b = 0;
          } else {
            txtHTML2.push(char);
          }
        }
      }
    }
    txtHTML = [];
    let c = 0;
    for (let i = 0; i < txtHTML2.length; i++) {
      let char = txtHTML2[i];
      if (char == `+` && txtHTML2[i + 1] == `+` && c == 0) {
        txtHTML.push(...`<span class = "italic">`.split(""));
        c = 1;
      } else {
        if (char == `+` && txtHTML2[i - 1] == `+`) {
          continue;
        } else {
          if (char == `+` && txtHTML2[i + 1] == `+` && c == 1) {
            txtHTML.push(...`</span>`.split(""));
            c = 0;
          } else {
            txtHTML.push(char);
          }
        }
      }
    }
    txtHTML2 = [];
    let d = 0;
    for (let i = 0; i < txtHTML.length; i++) {
      let char = txtHTML[i];
      if (char == `~` && txtHTML[i + 1] == `~` && d == 0) {
        txtHTML2.push(...`<span class = "dashed">`.split(""));
        d = 1;
      } else {
        if (char == `~` && txtHTML[i - 1] == `~`) {
          continue;
        } else {
          if (char == `~` && txtHTML[i + 1] == `~` && d == 1) {
            txtHTML2.push(...`</span>`.split(""));
            d = 0;
          } else {
            txtHTML2.push(char);
          }
        }
      }
    }
    function setup_link() {
      txtHTML = txtHTML2.join("");
      let e = 0,
        numberOfUrl = 0;
      while (txtHTML2.join("").indexOf("](URL)", e) != -1) {
        numberOfUrl++;
        e = txtHTML2.join("").indexOf("](URL)", e) + 1;
      }
      if (numberOfUrl > 0) {
        let f = 0;
        for (let i = 0; i < numberOfUrl; i++) {
          let indexTwo = txtHTML.indexOf("](URL)", f);
          let indexOne = txtHTML.lastIndexOf("[", indexTwo);
          if (indexOne !== -1) {
            txtHTML = `${txtHTML.slice(
              0,
              indexOne
            )}<a target="_blank" href="${txtHTML.slice(
              indexOne + 1,
              indexTwo
            )}">${txtHTML.slice(indexOne + 1, indexTwo)}</a>${txtHTML.slice(
              indexTwo + 6
            )}`;
          } else {
            f = txtHTML.indexOf("](URL)", f) + 1;
            continue;
          }
        }
      }
      txtHTML = txtHTML.split("");
    }
    setup_link();
    txtHTML2 = [];
    let g = 0;
    for (let i = 0; i < txtHTML.length; i++) {
      let char = txtHTML[i];
      if (char == `>` && txtHTML[i + 1] == `>` && g == 0) {
        txtHTML2.push(...`<blockquote><p>`.split(""));
        g = 1;
      } else {
        if (char == `>` && txtHTML[i - 1] == `>`) {
          continue;
        } else {
          if (char == "\n" && g == 1) {
            g = 0;
            txtHTML2.push(...`</p></blockquote>`.split(""));
          } else {
            txtHTML2.push(char);
          }
        }
      }
    }
    txtHTML = [];
    let k = 0;
    for (let i = 0; i < txtHTML2.length; i++) {
      let char = txtHTML2[i];
      if (char == "`" && k == 0) {
        txtHTML.push(...`<code>`.split(""));
        k = 1;
      } else {
        if (char == "`" && k == 1) {
          txtHTML.push(...`</code>`.split(""));
          k = 0;
        } else {
          txtHTML.push(char);
        }
      }
    }
    function setup_image() {
      txtHTML2 = txtHTML.join("");
      let e = 0,
        numberOfUrl = 0;
      while (txtHTML.join("").indexOf("![](", e) != -1) {
        numberOfUrl++;
        e = txtHTML.join("").indexOf("![](", e) + 1;
      }
      for (let i = 0; i < numberOfUrl; i++) {
        if (txtHTML2.lastIndexOf("![](") != -1) {
          let indexOne = txtHTML2.lastIndexOf("![](");
          let indexTwo = txtHTML2.indexOf(")", indexOne);
          if (indexTwo != -1) {
            txtHTML2 = `${txtHTML2.slice(
              0,
              indexOne
            )}<img src="${txtHTML2.slice(
              indexOne + 4,
              indexTwo
            )}">${txtHTML2.slice(indexTwo + 1)}`;
          }
        } else {
          continue;
        }
      }
    }
    setup_image();
    document.getElementById("preview").innerHTML = txtHTML2;
  }
  React.useEffect(() => {
    if (Pr == 1) {
      handlePreview();
    }
  }, [props.clickNote]);
  return (
    <div className="main">
      <header>
        <button onClick={handleWrite}>Write</button>
        <button onClick={handlePreview}>Preview</button>
        <span name="faH" onClick={handleClick}>
          <FontAwesomeIcon icon={faH} />
        </span>
        <span name="faB" onClick={handleClick}>
          <FontAwesomeIcon icon={faB} />
        </span>
        <span name="faItalic" onClick={handleClick}>
          <FontAwesomeIcon icon={faItalic} />
        </span>
        <span name="faStrikethrough" onClick={handleClick}>
          <FontAwesomeIcon icon={faStrikethrough} />
        </span>
        <span name="faLink" onClick={handleClick}>
          <FontAwesomeIcon icon={faLink} />
        </span>
        <span name="faQuoteRight" onClick={handleClick}>
          <FontAwesomeIcon icon={faQuoteRight} />
        </span>
        <span name="faCode" onClick={handleClick}>
          <FontAwesomeIcon icon={faCode} />
        </span>
        <span name="faImage" onClick={handleClick}>
          <FontAwesomeIcon icon={faImage} />
        </span>
        <span name="faList" onClick={handleClick}>
          <FontAwesomeIcon icon={faList} />
        </span>
        <span name="faListOl" onClick={handleClick}>
          <FontAwesomeIcon icon={faListOl} />
        </span>
        <span name="faListCheck" onClick={handleClick}>
          <FontAwesomeIcon icon={faListCheck} />
        </span>
      </header>
      <textarea id="textarea" value={data} onChange={handleChange} />
      <div id="preview"></div>
    </div>
  );
}
