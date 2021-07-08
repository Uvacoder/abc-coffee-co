import styles from '../../styles/About/Uncompromising.module.scss'
import Image from 'next/image'

export default function Hero() {

    return (
        <div className={styles.container}>
            <div className={styles.flexContainer}>
              <div className={styles.imgContainer}>
                <Image  src="/assets/about/desktop/image-quality.jpg" alt="coffee grinder" width="445" height="474"  className={styles.img} />
            </div>
            <div className={styles.imgContainerTablet}>
                <Image  src="/assets/about/tablet/image-quality.jpg" alt="coffee grinder" width="573" height="320"  className={styles.img} />
            </div>
            <div className={styles.imgContainerMobile}>
                <Image  src="/assets/about/mobile/image-quality.jpg" alt="coffee grinder" width="279" height="153"  className={styles.img} />
            </div>
            <div className={styles.textContainer}>
                <h2>Uncompromising quality</h2>
                <p>Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
            </div>  
            </div>
            
            <div className={styles.grayBox}></div>
            
        </div>
    )
}