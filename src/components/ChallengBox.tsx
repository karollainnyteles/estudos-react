import styles from '../styles/components/ChallengBox.module.css'

export function ChallengBox(){
  return(
    <div className={styles.challengeBoxContainer}>
      <div className={styles.challengNotActive}>
        <strong>Finalize um ciclo para receber um desafio</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level Up"/>
          Avance de level completando desafios
        </p>
      </div>
    </div>
  )
}