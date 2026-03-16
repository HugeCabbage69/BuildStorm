const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

const renderer = new THREE.WebGLRenderer({
canvas:document.getElementById("moonCanvas"),
alpha:true,
antialias:true
})

renderer.setSize(window.innerWidth,window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)

renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1.6

camera.position.z = 4
const light = new THREE.PointLight(0xffffff,6)
light.position.set(5,3,5)
scene.add(light)

const ambient = new THREE.AmbientLight(0xffffff,0.6)
scene.add(ambient)

const loader = new THREE.TextureLoader()

const moonTexture = loader.load(
"https://threejs.org/examples/textures/planets/moon_1024.jpg"
)

const geometry = new THREE.SphereGeometry(2,64,64)

const material = new THREE.MeshStandardMaterial({
map:moonTexture,

emissive:0xffffff,
emissiveMap:moonTexture,
emissiveIntensity:0.8
})

const moon = new THREE.Mesh(geometry,material)

scene.add(moon)

window.addEventListener("scroll",()=>{

const scroll = window.scrollY

moon.rotation.y = scroll * 0.0006

const fadeStart = window.innerHeight * 0.5
const fadeEnd = window.innerHeight * 0.8

let opacity = 1

if(scroll > fadeStart){

opacity = 1 - (scroll - fadeStart)/(fadeEnd - fadeStart)
opacity = Math.max(opacity,0)

}

renderer.domElement.style.opacity = opacity

})

function animate(){

requestAnimationFrame(animate)

renderer.render(scene,camera)

}

animate()

window.addEventListener("resize",()=>{

camera.aspect = window.innerWidth/window.innerHeight
camera.updateProjectionMatrix()

renderer.setSize(window.innerWidth,window.innerHeight)

})