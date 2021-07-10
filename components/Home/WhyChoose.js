import styles from '../../styles/Home/WhyChoose.module.scss'
import Image from 'next/image'

export default function WhyChoose() {

    return (
        <div className={styles.container}>
            <div className={styles.grayBacking}>
                <div className={styles.grayTextContainer}>
                    <h2>Why choose us?</h2>
                    <p>A large part of our role is choosing which particular coffees will be featured 
                    in our range. This means working closely with the best coffee growers to give 
                    you a more impactful experience on every level.</p>
                </div>
                <div className={styles.aboveFlexContainer}>
                    <div className={styles.featureBox}>
                        <div className={styles.imgContainer}>
                          <Image  src="/assets/home/desktop/icon-coffee-bean.svg" alt="coffee bean icon" width="70" height="70"  className={styles.img} />  
                        </div>
                        <div className={styles.textContainer}>
                            <h3>Best quality</h3>
                        <p>Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
                        </div>
                    </div>
                    <div className={styles.featureBox}>
                        <div className={styles.imgContainer}>
                          <Image  src="/assets/home/desktop/icon-gift.svg" alt="gift icon" width="77" height="70"  className={styles.img} />  
                        </div>
                        <div className={styles.textContainer}>
                           <h3>Exclusive benefits</h3>
                            <p>Special offers and swag when you subscribe, including 30% off your first shipment.</p> 
                        </div>
                    </div>
                    <div className={styles.featureBox}>
                        <div className={styles.imgContainer}>
                           <Image  src="/assets/home/desktop/icon-truck.svg" alt="truck icon" width="72" height="50"  className={styles.img} /> 
                        </div>
                        <div className={styles.textContainer}>
                           <h3>Free shipping</h3>
                            <p>We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</p> 
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}