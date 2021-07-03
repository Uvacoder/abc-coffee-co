import styles from '../../../styles/Subscribe/CreatePlan.module.scss'
import { Context } from '../../../context/Context'
import { useContext } from 'react'

export default function CreatePlan() {

    const {amountOfCoffee, howYouDrink, typeOfCoffee, typeOfGrind, deliveryFrequency} = useContext(Context)

    const buttonConstraints = {
        backgroundColor: howYouDrink === "_____" || typeOfCoffee === "_____" || amountOfCoffee === "_____" || typeOfGrind === "_____" || deliveryFrequency === "_____" ? "#E2DEDB" : "",
        pointerEvents: howYouDrink === "_____" || typeOfCoffee === "_____" || amountOfCoffee === "_____" || typeOfGrind === "_____" || deliveryFrequency === "_____" ? "none" : "",
    }

    return (
        <div className={styles.container}>
            <div className={styles.orderSummary}>
                <h4>ORDER SUMMARY</h4>
                <h2>&ldquo; I drink my coffee using <span>{howYouDrink}</span>, with a <span>{typeOfCoffee}</span> type of bean. <span>{amountOfCoffee}</span> ground ala <span>{typeOfGrind}</span> sent to me <span>{deliveryFrequency}</span>.&rdquo;</h2>
            </div>
            <div className={styles.buttonContainer} >
                <a className={styles.button} style={buttonConstraints}>Create my plan!</a>
            </div>
      </div>
    )
}