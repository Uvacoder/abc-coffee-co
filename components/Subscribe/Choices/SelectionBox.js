import styles from '../../../styles/Subscribe/Selection.module.scss'
import { Context } from '../../../context/Context'
import { useContext } from 'react'

export default function SelectionBox() {

    const {howYouDrink, typeOfCoffee, amountOfCoffee, typeOfGrind, deliveryFrequency, handleArrowClick} = useContext(Context)

    return (

           <div className={styles.selectionBox}>
                <div className={styles.selectionName} onClick={() => handleArrowClick("howYouDrink")}>
                    <span className={styles.numberSpan} style={{color: howYouDrink !== "_____" ? "rgb(14,135,132)" : ""}}>01</span>Preferences</div>
                <div className={styles.selectionName} onClick={() => handleArrowClick("typeOfCoffee")}>
                    <span className={styles.numberSpan} style={{color: typeOfCoffee !== "_____" ? "rgb(14,135,132)" : ""}}>02</span>Bean Type</div>
                <div className={styles.selectionName} onClick={() => handleArrowClick("amountOfCoffee")} >
                    <span className={styles.numberSpan} style={{color: amountOfCoffee !== "_____" ? "rgb(14,135,132)" : ""}}>03</span>Quantity</div>
                <div className={styles.selectionName} onClick={() => handleArrowClick("typeOfGrind")}>
                    <span className={styles.numberSpan} style={{color: typeOfGrind !== "_____" ? "rgb(14,135,132)" : ""}}>04</span>Grind Option</div>
                <div className={styles.selectionName} onClick={() => handleArrowClick("deliveryFrequency")} >
                    <span className={styles.numberSpan} style={{color: deliveryFrequency !== "_____" ? "rgb(14,135,132)" : ""}}>05</span>Deliveries</div>
           </div>
    )
}