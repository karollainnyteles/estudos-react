import styles from '../styles/components/Profile.module.css'
export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQGAjIe_bMDSfw/profile-displayphoto-shrink_800_800/0/1587130851673?e=1626307200&v=beta&t=WjfpJHUJilBTkwG64QAh5SpEPLMPMLUysZWImQULwYQ" alt="Karollainny Teles"/>
            <div>
                <strong>Karollainny Teles</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 1
                </p>
            </div>
        </div>


    );
}