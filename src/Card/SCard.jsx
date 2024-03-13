import Snoopy from '/Users/shreyysh/Documents/coding/Web Development/React-Js/react-app/src/assets/snoopy.jpg'
import styles from './Card.module.css'
import Munchlax from '/Users/shreyysh/Documents/coding/Web Development/React-Js/react-app/src/assets/munchlax.jpg'

function SCard() {
    return(
        <div className={styles.container}>
            <img src={Snoopy} alt="pfp" />
            <h2>Shreyy</h2>
            <p>Managing Director</p>
        </div>
    );
}


export default SCard