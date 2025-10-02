import { useState } from "react";

//form component
export default function Form() {
    const [inputValue, setInputValue] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        //check for nothing entered
        if (inputValue.trim() === "") {
            setMessage("Please enter a message");
        }
        //check for more than two characters
        else if (inputValue.trim().length <= 2){
            setMessage("Please enter more than two letters.");
        }
        else {
            //display a success message with the message entered
            setMessage(`Thank you! You entered: ${inputValue}`);
            //clear input box
            setInputValue("");
        }
    };

  return (
    <div style={{ border: "2px solid black", padding: "1px", margin: "10px", backgroundColor: "orange" }}>
        {/* header */}
        <h2 style={{ padding: "5px 7px", margin: "2px", textDecoration: "underline" }}>Form Component</h2>
        
        {/* form */}
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter text here"
            style={{ padding: "8px", marginRight: "8px", border: "1px solid black", borderRadius: "10px", }}
        />

        {/* submit button */}
        <button
          type="submit"
          style={{ border: "2px solid black", borderRadius: "10px", padding: "5px 10px", margin: "10px", backgroundColor: "lightblue" }}
        >
            Submit
        </button>
        </form>
        
        {/* display message if text is entered */}
        {message && <p>{message}</p>}
    </div>
  );
}
