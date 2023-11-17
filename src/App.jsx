import styles from  './app.module.css'
import image from './assets/cafe.jpeg'

function App() {
  return (
    <>
    <div className={styles.app}>
      <h1 className={styles.title}>Tienda De Cafe</h1>
      <img src={image} alt="cafe" height='500' width='800' />

    </div>
    <div className={styles.contactenos}>
      <h2>Contactenos:  +57 3003003000</h2>
      <h3>Calle 53 con cra 51-77</h3>
    
    </div>
    <div className={styles.bar  }>
      <a rel="stylesheet" href="facebook">Facebook</a>
      <a rel="stylesheet" href="facebook">Wasapp</a>
      <a rel="stylesheet" href="facebook">Tick tock</a>

    </div>
    </>
  );
}

export default App;
