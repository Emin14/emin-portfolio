import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import About from '../About/About';
import styles from './App.module.css';

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
