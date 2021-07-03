import styles from '../styles/Subscribe.module.scss'
import Hero from '../components/Subscribe/Hero'
import HowItWorks from '../components/Subscribe/HowItWorks'
import Selection from '../components/Subscribe/Selection'
import { Context } from '../context/Context'
import { useContext } from 'react'

export default function Subscribe(){

    const {dimmerStyle} = useContext(Context)

    return (
        <div className={styles.container} style={dimmerStyle}>
            <Hero />
            <HowItWorks />
            <Selection />
        </div>
    )
}