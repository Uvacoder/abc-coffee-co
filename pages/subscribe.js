import styles from '../styles/Subscribe.module.scss'
import Hero from '../components/Subscribe/Hero'
import HowItWorks from '../components/Subscribe/HowItWorks'

export default function Subscribe(){

    return (
        <div className={styles.container}>
            <Hero />
            <HowItWorks />
        </div>
    )
}