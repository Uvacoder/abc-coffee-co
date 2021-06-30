import styles from '../styles/Subscribe.module.scss'
import Hero from '../components/Subscribe/Hero'
import HowItWorks from '../components/Subscribe/HowItWorks'
import Selection from '../components/Subscribe/Selection'

export default function Subscribe(){

    return (
        <div className={styles.container}>
            <Hero />
            <HowItWorks />
            <Selection />
        </div>
    )
}