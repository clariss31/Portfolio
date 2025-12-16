import styles from "./Footer.module.css";

export default function Footer({ children }) {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} John Doe.</p>
      <p className={styles.links}>
        <a href="https://github.com/johndoe" target="_blank">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/john-doe/" target="_blank">
          LinkedIn
        </a>
      </p>
    </footer>
  );
}
