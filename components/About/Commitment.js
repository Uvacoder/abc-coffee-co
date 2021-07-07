import styles from '../../styles/About/Commitment.module.scss'
import Image from 'next/image'

export default function Hero() {

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image  src="/../public/assets/about/desktop/image-commitment.jpg" alt="coffee grinder" width="445" height="520"  className={styles.img} />
            </div>
            <div className={styles.imgContainerTablet}>
                <Image  src="/../public/assets/about/tablet/image-commitment.jpg" alt="coffee grinder" width="281" height="470"  className={styles.img} />
            </div>
            <div className={styles.imgContainerMobile}>
                <Image  src="/../public/assets/about/mobile/image-commitment.jpg" alt="coffee grinder" width="327" height="400"  className={styles.img} />
            </div>
            <div className={styles.textContainer}>
                <h2>Our commitment</h2>
                <p>We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</p>
            </div>
        </div>
    )
}