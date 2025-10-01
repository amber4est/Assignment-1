import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div style={{ border: "2px solid black", padding: "1px", margin: "10px" }}>
            <h2 style={{ padding: "5px 7px", margin: "2px", textDecoration: "underline" }}>Counter Component</h2>
            <p style={{ padding: "5px 7px", margin: "2px" }}>Current Count: {count}</p>
            
            <div style={{ padding: "5px 7px", margin: "2px" }}>
                {/* Increase the counter */}
                <button onClick={() => setCount(count + 1)}
                style={{ border: "2px solid black", borderRadius: "10px", padding: "5px 7px", margin: "2px" }}>
                Increase</button>

                {/* Decrease the counter */}
                <button onClick={() => setCount(count - 1)}
                style={{ border: "2px solid black", borderRadius: "10px", padding: "5px 7px", margin: "2px" }}>
                Decrease</button>
            </div>

        </div>
    );
}
