import Link from 'next/link';
import styles from './page.module.css';


const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      
      <main className={styles.main}>
        <h1>Welcome to Our Website</h1>
        <p>This is the home page with a sleek and modern layout.</p>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 My Website</p>
      </footer>
    </div>
  );
};

export default Home;