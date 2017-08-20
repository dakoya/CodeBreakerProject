let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');

    if(answer.value == '' || attempt.value == '') {
    	setHiddenFields();
    }

    if(validateInput(input.value)) {
    	return;
    }
    attempt.value++;
    //add functionality to guess function here
}

function getResults(input){
	let html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
	for(i = 0; i < input.length; i++) {
		html += '';
	}
}

//implement new functions here
function setHiddenFields() {
	answer.value = Math.floor(Math.random() * 10000).toString();
	while(answer.value.length < 4) {
		answer.value = "0" + answer.value;
	}
	attempt.value= "0";
} 

function setMessage(message) {
	document.getElementById('message').innerHTML = message;
}

function validateInput(input) {
	if(input.length != 4) {
		setMessage('Guesses must be exactly 4 characters long.');
		return false;
	}
	return true;
}

//tests
let body = $('body');
let test = document.getElementById('test');
var test2 = $('#test');
console.log(test);
console.log(test2);





