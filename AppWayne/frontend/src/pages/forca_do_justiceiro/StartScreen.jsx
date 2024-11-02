import styles from './StartScreen.module.css'

const StartScreen = ({startGame}) => {
  return (
    <div className={styles.start}>
      <h1>Forca</h1>
      <p>Clique no botão para enforcar alguém!</p>
      <button onClick={startGame} className={styles.button}>COMEÇAR</button>
      
    </div>
  )
}

export default StartScreen
