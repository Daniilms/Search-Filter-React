import "./style.css";
import { useEffect, useState } from "react";

function Input({ setSearchArray, words }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (input === "") {
      setSearchArray([]);
    }
  }, [input, setSearchArray]);

  function handleInput(e) {
    const inputValue = e.target.value;

    if (input !== "") {
      const filtredWords = words.filter(
        (word) => word.includes(inputValue.toLowerCase())
        /* inputValue.toLowerCase().includes(word) */
      );
      setSearchArray(filtredWords);
    }
    setInput(inputValue);
  }
  return <input className="main-input" type="text" onInput={handleInput} />;
}

export default Input;
