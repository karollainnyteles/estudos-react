import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengBox.module.css'

export function ChallengBox(){
 
  const {activeChallenge, resetChallenge, completedChallenge}=useContext(ChallengesContext);
  
  const {resetCountdown} = useContext(CountdownContext);

  function handleChallengeSuceeded(){
    completedChallenge();
    resetCountdown();
  }

  function handleChallengeFailed(){
    resetChallenge();
    resetCountdown();
  }

  return(
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ?(
        <div className={styles.challengActive}>
          <header>Ganhe {activeChallenge.amount} px</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`}/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button type="button" className={styles.challengFailedButton} onClick={handleChallengeFailed}>Falhei</button>
            <button type="button" className={styles.challengSucceededButton} onClick={handleChallengeSuceeded}>Completei</button>
          </footer>
        </div>

      ) : (
        <div className={styles.challengNotActive}>
        <strong>Finalize um ciclo para receber um desafio</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level Up"/>
          Avance de level completando desafios
        </p>
      </div>

      )}
      
    </div>
  )
}