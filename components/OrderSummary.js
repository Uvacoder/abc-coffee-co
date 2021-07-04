import styles from '../styles/OrderSummary.module.scss'
import { Context } from '../context/Context'
import { useContext } from 'react'


export default function OrderSummary() {

    const {amountOfCoffee, howYouDrink, typeOfCoffee, typeOfGrind, deliveryFrequency, showOrderSummary} = useContext(Context)

    const price = deliveryFrequency === "Every Week" ? "$28.80/mo" : "Every 2 Weeks" ? "$19.20/mo" : "$12.00"

    return (
        <div className={styles.container} style={{display: showOrderSummary === true ? '' : "none"}}>
            <div className={styles.orderSummary}>
                <h2>Order Summary</h2>
            </div>
            <div className={styles.orderStateSummary}>
                <h2>&ldquo; I drink my coffee using <span>{howYouDrink}</span>, with a <span>{typeOfCoffee}</span> type of bean. <span>{amountOfCoffee}</span> ground ala <span>{typeOfGrind}</span> sent to me <span>{deliveryFrequency}</span>.&rdquo;</h2>
                <p>
            Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. 
            </p> 
            </div>
            <div className={styles.buttonContainer} >
                <h2>{price}</h2>
                <div>
                  <a className={styles.button} >Checkout</a>  
                </div> 
            </div>
      </div>
    )
}