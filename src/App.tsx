import styles from './App.module.css';
import RadioWidget from './screens/RadioWidget/RadioWidget';

function App() {
  return (
    <div className={styles.widgetContainer}>
      <RadioWidget />
    </div>
  );
}

export default App;
