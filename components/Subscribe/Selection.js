import styles from '../../styles/Subscribe/Selection.module.scss'
import { Context } from '../../context/Context'
import { useContext } from 'react'

export default function Selection() {

    const {howYouDrink, typeOfCoffee, amountOfCoffee, typeOfGrind, deliveryFrequency,handleHowYouDrinkSelection, handleWhatTypeOfCoffeeSelection, handleHowMuchCoffeeSelection, handleTypeOfGrindSelection, handleDeliveryFrequencySelection, handleArrowClick, isUpOrDown} = useContext(Context)

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
                    <div className={styles.choiceBox} onClick={() => handleHowYouDrinkSelection("Capsule")}><h4>Capsule</h4><p>Compatible with Nespresso systems and similar brewers</p></div>
                    <div className={styles.choiceBox} onClick={() => handleHowYouDrinkSelection("Filter")}><h4>Filter</h4><p>For pour over or drip methods like Aeropress, Chemex, and V60</p></div>
                    <div className={styles.choiceBox} onClick={() => handleHowYouDrinkSelection("Espresso")}><h4>Espresso</h4><p>Dense and finely ground beans for an intense, flavorful experience</p></div>
                </div>
              
              </div>
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
                    <div className={styles.choiceBox} onClick={() => handleWhatTypeOfCoffeeSelection("Single Origin")}><h4>Single Origin</h4><p>Distinct, high quality coffee from a specific family-owned farm</p></div>
                    <div className={styles.choiceBox} onClick={() => handleWhatTypeOfCoffeeSelection("Decaf")}><h4>Decaf</h4><p>Just like regular coffee, except the caffeine has been removed</p></div>
                    <div className={styles.choiceBox} onClick={() => handleWhatTypeOfCoffeeSelection("Blended")}><h4>Blended</h4><p>Combination of two or three dark roasted beans of organic coffees</p></div>
                 </div>
              </div>
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
                    <div className={styles.choiceBox} onClick={() => handleHowMuchCoffeeSelection("250g")}><h4>250g</h4><p>Perfect for the solo drinker. Yields about 12 delicious cups.</p></div>
                    <div className={styles.choiceBox} onClick={() => handleHowMuchCoffeeSelection("500g")}><h4>500g</h4><p>Perfect option for a couple. Yields about 40 delectable cups.</p></div>
                    <div className={styles.choiceBox} onClick={() => handleHowMuchCoffeeSelection("1000g")}><h4>1000g</h4><p>Perfect for offices and events. Yields about 90 delightful cups.</p></div>
                </div>
              </div>
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
                    <div className={styles.choiceBox} onClick={() => handleTypeOfGrindSelection("Wholebean")}><h4>Wholebean</h4><p>Best choice if you cherish the full sensory experience</p></div>
                    <div className={styles.choiceBox} onClick={() => handleTypeOfGrindSelection("Filter")}><h4>Filter</h4><p>For drip or pour-over coffee methods such as V60 or Aeropress</p></div>
                    <div className={styles.choiceBox} onClick={() => handleTypeOfGrindSelection("Cafetiére")}><h4>Cafetiére</h4><p>Course ground beans specially suited for french press coffee</p></div>
                </div>
              </div>
              <div className={styles.selectionDropDownBox}>
                <div className={styles.selectionTitleContainer}>
                  <h2>How often should we deliver?</h2> 
                    <div className={styles.arrowContainer}>
                      <svg className={styles.downArrow} 
                        onClick={() => handleArrowClick("deliveryFrequency")} 
                        style={{display: isUpOrDown["deliveryFrequency"] === "hidden" ? "" : "none"}}
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                      <svg className={styles.upArrow}
                        onClick={() => handleArrowClick("deliveryFrequency")}
                        style={{display: isUpOrDown["deliveryFrequency"] === "visible" ? "block" : "none"}}  
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg>
                    </div>
                </div>
                <div className={styles.choiceBoxContainer} style={{display: isUpOrDown["deliveryFrequency"] === "hidden" ? "none" : "flex"}}>
                      <div className={styles.choiceBox} onClick={() => handleDeliveryFrequencySelection("Every week")}><h4>Every week</h4><p>$7.20 per shipment. Includes free first-class shipping.</p></div>
                      <div className={styles.choiceBox} onClick={() => handleDeliveryFrequencySelection("Every 2 weeks")}><h4>Every 2 weeks</h4><p>$9.60 per shipment. Includes free priority shipping.</p></div>
                      <div className={styles.choiceBox} onClick={() => handleDeliveryFrequencySelection("Every month")}><h4>Every month</h4><p>$12.00 per shipment. Includes free priority shipping.</p></div>
                </div>
              </div> 
           </div>
            
        </div>
        
    )
}