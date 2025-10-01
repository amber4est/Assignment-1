import Counter from "../components/Counter";
import Link from "next/link";

export default function CounterPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Counter Example</h2>
      <Counter />
      <p><Link href="/">← Back to Home</Link></p>
    </div>
  );
}
