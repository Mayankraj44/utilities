import React, { useRef } from "react";
import { v4 } from "uuid";
import useLocalStorage from "../../utils/useLocalStorage";

function LocalStorage() {
  const [names, setNames] = useLocalStorage("NAMES", []);
  const inputRef = useRef("");
  function addName(e) {
    e.preventDefault();

    const name = inputRef.current.value;

    setNames((prev) => {
      return [...prev, { name, id: v4() }];
    });
    inputRef.current.value = "";
  }

  function deleteName(id) {
    setNames((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  }
  return (
    <div>
      <form onSubmit={addName}>
        <input type="text" ref={inputRef} required />
        <button>Add</button>
      </form>
      <h2>Names</h2>
      {names?.map((name) => {
        return (
          <div key={name.id}>
            {name.name}&nbsp;
            <button onClick={() => deleteName(name.id)}>X</button>
          </div>
        );
      })}
    </div>
  );
}

export default LocalStorage;
