import { useRef } from "react";

function Q8() {

  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }

  return (
    <div>
      <h2>Q8 - useRef Hook</h2>

      <input
        type="text"
        ref={inputRef}
        placeholder="Enter your name"
      />

      <button onClick={handleFocus}>
        Focus Input
      </button>

    </div>
  );
}

export default Q8;