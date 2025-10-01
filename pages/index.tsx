import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome to Assignment 1</h1>
      <p>This app demonstrates components, state, props, and events in Next.js.</p>

      {/* ✅ Navigation Menu */}
      <nav style={{ marginTop: "2rem" }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ margin: "1rem" }}>
            <Link href="/counter">Go to Counter</Link>
          </li>
          <li style={{ margin: "1rem" }}>
            <Link href="/toggle">Go to Toggle/Dark Mode</Link>
          </li>
          <li style={{ margin: "1rem" }}>
            <Link href="/form">Go to Form</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
