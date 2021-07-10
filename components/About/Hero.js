import styles from '../../styles/About/Hero.module.scss'
import Image from 'next/image'

export default function Hero() {

    return (
        <div className={styles.container}>
            <div className={styles.img}>
                <Image  src="/assets/about/desktop/image-hero-whitecup.jpg" alt="whitecup image" width="1280" height="450" />
            </div>
            <div className={styles.imgTablet}>
                <Image  src="/assets/about/tablet/image-hero-whitecup.jpg" alt="whitecup image" width="690" height="400" />
            </div>
            <div className={styles.imgMobile}>
                <Image  src="/assets/about/mobile/image-hero-whitecup.jpg" alt="whitecup image" width="500" height="600" />
            </div>

            <div className={styles.textContainer}>
                <h2>About Us</h2>
                <p>Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.</p>
            </div>
        </div>
    )
}