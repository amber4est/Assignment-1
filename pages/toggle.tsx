import ToggleComponent from "../components/Toggle";
import Link from "next/link";

//toggle page
export default function TogglePage() {
    return (
        <div style={{ padding: "10px", textAlign: "center" }}>
            <ToggleComponent />
            <p style={{ border: "2px solid black", padding: "1px", margin: "10px", backgroundColor: "LightPink" }}><Link href="/">Back to Home Page</Link></p>
        </div>
    );
}
