import Form from "../components/Form";
import Link from "next/link";

//form page
export default function FormPage() {
    return (
        <div style={{ padding: "10px", textAlign: "center" }}>
            <Form />
            <p style={{ border: "2px solid black", padding: "1px", margin: "10px", backgroundColor: "orange" }}><Link href="/">Back to Home Page</Link></p>
        </div>
    );
}
