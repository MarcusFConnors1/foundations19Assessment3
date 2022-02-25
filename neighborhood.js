const randomBtn = document.querySelector('#random')
function randomRest(eve) {
    let restaurants = [
        "Chubby's",
        "Cravings",
        "Purple Turtle",
        "Kneaders",
        "Taco Amigo"        
    ]
    const random = Math.floor(Math.random() * restaurants.length);
    alert(`You should go to ${restaurants[random]}!`)
}

randomBtn.addEventListener('click', randomRest)