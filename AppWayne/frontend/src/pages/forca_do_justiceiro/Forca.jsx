import styles from './Forca.module.css'
import StartScreen from './StartScreen'
import { useCallback, useEffect, useState } from 'react'
import { wordsList } from './words'
import Game from './Game'
import GameOver from './GameOver'
import HeaderBatman from '../../components/HeaderBatman'

const stages = [
  {id:1, name: 'start'},
  {id:2, name: 'game'},
  {id:3, name: 'end'},

]
const guessesDefault = 3

function Forca() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)
  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])
  
  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(guessesDefault)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = useCallback(()=>{
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    return {word, category}
  }, [words])

  const startGame = useCallback(() =>{
    clearLetterStates()
    const { word, category } = pickWordAndCategory()
    let wordLetters = word.split('')
    wordLetters = wordLetters.map((letter)=>letter.toLowerCase())
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)
    setGameStage(stages[1].name)
  }, [pickWordAndCategory])

  const verifyLetter = (letter)=>{
    const normalizedLetter = letter.toLowerCase()
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return
    }
    if (letters.includes(normalizedLetter)){
      setGuessedLetters((g)=>[...g, normalizedLetter])
    } else{
      setWrongLetters((w)=>[...w, normalizedLetter])
      setGuesses((g)=> g-1)
    }
  }

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }
  
  useEffect(()=>{
    if (guesses <=0 ){
      clearLetterStates()
      setGameStage(stages[2].name)
    }
  }, [guesses])

  useEffect(()=>{
    const uniqueLetters = [...new Set(letters)]
    if (guessedLetters.length === uniqueLetters.length & guessedLetters.length !== 0){
      setScore((s)=> (s+=100))
      startGame()
    }
  }, [guessedLetters, letters, startGame])
  
  const retry = ()=>{
    setScore(0)
    setGuesses(guessesDefault)
    setGameStage(stages[0].name)
  }

  return (
    <div className={styles.bg}>
      <HeaderBatman />
      <div className={styles.forca}>
        {gameStage === 'start' && <StartScreen startGame={startGame} />}
        {gameStage === 'game' && <Game
        verifyLetter={verifyLetter}
        pickedWord={pickedWord}
        pickedCategory={pickedCategory}
        letters={letters}
        guessedLetters = {guessedLetters}
        wrongLetters = {wrongLetters}
        guesses = {guesses}
        score = {score}
        />}
        {gameStage === 'end' && <GameOver
        retry={retry}
        score={score}
        />}

      </div>

    </div>
  )
}

export default Forca
