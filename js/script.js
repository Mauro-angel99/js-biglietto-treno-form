const inputName = document.getElementById(`input-name`)
const inputKm = document.getElementById(`input-km`)
const age = document.getElementById(`age`)
const button = document.getElementById(`button`)

const nameParagraph = document.getElementById(`name`)
const discountParagraph = document.getElementById(`discount`)
const carriageParagraph = document.getElementById(`carriage`)
const codeParagraph = document.getElementById(`code`)
const priceParagraph = document.getElementById(`price`)



button.addEventListener(`click`, function () {
    nameParagraph.innerText = inputName.value
    console.log(inputName.value)

    const km = inputKm.value

    let price = km * 0.21
    console.log(price)

    let discount = `standard`
    console.log(discount)

    if (age.value < 18) {
        price = price - (price * 20 / 100)
        console.log(price)
        discount = `lo sconto è del 20%`
        console.log(discount)
    } else if (age.value > 65) {
        price = price - (price * 40 / 100)
        console.log(price)
        discount = `lo sconto è del 40%`
        console.log(discount)
    }

    priceParagraph.innerText = price.toFixed(2) + ` euro`

    discountParagraph.innerText = discount

    const minCarriage = parseInt(1)

    const maxCarriage = parseInt(5)

    const randomCarriage = Math.floor(Math.random() * (maxCarriage + 1 - minCarriage)) + minCarriage
    console.log(randomCarriage)

    carriageParagraph.innerText = randomCarriage

    const minCode = parseInt(3000)

    const maxCode = parseInt(90000)

    const randomCode = Math.floor(Math.random() * (maxCode + 1 - minCode)) + minCode
    console.log(randomCode)

    codeParagraph.innerText = randomCode

})





