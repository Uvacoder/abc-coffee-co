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

                </div>
                

            </div>
        </div>
    )
}