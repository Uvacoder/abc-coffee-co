import styles from '../../styles/Home/Hero.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image  src="/../public/assets/home/desktop/image-hero-coffeepress.jpg" alt="coffee grinder" width="1280" height="600"  className={styles.img} />
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