import styles from '../../../styles/Subscribe/Selection.module.scss'
import { Context } from '../../../context/Context'
import { useContext } from 'react'

export default function TypeOfCoffee() {

    const {howYouDrink, typeOfCoffee, amountOfCoffee, typeOfGrind, deliveryFrequency,handleHowYouDrinkSelection, handleWhatTypeOfCoffeeSelection, handleHowMuchCoffeeSelection, handleTypeOfGrindSelection, handleDeliveryFrequencySelection, handleArrowClick, isUpOrDown} = useContext(Context)

    return (
        <div className={styles.selectionDropDownBox}>
        <div className={styles.selectionTitleContainer}>
          <h2>What type of coffee?</h2> 
            <div className={styles.arrowContainer}>
              <svg className={styles.downArrow} 
                onClick={() => handleArrowClick("typeOfCoffee")} 
                style={{display: isUpOrDown["typeOfCoffee"] === "hidden" ? "" : "none"}}
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
              <svg className={styles.upArrow} 
                onClick={() => handleArrowClick("typeOfCoffee")}
                style={{display: isUpOrDown["typeOfCoffee"] === "visible" ? "block" : "none"}} 
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg>
            </div>
        </div>
        <div className={styles.choiceBoxContainer} style={{display: isUpOrDown["typeOfCoffee"] === "hidden" ? "none" : "flex"}}>
            <div className={styles.choiceBox} 
              onClick={() => handleWhatTypeOfCoffeeSelection("Single Origin")}
              style={{backgroundColor: typeOfCoffee === "Single Origin" ? "#0E8784" : ""}}>
              <h4>Single Origin</h4><p>Distinct, high quality coffee from a specific family-owned farm</p></div>
            <div className={styles.choiceBox} 
              onClick={() => handleWhatTypeOfCoffeeSelection("Decaf")}
              style={{backgroundColor: typeOfCoffee === "Decaf" ? "#0E8784" : ""}}>
              <h4>Decaf</h4><p>Just like regular coffee, except the caffeine has been removed</p></div>
            <div className={styles.choiceBox} 
              onClick={() => handleWhatTypeOfCoffeeSelection("Blended")}
              style={{backgroundColor: typeOfCoffee === "Blended" ? "#0E8784" : ""}}>
              <h4>Blended</h4><p>Combination of two or three dark roasted beans of organic coffees</p></div>
         </div>
      </div>
    )
}