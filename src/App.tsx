import styles from './App.module.css';
import CoverText from './view/organisms/CoverText/CoverText';
import CoverImage from './view/organisms/CoverImage/CoverImage';

function App() {
  return (
    <div className={styles.container}>
      <CoverImage />
      <header className={styles.header}>
        <CoverText />
      </header>
    </div>
  );
}

export default App;
