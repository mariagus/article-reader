import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <div className="main">
      <h1>Article Reader</h1>
      <InputArticle />
    </div>
  );
}

function InputArticle() {
  const [text, setText] = useState("");
  const [textToRead, setTextToRead] = useState([]);
  const [displayWord, setDisplayWord] = useState("");
  var i = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayWord(textToRead[i]);
      i++;
    }, 300);
    return () => clearInterval(interval);
  }, [textToRead, i]);

  function onClickHandler(e) {
    e.preventDefault();
    let words = text.split(" ");
    setTextToRead(words);
  }

  return (
    <div>
      <form>
        <label>
          <p>Input the article to read here:</p>
          <input
            onChange={(event) => setText(event.target.value)}
            className="box"
            type="text"
            value={text}
          />
        </label>
        <p>{displayWord}</p>

        <button className="submit" id="submit" onClick={onClickHandler}>
          Read
        </button>
      </form>
    </div>
  );
}

export default App;
