const colorbtn = document.querySelector('#color');
const placebtn = document.querySelector('#place');
const ritualbtn = document.querySelector('#ritual');
const mepic = document.querySelector('.me')

ritualbtn.addEventListener('click', ritualAlert);
placebtn.addEventListener('click', placeAlert);
colorbtn.addEventListener('click', colorAlert);
mepic.addEventListener('mouseover', me)

function ritualAlert(eve) {
    eve.preventDefault();
    alert("WTF is this question? Favorite Ritual? We talkin' about summoning demons or something?")
};
function placeAlert(eve) {
    eve.preventDefault();
    alert("My Favorite place is definitely Yokohama. Clean, beautiful, and so much fun")
}
function colorAlert(eve) {
    eve.preventDefault();
    alert("Black and White, though technically aren't those not colors but shades? If not then Blue")
}
function me(eve) {
	eve.preventDefault();

	alert("Man that is one nice lookin' dood")
}