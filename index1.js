// GET AND CREATE ELEMENTS
let solution = document.getElementById('solution') // p tag in index.html
let form = document.createElement("form")
let label = document.createElement("label")
let br = document.createElement('br')
let input = document.createElement('input')
let button = document.createElement('button')
let h1 = document.createElement('h1')

// SET SOME INNERTEXT AND ADD CUSTOM THINGS TO ELEMENTS
button.innerText = "Factorial!"
label.style.fontWeight = 'bold'
label.innerText = "Enter Factorial Number!"

// APPEND ELEMENTS TO APPROPRIATE 
form.append(label, br, input, button)
solution.append(form, h1)


// EventListeners
form.addEventListener('submit', (e) => {
    e.preventDefault()
    h1.innerText = fractorial(parseInt(input.value))

})



function fractorial(n){
    if(n< 3) return n || 1  
    return n * fractorial(n-1)
}

console.log([] == 0 )
console.log([] == '0')
console.log('0' === 0)
console.log('4' + 2)
console.log('4' * 2)

