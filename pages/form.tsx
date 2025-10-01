import Form from "../components/Form";
import Link from "next/link";

export default function FormPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Form Example</h2>
      <Form />
      <p><Link href="/">← Back to Home</Link></p>
    </div>
  );
}
