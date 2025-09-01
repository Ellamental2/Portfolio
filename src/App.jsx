import styles from './App.module.css'
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Experience } from './components/Experience/Experience';
import { Contact } from './components/Contact/Contact';

function App() {
  return <div className={styles.App} role="application">
    <Navbar />
    <main role="main">
      <Hero />
      <Contact />
      <Experience />
    </main>
  </div>;
}

export default App
