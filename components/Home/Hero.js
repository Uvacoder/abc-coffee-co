import styles from '../../styles/Home/Hero.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <div className={styles.img}>
                    <Image  src="/assets/home/desktop/image-hero-coffeepress.jpg" alt="coffee grinder" width="1280" height="600"   />
                </div>
                <div className={styles.imgTablet} >
                    <Image  src="/assets/home/tablet/image-hero-coffeepress.jpg" alt="coffee grinder" width="690" height="500"  />
                </div>
                <div className={styles.imgMobile} >
                    <Image  src="/assets/home/mobile/image-hero-coffeepress.jpg" alt="coffee grinder" width="327" height="500"  />
                </div>
                
            </div>
            <div className={styles.textContainer}>
                <h1>Great coffee made simple.</h1>
                <p>Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
                <Link href="subscribe">
                    <a className={styles.a} >Create your plan</a>
                </Link> 

            </div>
        </div>
    )
}