import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengBox.module.css'

export function ChallengBox(){
  const hasActiveChalleng = true;
  const contextData=useContext(ChallengesContext);
  console.log(contextData);
  return(
    <div className={styles.challengeBoxContainer}>
      {hasActiveChalleng ?(
        <div className={styles.challengActive}>
          <header>Ganhe 400 px</header>
          <main>
            <img src="icons/body.svg"/>
            <strong>Novo desafio</strong>
            <p>Levante e faça alguma coisa</p>
          </main>
          <footer>
            <button type="button" className={styles.challengFailedButton}>Falhei</button>
            <button type="button" className={styles.challengSucceededButton}>Completei</button>
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