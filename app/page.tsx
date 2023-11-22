import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/about">About Page</Link>
      <p>
        <Link href="/users">Users</Link>
      </p>
    </main>
  );
}
