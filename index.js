/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("main-input")
const btnEl = document.getElementById("main-btn")

const lengthResult = document.getElementById("length-result")
const volumeResult = document.getElementById("volume-result")
const massResult = document.getElementById("mass-result")

function multiplier(value, multiplyer){
    let answer = {"leftAnswer": 0, "rightAnswer": 0, "value": value}
    answer.leftAnswer =  parseFloat(value * multiplyer).toFixed(3)
    answer.rightAnswer = parseFloat( value / multiplyer).toFixed(3)
    return answer
}
function generateStr(orUnity, newUnity, multiplier){
    let text = `${multiplier.value} ${orUnity} = ${multiplier.leftAnswer} ${newUnity} | ${multiplier.value} ${newUnity} = ${multiplier.rightAnswer} ${orUnity}`
    return text
}

btnEl.addEventListener("click", function(){
    let inputValue = inputEl.valueAsNumber
    lengthResult.textContent = generateStr("meters", "feet", multiplier(inputValue, 3.281))
    volumeResult.textContent = generateStr("liters", "gallons", multiplier(inputValue, 0.264))
    massResult.textContent = generateStr("kilograms", "pounds", multiplier(inputValue, 2.204))
})
