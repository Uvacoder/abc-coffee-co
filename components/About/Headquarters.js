import styles from '../../styles/About/Headquarters.module.scss'
import Image from 'next/image'

export default function Headquarters() {

    return (
        <div className={styles.container}>
            <h3 className={styles.headline}>Our headquarters</h3>
                <div className={styles.flexContainer}>
                    <div className={styles.countryBox}>
                        <div className={styles.imgContainer}>
                            <Image  src="/assets/about/desktop/illustration-uk.svg" alt="uk illustration" width="41" height="49"  className={styles.img} />
                        </div>
                        <h2>United Kingdom</h2>
                            <h4>68  Asfordby Rd</h4>
                            <h4>Alcaston</h4>
                            <h4>SY6 1YA</h4>
                            <h4>+44 1241 918425</h4>
                        </div>
                    <div className={styles.countryBox}>
                        <div className={styles.imgContainer}>
                            <Image  src="/assets/about/desktop/illustration-canada.svg" alt="canada illustration" width="51.5" height="50"  className={styles.img} />
                        </div>
                        <h2>Canada</h2>
                            <h4>1528  Eglinton Avenue</h4>
                            <h4>Toronto</h4>
                            <h4>Ontario M4P 1A6</h4>
                            <h4>+1 416 485 2997</h4>
                        </div>
                    <div className={styles.countryBox}>
                        <div className={styles.imgContainer}>
                            <Image  src="/assets/about/desktop/illustration-australia.svg" alt="australia illustration" width="49" height="44"  className={styles.img} />
                        </div>
                        <h2>Australia</h2>
                            <h4>36 Swanston Street</h4>
                            <h4>Kewell</h4>
                            <h4>Victoria</h4>
                            <h4>+61 4 9928 3629</h4>
                        </div>
                </div>
        </div>
    )
}