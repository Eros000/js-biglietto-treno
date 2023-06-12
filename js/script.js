const km = prompt('Quanti chilometri intende percorrere?')

console.log ('km', km, typeof km)

const age = prompt('Quanti anni hai?')

console.log ('age', age, typeof age)

const ageNumber = parseInt (age)

let price = (km*0.21)

if (ageNumber < 18){
    price =(km*(0.21-(0.21*20/100)))
}

if (ageNumber > 65){
    price =(km*(0.21-(0.21*40/100)))
}

console.log ('price', price, typeof price)

const Result = document.getElementById ('my-price')

Result.innerHTML = price