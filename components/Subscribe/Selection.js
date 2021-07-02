import styles from '../../styles/Subscribe/Selection.module.scss'
import HowYouDrink from './Choices/HowYouDrink'
import TypeOfCoffee from './Choices/TypeOfCoffee'
import AmountOfCoffee from './Choices/AmountOfCoffee'
import TypeOfGrind from './Choices/TypeOfGrind'
import DeliveryFrequency from './Choices/DeliveryFrequency'
import SelectionBox from './Choices/SelectionBox'

export default function Selection() {

    return (
        <div className={styles.container}>
            <SelectionBox />
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