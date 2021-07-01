import React, {useEffect, useState} from 'react'

const Context = React.createContext()

function ContextProvider({ children }) {


    const [howYouDrink, setHowYouDrink] = useState("_____")
    const [typeOfCoffee, setTypeOfCoffee] = useState("_____")
    const [amountOfCoffee, setAmountOfCoffee] = useState("_____")
    const [typeOfGrind, setTypeOfGrind] = useState("_____")
    const [deliveryFrequency, setDeliveryFrequency] = useState("_____")
    const [isUpOrDown, setIsUpOrDown] = useState({
        "howYouDrink": "hidden",
        "typeOfCoffee": "hidden",
        "amountOfCoffee": "hidden",
        "typeOfGrind": "hidden",
        "deliveryFrequency": "hidden",
    })

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

    function handleArrowClick(toggleHandle) {
        // console.log(toggleHandle, isUpOrDown[toggleHandle], isUpOrDown)
        if (isUpOrDown[toggleHandle] === "hidden") {
            const newValue = isUpOrDown[toggleHandle] = "visible"
            setIsUpOrDown({...isUpOrDown, newValue})
        } else {
            const newValue = isUpOrDown[toggleHandle] = "hidden"
            setIsUpOrDown({...isUpOrDown, newValue})
        }

    }

    console.log(isUpOrDown)


    console.log(howYouDrink, typeOfCoffee, amountOfCoffee, typeOfGrind, deliveryFrequency)


    return (
        <Context.Provider value={{howYouDrink, typeOfCoffee, amountOfCoffee, typeOfGrind, deliveryFrequency, handleHowYouDrinkSelection, handleWhatTypeOfCoffeeSelection, handleHowMuchCoffeeSelection, handleTypeOfGrindSelection, handleDeliveryFrequencySelection, handleArrowClick, isUpOrDown}} >
            {children}
        </Context.Provider>
    )
}


export { Context, ContextProvider}