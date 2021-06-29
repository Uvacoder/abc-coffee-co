import styles from '../../styles/About/Hero.module.scss'
import Image from 'next/image'

export default function Hero() {

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image  src="/../public/assets/about/desktop/image-hero-whitecup.jpg" alt="coffee grinder" width="1280" height="450"  className={styles.img} />
            </div>
            <div className={styles.textContainer}>
                <h2>About Us</h2>
                <p>Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.</p>
            </div>
        </div>
    )
}