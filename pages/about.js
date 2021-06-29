import styles from '../styles/About.module.scss'
import Hero from '../components/About/Hero'
import Commitment from '../components/About/Commitment'
import Uncompromising from '../components/About/Uncompromising'

export default function About(){

        return (
            <div className={styles.container}>
               <Hero />
               <Commitment />
               <Uncompromising />
            </div>
        )
}