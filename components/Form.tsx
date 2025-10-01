import { useState } from "react";
import Link from "next/link";

export default function Form() {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      setMessage("Please enter something.");
    }
    else if (inputValue.trim().length <= 2){
        setMessage("Please enter more than two letters.");
    }
    else {
      setMessage(`Success! You entered: ${inputValue}`);
      setInputValue("");
    }
  };

  return (
    <div style={{ border: "2px solid black", padding: "1px", margin: "10px" }}>
      <h2>Form Submission: </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter text here"
          style={{ padding: "8px", marginRight: "8px" }}
        />
        <button
          type="submit"
          style={{ padding: "8px 16px", cursor: "pointer" }}
        >
          Submit
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
