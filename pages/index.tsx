import Link from "next/link";

//main page with welcome message and navigation to the other components
export default function HomePage() {
  return (
    <div style={{ padding: "2px", textAlign: "center", margin: "20px" }}>
      {/* welcome message */}
      <h1 style={{ backgroundColor: "lightgreen", padding: "20px", margin: "10px", border: "5px solid darkgreen" }}>
        Welcome to Assignment 1!
      </h1>

      {/* explaining the website */}
      <p style={{ padding: "2px", margin: "20px" }}>
        This webpage demonstrates my understanding of the foundational concepts of front-end development covered in Weeks 1 through 4.
      </p>
      <p style={{ padding: "2px", margin: "20px" }}>
        Please select a component from the navigation buttons below:
      </p>

      {/* navigation buttons */}
      <nav>
        <ul style={{ listStyle: "none", padding: "0px" }}>

          <li >
            <button style={{ backgroundColor: "lightgreen", border: "4px solid green", borderRadius: "5px", padding: "10px 20px", margin: "10px" }}>
              <Link href="/counter">Counter Component</Link>
            </button>
          </li>

          <li>
            <button style={{ backgroundColor: "lightgreen", border: "4px solid green", borderRadius: "5px", padding: "10px 20px", margin: "10px" }}>
              <Link href="/toggle">Toggle with Dark Mode Component</Link>
            </button>
          </li>

          <li>
            <button style={{ backgroundColor: "lightgreen", border: "4px solid green", borderRadius: "5px", padding: "10px 20px", margin: "10px" }}>
              <Link href="/form">Form Component</Link>
            </button>
          </li>

        </ul>
      </nav>
    </div>
  );
}
