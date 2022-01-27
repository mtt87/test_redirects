import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        redirect 1: <code>/api/1</code>
      </div>
      <div>
        redirect 2: <code>/api/2</code>
      </div>
    </div>
  );
}
