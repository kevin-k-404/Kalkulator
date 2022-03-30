const calculatorScreen = document.querySelector(`.calculator-screen`)
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const equalSign = document.querySelector(`.equal-sign`)
const clearBtn = document.querySelector(`.all-clear`)
const decimal = document.querySelector(`.decimal`)
const percent = document.querySelector(`.percentage`)

let prevNumber = ``
let calculationOperator = ``
let currentNumber = ``

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const inputNumber = (number) => {
    if (currentNumber === `0`){
        currentNumber = number
    } else {
        currentNumber += number
    }
}

const inputOperator = (operator) => {
    if (calculationOperator === ``) {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = `0`
}

const calculate = () => {
    let result = ``
    switch(calculationOperator) {
        case"+" :
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case"-" :
            result = prevNumber - currentNumber
            break
        case"*" :
            result = prevNumber * currentNumber
            break
        case"/" :
            result = prevNumber / currentNumber
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ``
}

const clearAll = () => {
    prevNumber = ``
    calculationOperator = ``
    currentNumber = `0`
}

inputDecimal = (dot) => {
    if(currentNumber.includes(`.`)) {
        return
    }
    currentNumber += dot
}

const percentNumber = () => {
    let presult =``
    presult = parseFloat(currentNumber) / 100
    currentNumber = presult
}

numbers.forEach((number) => {
    number.addEventListener("click",(event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

operators.forEach((operator) => {
    operator.addEventListener("click",(event) => {
        inputOperator(event.target.value)
    })
})

equalSign.addEventListener(`click`, () => {
    calculate()
    updateScreen(currentNumber)
})

clearBtn.addEventListener(`click`, () => {
    clearAll ()
    updateScreen(currentNumber)
})

decimal.addEventListener(`click`, (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

percent.addEventListener(`click`, (event) => {
    percentNumber(event.target.value)
    updateScreen(currentNumber)
})