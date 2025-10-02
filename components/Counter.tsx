import { useState } from "react";

//increase and decrease button with a counter
export default function Counter({ initialCount = 0 }) {
    //starting with the initial count from counter.tsx or 0
    const [count, setCount] = useState(initialCount);
    
    return (
        <div style={{ border: "2px solid black", padding: "1px", margin: "10px", backgroundColor: "AliceBlue" }}>
            {/* header and explanation */}
            <h2 style={{ padding: "5px 7px", margin: "2px", textDecoration: "underline" }}>Counter Component</h2>
            <p>Click the Increase or Decrease button to update the counter!</p>
            <p style={{ padding: "2px 7px", margin: "2px" }}>Current Count: {count}</p>
            
            {/* counter buttons and control */}
            <div style={{ padding: "5px 7px", margin: "2px" }}>
                {/* increase the counter */}
                <button onClick={() => setCount(count + 1)}
                style={{ border: "2px solid black", borderRadius: "10px", padding: "7px 10px", margin: "10px", backgroundColor: "lightblue" }}>
                Increase</button>

                {/* decrease the counter */}
                <button onClick={() => setCount(count - 1)}
                style={{ border: "2px solid black", borderRadius: "10px", padding: "7px 10px", margin: "10px", backgroundColor: "lightblue" }}>
                Decrease</button>
            </div>

        </div>
    );
}
