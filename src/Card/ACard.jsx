import styles from './Card.module.css'
import Munchlax from '/Users/shreyysh/Documents/coding/Web Development/React-Js/react-app/src/assets/munchlax.jpg'

function ACard() {
    return(
        <div className={styles.container}>
            <img src={Munchlax} alt="pfp" />
            <h2>Harshit</h2>
            <p>Chief Legal Officer</p>
        </div>
    );
}

export default ACard