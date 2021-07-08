import styles from '../../styles/Subscribe/Hero.module.scss'
import Image from 'next/image'

export default function Hero() {

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image  src="/assets/plan/desktop/image-hero-blackcup.jpg" alt="coffee grinder" width="1280" height="450"  className={styles.img} />
            </div>
            <div className={styles.imgContainerTablet}>
                <Image  src="/assets/plan/tablet/image-hero-blackcup.jpg" alt="coffee grinder" width="680" height="400"  className={styles.img} />
            </div>
            <div className={styles.imgContainerMobile}>
                <Image  src="/assets/plan/mobile/image-hero-blackcup.jpg" alt="coffee grinder" width="400" height="500"  className={styles.img} />
            </div>
            <div className={styles.textContainer}>
                <h2>Create plan</h2>
                <p>Coffee the way you wanted it to be. For coffee delivered tomorrow, or next week. For whatever brew method you use. For choice, for convenience, for quality.</p>
            </div>
        </div>
    )
}