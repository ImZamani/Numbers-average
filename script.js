// var userNumber = 0
// var sum = 0
// var counter = 0

// while (userNumber != -1) {
// 	sum += userNumber
// 	userNumber = Number(prompt('Enter The Number: \n if you dont have a number, enter -1'))
// 	if (userNumber != -1) {
// 		counter++
// 	}
// }

// console.log('Average: ', sum / counter)

let $ = document;
let input = $.querySelector(".input");
let btn = $.querySelector(".btn");
let showResult = $.querySelector(".showResult");


let sum = 0
let counter = 0
let result = 0

btn.addEventListener("click", () => {
	let inputValue = Number(input.value)
	input.value = ""
	
	if (inputValue == -1){
		showResult.innerHTML = `Average is : ${result}`
	} else {
		sum += inputValue
		counter++
		result = sum / counter
	}
});

