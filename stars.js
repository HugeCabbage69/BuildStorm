const starScene = new THREE.Scene()

const starCamera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
2000
)

const starRenderer = new THREE.WebGLRenderer({
canvas:document.getElementById("starCanvas"),
alpha:true
})

starRenderer.setSize(window.innerWidth,window.innerHeight)

starCamera.position.z=1

const starGeometry=new THREE.BufferGeometry()

const starCount=12000
const radius=1000

const positions=[]

for(let i=0;i<starCount;i++){

const theta=Math.random()*2*Math.PI
const phi=Math.acos((Math.random()*2)-1)

const x=radius*Math.sin(phi)*Math.cos(theta)
const y=radius*Math.sin(phi)*Math.sin(theta)
const z=radius*Math.cos(phi)

positions.push(x,y,z)

}

starGeometry.setAttribute(
"position",
new THREE.Float32BufferAttribute(positions,3)
)

const starMaterial=new THREE.PointsMaterial({
color:0xffffff,
size:1
})

const stars=new THREE.Points(starGeometry,starMaterial)

starScene.add(stars)

window.addEventListener("scroll",()=>{

const scroll=window.scrollY

stars.rotation.y=scroll*0.0001
stars.rotation.x=scroll*0.00005

const fadeStart=window.innerHeight*0.5
const fadeEnd=window.innerHeight*0.8

let opacity=1

if(scroll>fadeStart){
opacity=1-(scroll-fadeStart)/(fadeEnd-fadeStart)
opacity=Math.max(opacity,0)
}

starRenderer.domElement.style.opacity=opacity

})

function animateStars(){
requestAnimationFrame(animateStars)
starRenderer.render(starScene,starCamera)
}

animateStars()