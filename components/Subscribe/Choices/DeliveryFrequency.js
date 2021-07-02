import styles from '../../../styles/Subscribe/Selection.module.scss'
import { Context } from '../../../context/Context'
import { useContext } from 'react'

export default function DeliveryFrequency() {

    const {deliveryFrequency, handleDeliveryFrequencySelection, handleArrowClick, isUpOrDown} = useContext(Context)

    return (
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
                      <div className={styles.choiceBox} 
                        onClick={() => handleDeliveryFrequencySelection("Every week")} 
                        style={{backgroundColor: deliveryFrequency === "Every week" ? "#0E8784" : ""}}>
                        <h4 style={{color: deliveryFrequency === "Every week" ? "#F4F1EB" : ""}}>Every week</h4>
                        <p style={{color: deliveryFrequency === "Every week" ? "#F4F1EB" : ""}}>$7.20 per shipment. Includes free first-class shipping.</p></div>
                      <div className={styles.choiceBox} 
                        onClick={() => handleDeliveryFrequencySelection("Every 2 weeks")}
                        style={{backgroundColor: deliveryFrequency === "Every 2 weeks" ? "#0E8784" : ""}} >
                        <h4 style={{color: deliveryFrequency === "Every 2 weeks" ? "#F4F1EB" : ""}}>Every 2 weeks</h4>
                        <p style={{color: deliveryFrequency === "Every 2 weeks" ? "#F4F1EB" : ""}}>$9.60 per shipment. Includes free priority shipping.</p></div>
                      <div className={styles.choiceBox} 
                        onClick={() => handleDeliveryFrequencySelection("Every month")}
                        style={{backgroundColor: deliveryFrequency === "Every month" ? "#0E8784" : ""}}>
                        <h4 style={{color: deliveryFrequency === "Every month" ? "#F4F1EB" : ""}}>Every month</h4>
                        <p style={{color: deliveryFrequency === "Every month" ? "#F4F1EB" : ""}}>$12.00 per shipment. Includes free priority shipping.</p></div>
                </div>
              </div> 
    )
}