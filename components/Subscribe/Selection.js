import styles from '../../styles/Subscribe/Selection.module.scss'

export default function Selection() {

    return (
        <div className={styles.container}>
           <div className={styles.selectionBox}>
                <div className={styles.selectionName}><span className={styles.numberSpan}>01</span>Preferences</div>
                <div className={styles.selectionName}><span className={styles.numberSpan}>02</span>Bean Type</div>
                <div className={styles.selectionName}><span className={styles.numberSpan}>03</span>Quantity</div>
                <div className={styles.selectionName}><span className={styles.numberSpan}>04</span>Grind Option</div>
                <div className={styles.selectionName}><span className={styles.numberSpan}>05</span>Deliveries</div>
           </div>
           <div className={styles.rightSelectionContainer}>
              <div className={styles.selectionDropDownBox}>
                <div className={styles.selectionTitleContainer}><h2>How do you drink your coffee?</h2></div>
                
              
              </div>
              <div className={styles.selectionDropDownBox}>
                <div className={styles.selectionTitleContainer}><h2>What type of coffee?</h2></div>
              
              </div>
              <div className={styles.selectionDropDownBox}>
                <div className={styles.selectionTitleContainer}><h2>How much would you like?</h2></div>
              
              </div>
              <div className={styles.selectionDropDownBox}>
                <div className={styles.selectionTitleContainer}><h2>Want us to grind them?</h2></div>
              
              </div>
              <div className={styles.selectionDropDownBox}>
                <div className={styles.selectionTitleContainer}><h2>How often should we deliver?</h2></div>
              
              </div> 
           </div>
            
        </div>
        
    )
}