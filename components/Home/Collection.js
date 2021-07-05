import styles from '../../styles/Home/Collection.module.scss'
import Image from 'next/image'


export default function Collection() {

    return (
        <div className={styles.container}>
            <h1 className={styles.backText}>our collection</h1>
            <div className={styles.blendFlexContainer}>
                <div className={styles.blendBox}>
                    <div>
                     <Image  src="/../public/assets/home/desktop/image-gran-espresso.png" alt="coffee grounds" width="255" height="193"  className={styles.img} />   
                    </div>
                    <div className={styles.textContainer}>
                      <h3 className={styles.blendName}>Gran Espresso</h3>
                    <p className={styles.description}>Light and flavorful blend with cocoa and black pepper for an intense experience</p>  
                    </div>
                    
                </div>
                <div className={styles.blendBox}>
                    <div>
                       <Image  src="/../public/assets/home/desktop/image-planalto.png" alt="coffee grounds" width="255" height="193"  className={styles.img} /> 
                    </div>
                    <div className={styles.textContainer}>
                        <h3 className={styles.blendName}>Planalto</h3>
                        <p className={styles.description}>Brazilian dark roast with rich and velvety body, and hints of fruits and nuts</p>
                    </div>
                    
                </div>
                <div className={styles.blendBox}>
                    <div>
                        <Image  src="/../public/assets/home/desktop/image-piccollo.png" alt="coffee grounds" width="255" height="193"  className={styles.img} />
                    </div>
                    <div className={styles.textContainer}>
                        <h3 className={styles.blendName}>Piccollo</h3>
                        <p className={styles.description}>Mild and smooth blend featuring notes of toasted almond and dried cherry</p>
                    </div>
                </div>
                <div className={styles.blendBox}>
                    <div>
                      <Image  src="/../public/assets/home/desktop/image-danche.png" alt="coffee grounds" width="255" height="193"  className={styles.img} />  
                    </div>
                    <div className={styles.textContainer}>
                        <h3 className={styles.blendName}>Danche</h3>
                        <p className={styles.description}>Ethiopian hand-harvested blend densely packed with vibrant fruit notes</p>  
                    </div>
                    
                </div>
            </div>
            
            
        </div>
    )
}