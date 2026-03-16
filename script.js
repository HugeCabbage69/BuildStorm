const sections = document.querySelectorAll("section")

const music = new Audio("music.mp3")
music.loop = true
music.volume = 0

let musicStarted = false

function startMusic(){
if(!musicStarted){
music.play().catch(()=>{})
musicStarted = true
}
}

document.addEventListener("click", startMusic,{once:true})

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

document.body.setAttribute("data-section", entry.target.id)

entry.target.querySelectorAll(".fade").forEach(el=>{
el.classList.add("show")
})

}

})

},{threshold:0.4})

sections.forEach(section=>observer.observe(section))

const musicSection = document.getElementById("music")

function updateMusicVolume(){

const rect = musicSection.getBoundingClientRect()

const center = window.innerHeight/2
const sectionCenter = rect.top + rect.height/2

const distance = Math.abs(center-sectionCenter)

const maxDistance = window.innerHeight

let volume = 1-(distance/maxDistance)

volume=Math.max(0,Math.min(1,volume))

music.volume=volume*0.8

}

window.addEventListener("scroll",updateMusicVolume)
window.addEventListener("load",updateMusicVolume)