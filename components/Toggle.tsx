import { useState } from "react";

export default function Toggle() {
    //hidden texts
    const [isVisible, setIsVisible] = useState(false);
    //dark/light mode
    const [darkMode, setDarkMode] = useState(false);
    
    return (
    <div style={{
        border: "2px solid black", padding: "1px", margin: "10px",
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
    }}>
    
        {/* header */}
        <h2 style={{ padding: "5px 7px", margin: "2px", textDecoration: "underline" }}>Toggle Button with Dark Mode</h2>
        
        {/* show/hide toggle/button */}
        <button onClick={() => setIsVisible(!isVisible)}
        style={{ padding: "7px 12px", margin: "20px", backgroundColor: "LightPink", border: "2px solid black", borderRadius: "5px" }}>
        {/* true/false to show either hide or show button */}
        {isVisible ? "Hide Text" : "Show Hidden Text"}
        </button>
        
        {/*dark mode toggle/button */}
        <button onClick={() => setDarkMode(!darkMode)}
        style={{ padding: "7px 12px", margin: "20px", backgroundColor: "LightPink", border: "2px solid black", borderRadius: "5px" }}>
        {/* true/false to show either light mode or dark mode button */}
        {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        {/* hidden text */}
        {isVisible && <p>This is top secret hidden text, don't forget to hide it again when you are done!</p>}
    </div>
  );
}
