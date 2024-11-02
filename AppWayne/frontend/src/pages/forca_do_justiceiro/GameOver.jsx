import styles from './GameOver.module.css'

const GameOver = ({retry, score}) => {
  return (
    <div className={styles.gameover}>
      <h1>Fim da linha!</h1>
      <h2>A sua pontuação foi <span>{score}</span></h2>
      <p>Clique no botão para reiniciar!</p>
      <button onClick={retry}>Reiniciar forca!</button>

      
    </div>
  )
}

export default GameOver

