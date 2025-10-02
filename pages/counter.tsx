import Counter from "../components/Counter";
import Link from "next/link";

//counter page
export default function CounterPage() {
    return (
        <div style={{ padding: "10px", textAlign: "center" }}>
            {/* passing a prop between components - starting the count at 10 */}
            <Counter initialCount={10} />
            <p style={{ border: "2px solid black", padding: "10px", margin: "10px", backgroundColor: "AliceBlue" }}><Link href="/">Back to Home Page</Link></p>
        </div>
    );
}
