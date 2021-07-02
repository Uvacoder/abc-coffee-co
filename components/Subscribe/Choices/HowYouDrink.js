import styles from '../../../styles/Subscribe/Selection.module.scss'
import { Context } from '../../../context/Context'
import { useContext } from 'react'

export default function HowYouDrink() {

    const {howYouDrink, typeOfCoffee, amountOfCoffee, typeOfGrind, deliveryFrequency,handleHowYouDrinkSelection, handleWhatTypeOfCoffeeSelection, handleHowMuchCoffeeSelection, handleTypeOfGrindSelection, handleDeliveryFrequencySelection, handleArrowClick, isUpOrDown} = useContext(Context)

    return (
        <div className={styles.selectionDropDownBox}>
                <div className={styles.selectionTitleContainer}>
                  <h2>How do you drink your coffee?</h2> 
                    <div className={styles.arrowContainer}>
                      <svg className={styles.downArrow} 
                        onClick={() => handleArrowClick("howYouDrink")}
                        style={{display: isUpOrDown["howYouDrink"] === "hidden" ? "" : "none"}}
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                      <svg className={styles.upArrow} 
                        onClick={() => handleArrowClick("howYouDrink")}
                        style={{display: isUpOrDown["howYouDrink"] === "visible" ? "block" : "none"}}
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg>
                    </div>
                </div>
                <div className={styles.choiceBoxContainer} style={{display: isUpOrDown["howYouDrink"] === "hidden" ? "none" : "flex"}}>
                    <div className={styles.choiceBox} 
                      onClick={() => handleHowYouDrinkSelection("Capsule")} 
                      style={{backgroundColor: howYouDrink === "Capsule" ? "#0E8784" : ""}}>
                        <h4>Capsule</h4>
                        <p>Compatible with Nespresso systems and similar brewers</p></div>
                    <div className={styles.choiceBox} 
                      onClick={() => handleHowYouDrinkSelection("Filter")} 
                      style={{backgroundColor: howYouDrink === "Filter" ? "#0E8784" : ""}}>
                        <h4>Filter</h4>
                        <p>For pour over or drip methods like Aeropress, Chemex, and V60</p></div>
                    <div className={styles.choiceBox} 
                      onClick={() => handleHowYouDrinkSelection("Espresso")} 
                      style={{backgroundColor: howYouDrink === "Espresso" ? "#0E8784" : ""}}>
                        <h4>Espresso</h4>
                        <p>Dense and finely ground beans for an intense, flavorful experience</p></div>
                </div>
              </div>
    )
}


