import styles from '../styles/Footer.module.scss'
import Image from 'next/image'

export default function Footer() {

    return (
        <div className={styles.container}>
            
            <div className={styles.leftFlexContainer}>
                <Image src="/../public/assets/shared/desktop/logo-footer.svg" alt="coffee roasters logo" width="236" height="26" />
                <ul className={styles.ul}>
                    <li className={styles.li}>HOME</li>
                    <li className={styles.li}>ABOUT US</li>
                    <li className={styles.li}>CREATE YOUR PLAN</li>
                </ul>

            </div>
                
            <div className={styles.rightFlexContainer}>
                <Image src="/../public/assets/shared/desktop/icon-facebook.svg" alt="coffee roasters logo" width="24" height="24"  className={styles.svg}/>
                <Image src="/../public/assets/shared/desktop/icon-twitter.svg" alt="coffee roasters logo" width="24" height="24"  className={styles.svg}/>
                <Image src="/../public/assets/shared/desktop/icon-instagram.svg" alt="coffee roasters logo" width="24" height="24"  className={styles.svg}/>
            </div>
        </div>
    )
}