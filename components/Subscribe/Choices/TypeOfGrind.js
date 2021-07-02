import styles from '../../../styles/Subscribe/Selection.module.scss'
import { Context } from '../../../context/Context'
import { useContext } from 'react'

export default function TypeOfGrind() {

    const {howYouDrink, typeOfCoffee, amountOfCoffee, typeOfGrind, deliveryFrequency,handleHowYouDrinkSelection, handleWhatTypeOfCoffeeSelection, handleHowMuchCoffeeSelection, handleTypeOfGrindSelection, handleDeliveryFrequencySelection, handleArrowClick, isUpOrDown} = useContext(Context)

    return (
        <div className={styles.selectionDropDownBox}>
        <div className={styles.selectionTitleContainer}>
          <h2>Want us to grind them?</h2> 
            <div className={styles.arrowContainer}>
              <svg className={styles.downArrow} 
                onClick={() => handleArrowClick("typeOfGrind")} 
                style={{display: isUpOrDown["typeOfGrind"] === "hidden" ? "" : "none"}}
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
              <svg className={styles.upArrow} 
                onClick={() => handleArrowClick("typeOfGrind")}
                style={{display: isUpOrDown["typeOfGrind"] === "visible" ? "block" : "none"}} 
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg>
            </div>
        </div>
        <div className={styles.choiceBoxContainer} style={{display: isUpOrDown["typeOfGrind"] === "hidden" ? "none" : "flex"}}>
            <div className={styles.choiceBox} 
            style={{backgroundColor: typeOfGrind === "Wholebean" ? "#0E8784" : ""}}
            onClick={() => handleTypeOfGrindSelection("Wholebean")}>
            <h4 style={{color: typeOfGrind === "Wholebean" ? "#F4F1EB" : ""}}>Wholebean</h4>
            <p style={{color: typeOfGrind === "Wholebean" ? "#F4F1EB" : ""}}>Best choice if you cherish the full sensory experience</p></div>
            <div className={styles.choiceBox} 
            style={{backgroundColor: typeOfGrind === "Filter" ? "#0E8784" : ""}}
            onClick={() => handleTypeOfGrindSelection("Filter")}>
            <h4 style={{color: typeOfGrind === "Filter" ? "#F4F1EB" : ""}}>Filter</h4>
            <p style={{color: typeOfGrind === "Filter" ? "#F4F1EB" : ""}}>For drip or pour-over coffee methods such as V60 or Aeropress</p></div>
            <div className={styles.choiceBox} 
            style={{backgroundColor: typeOfGrind === "Cafetiére" ? "#0E8784" : ""}}
            onClick={() => handleTypeOfGrindSelection("Cafetiére")}>
            <h4 style={{color: typeOfGrind === "Cafetiére" ? "#F4F1EB" : ""}}>Cafetiére</h4>
            <p style={{color: typeOfGrind === "Cafetiére" ? "#F4F1EB" : ""}}>Course ground beans specially suited for french press coffee</p></div>
        </div>
      </div>
    )
}