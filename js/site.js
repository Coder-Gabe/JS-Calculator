function add() {

	let numberOne = document.getElementById('firstNumber').value;
	let numberTwo = document.getElementById('secondNumber').value;

	numberOne = parseInt(numberOne);
	numberTwo = parseInt(numberTwo);

	let sum = numberOne + numberTwo;

	let resultsDiv = document.getElementById('results');
	resultsDiv.innerText = sum;
}



function subtract() {

	let numberOne = document.getElementById('firstNumber').value;
	let numberTwo = document.getElementById('secondNumber').value;

	numberOne = parseInt(numberOne);
	numberTwo = parseInt(numberTwo);

	let subtract = numberOne - numberTwo;

	let resultsDiv = document.getElementById('results');
	resultsDiv.innerText = subtract;

}

function multiply() {

	let numberOne = document.getElementById('firstNumber').value;
	let numberTwo = document.getElementById('secondNumber').value;

	numberOne = parseInt(numberOne);
	numberTwo = parseInt(numberTwo);

	let multiply = numberOne * numberTwo;

	let resultsDiv = document.getElementById('results');
	resultsDiv.innerText = multiply;


}

function divide() {

	let numberOne = document.getElementById('firstNumber').value;
	let numberTwo = document.getElementById('secondNumber').value;

	numberOne = parseInt(numberOne);
	numberTwo = parseInt(numberTwo);

	let divide = numberOne / numberTwo;

	if (numberTwo == 0) {
		divide = 'Cannot divide by zero!';
	}

	let resultsDiv = document.getElementById('results');
	resultsDiv.innerText = divide;


}

function sumAll() {

	let numberString = document.getElementById('numberSeries').value;

	let numberArr = numberString.split('');

	let sum = 0;

	for (let i = 0; i < numberArr.length; i = i + 1) {
		let currentNumber = numberArr[i];

		currentNumber = parseInt(currentNumber);

		sum = sum + currentNumber;
	}

	let resultsSeries = document.getElementById('results');
	resultsSeries.innerText = sum;

}

function multiplyAll() {

	let numberString = document.getElementById('numberSeries').value;

	let numberArr = numberString.split('');

	let mult = 1;

	for (let i = 0; i < numberArr.length; i = i + 1) {
		let currentNumber = numberArr[i];

		currentNumber = parseInt(currentNumber);

		mult = mult * currentNumber;
	}

	let resultsSeries = document.getElementById('results');
	resultsSeries.innerText = mult;

}


function minimum() {

	let numberString = document.getElementById('numberSeries').value;

	let numberArr = numberString.split('');

	let min = parseInt(numberArr[0]);

	for (let i = 1; i < numberArr.length; i = i + 1) {

		let currentNumber = numberArr[i];

		let number = parseInt(currentNumber);

		if (number < min) {
			min = number;
		}

	}

	let resultsSeries = document.getElementById('results');
	resultsSeries.innerText = min;

}


function maximum() {

	let numberString = document.getElementById('numberSeries').value;

	let numberArr = numberString.split('');

	let max = parseInt(numberArr[0]);

	for (let i = 1; i < numberArr.length; i = i + 1) {

		let currentNumber = numberArr[i];

		let number = parseInt(currentNumber);

		if (number > max) {
			max = number;
		}

	}

	let resultsSeries = document.getElementById('results');
	resultsSeries.innerText = max;

}


function average() {

	let numberString = document.getElementById('numberSeries').value;

	let numberArr = numberString.split('');

	let sum = 0;

	for (let i = 0; i < numberArr.length; i = i + 1) {
		let currentNumber = numberArr[i];

		currentNumber = parseInt(currentNumber);

		sum = sum + currentNumber;
	}

	let avg = sum / numberArr.length;

	let resultsSeries = document.getElementById('results');
	resultsSeries.innerText = avg;


}