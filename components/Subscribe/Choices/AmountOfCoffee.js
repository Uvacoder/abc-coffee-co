import styles from '../../../styles/Subscribe/Selection.module.scss'
import { Context } from '../../../context/Context'
import { useContext } from 'react'

export default function AmountOfCoffee() {

    const {howYouDrink, typeOfCoffee, amountOfCoffee, typeOfGrind, deliveryFrequency,handleHowYouDrinkSelection, handleWhatTypeOfCoffeeSelection, handleHowMuchCoffeeSelection, handleTypeOfGrindSelection, handleDeliveryFrequencySelection, handleArrowClick, isUpOrDown} = useContext(Context)

    return (
        <div className={styles.selectionDropDownBox}>
        <div className={styles.selectionTitleContainer}>
          <h2>How much would you like?</h2> 
            <div className={styles.arrowContainer}>
              <svg className={styles.downArrow} 
                onClick={() => handleArrowClick("amountOfCoffee")} 
                style={{display: isUpOrDown["amountOfCoffee"] === "hidden" ? "" : "none"}}
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
              <svg className={styles.upArrow} 
                onClick={() => handleArrowClick("amountOfCoffee")}
                style={{display: isUpOrDown["amountOfCoffee"] === "visible" ? "block" : "none"}} 
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg>
            </div>
            </div>
        <div className={styles.choiceBoxContainer} style={{display: isUpOrDown["amountOfCoffee"] === "hidden" ? "none" : "flex"}}>
            <div className={styles.choiceBox} 
              onClick={() => handleHowMuchCoffeeSelection("250g")}
              style={{backgroundColor: amountOfCoffee === "250g" ? "#0E8784" : ""}}
              ><h4>250g</h4><p>Perfect for the solo drinker. Yields about 12 delicious cups.</p></div>
            <div className={styles.choiceBox} 
              onClick={() => handleHowMuchCoffeeSelection("500g")}
              style={{backgroundColor: amountOfCoffee === "500g" ? "#0E8784" : ""}}
              ><h4>500g</h4><p>Perfect option for a couple. Yields about 40 delectable cups.</p></div>
            <div className={styles.choiceBox} 
              onClick={() => handleHowMuchCoffeeSelection("1000g")}
              style={{backgroundColor: amountOfCoffee === "1000g" ? "#0E8784" : ""}}
              ><h4>1000g</h4><p>Perfect for offices and events. Yields about 90 delightful cups.</p></div>
        </div>
      </div>
    )
}