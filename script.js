/* register button interaction */

const registerBtn = document.getElementById("registerBtn")

registerBtn.addEventListener("click", () => {

registerBtn.innerText = "Registration Opening Soon 🚀"

})



/* countdown timer */

const eventDate = new Date("2026-08-01")

function updateCountdown(){

const now = new Date()

const diff = eventDate - now

const days = Math.floor(diff / (1000*60*60*24))

const hours = Math.floor(diff / (1000*60*60) % 24)

const minutes = Math.floor(diff / (1000*60) % 60)

document.getElementById("days").innerText = days
document.getElementById("hours").innerText = hours
document.getElementById("minutes").innerText = minutes

}

setInterval(updateCountdown,1000)

updateCountdown()