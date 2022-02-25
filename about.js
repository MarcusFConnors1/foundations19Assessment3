console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form has been submitted!")
}
function duckyBoi(eve) {
	eve.preventDefault();

	alert("You're almost as good-looking as Ducky Boi here")
}

let form = document.querySelector('form#contact');
document.querySelector('.duck').addEventListener('mouseover', duckyBoi)
form.addEventListener('submit', handleSubmit);