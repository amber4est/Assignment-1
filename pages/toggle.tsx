import ToggleComponent from "../components/Toggle";
import Link from "next/link";

export default function TogglePage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Toggle Example (with Dark Mode)</h2>
      <ToggleComponent />
      <p><Link href="/">← Back to Home</Link></p>
    </div>
  );
}
