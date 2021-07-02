import styles from '../../styles/Subscribe/Selection.module.scss'
import { Context } from '../../context/Context'
import { useContext } from 'react'
import HowYouDrink from './Choices/HowYouDrink'
import TypeOfCoffee from './Choices/TypeOfCoffee'
import AmountOfCoffee from './Choices/AmountOfCoffee'
import TypeOfGrind from './Choices/TypeOfGrind'
import DeliveryFrequency from './Choices/DeliveryFrequency'

export default function Selection() {

    const {howYouDrink, typeOfCoffee, amountOfCoffee, typeOfGrind, deliveryFrequency,handleHowYouDrinkSelection, handleWhatTypeOfCoffeeSelection, handleHowMuchCoffeeSelection, handleTypeOfGrindSelection, handleDeliveryFrequencySelection, handleArrowClick, isUpOrDown} = useContext(Context)

    return (
        <div className={styles.container}>
           <div className={styles.selectionBox}>
                <div className={styles.selectionName} onClick={() => handleArrowClick("howYouDrink")}><span className={styles.numberSpan}>01</span>Preferences</div>
                <div className={styles.selectionName} onClick={() => handleArrowClick("typeOfCoffee")}><span className={styles.numberSpan}>02</span>Bean Type</div>
                <div className={styles.selectionName} onClick={() => handleArrowClick("amountOfCoffee")} ><span className={styles.numberSpan}>03</span>Quantity</div>
                <div className={styles.selectionName} onClick={() => handleArrowClick("typeOfGrind")}><span className={styles.numberSpan}>04</span>Grind Option</div>
                <div className={styles.selectionName} onClick={() => handleArrowClick("deliveryFrequency")} ><span className={styles.numberSpan}>05</span>Deliveries</div>
           </div>
           <div className={styles.rightSelectionContainer}>
              <HowYouDrink />
              <TypeOfCoffee />
              <AmountOfCoffee />
              <TypeOfGrind />
              <DeliveryFrequency />
           </div>
        </div> 
    )
}