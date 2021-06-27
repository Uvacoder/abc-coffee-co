import styles from '../styles/Header.module.scss'
import Image from 'next/image'

export default function Header() {

    return (
        <div className={styles.container}>
            <div className={styles.leftFlexContainer}>
                <Image src="/../public/assets/shared/desktop/logo.svg" alt="coffee roasters logo" width="236" height="26"/>
            </div>
                <ul className={styles.ul}>
                    <li className={styles.li}>HOME</li>
                    <li className={styles.li}>ABOUT US</li>
                    <li className={styles.li}>CREATE YOUR PLAN</li>
                </ul>
        </div>
    )
}