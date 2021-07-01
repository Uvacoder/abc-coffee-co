import React, {useEffect, useState} from 'react'

const Context = React.createContext()

function ContextProvider({ children }) {


    const [howYouDrink, setHowYouDrink] = useState("_____")
    const [typeOfCoffee, setTypeOfCoffee] = useState("_____")
    const [amountOfCoffee, setAmountOfCoffee] = useState("_____")
    const [typeOfGrind, setTypeOfGrind] = useState("_____")
    const [deliveryFrequency, setDeliveryFrequency] = useState("_____")

    function handleHowYouDrinkSelection(choice) {
        setHowYouDrink(choice)
    }

    function handleWhatTypeOfCoffeeSelection(choice) {
        setTypeOfCoffee(choice)
    }

    function handleHowMuchCoffeeSelection(choice) {
        setAmountOfCoffee(choice)
    }

    function handleTypeOfGrindSelection(choice) {
        setTypeOfGrind(choice)
    }

    function handleDeliveryFrequencySelection(choice) {
        setDeliveryFrequency(choice)
    }


    console.log(howYouDrink, typeOfCoffee, amountOfCoffee, typeOfGrind, deliveryFrequency)


    return (
        <Context.Provider value={{howYouDrink, typeOfCoffee, amountOfCoffee, typeOfGrind, deliveryFrequency, handleHowYouDrinkSelection, handleWhatTypeOfCoffeeSelection, handleHowMuchCoffeeSelection, handleTypeOfGrindSelection, handleDeliveryFrequencySelection}} >
            {children}
        </Context.Provider>
    )
}


export { Context, ContextProvider}