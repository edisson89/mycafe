//import { useRef } from 'react'
import styles from "./app.module.css";
import image from "./assets/cafe.jpeg";
//import {  useScroll, animated, useSpring} from '@react-spring/web'

function App() {
  return (
    <>
      <div className={styles.app}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Tienda De Cafe Especial</h1>
        </div>
        <div className={styles.imageContainer}>
          <img src={image} className={styles.image} alt="cafe" />
        </div>
      
      <div className={styles.contactenos}>
        <h2>Contactenos: +57 3174782918</h2>
        <h3>Bogota</h3>
      </div>
      </div>
      <div className={styles.bar}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/profile.php?id=100083398416105"
        >
          Facebook
        </a>
        <a rel="stylesheet" href="facebook">
          Wasapp
        </a>
        <a rel="stylesheet" href="facebook">
          Tick tock
        </a>
      </div>
    </>
  );
}

export default App;
