import styles from './toggle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default function Toggle({ darkMode, setIsDarkMode }) {
  const toggleDarkMode = () => {
    setIsDarkMode(!darkMode);
  };

  return (
    <div className={`${styles.body} ${darkMode ? styles.dark : ''}`}>
      <input 
        type="checkbox" 
        className={styles.checkbox} 
        id="checkbox" 
        onChange={toggleDarkMode} 
        checked={darkMode} 
      />
      <label htmlFor="checkbox" className={styles.checkboxLabel}>
        <FontAwesomeIcon icon={faMoon} className={styles.faMoon} />
        <FontAwesomeIcon icon={faSun} className={styles.faSun} />
        <span className={`${styles.ball} ${darkMode ? styles.checkboxChecked : ''}`}></span>
      </label>
    </div>
  );
}
