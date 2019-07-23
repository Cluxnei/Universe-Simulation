function rand(min,max){
    return Math.random() * (max - min ) + min
}
function newtonGravitationLaw(m1, m2, d) {
    const G = GRAVITATION_CONSTANT
    return G * (m1 * m2 / (d * d))
}
function initCanvas(){
    const canvas = document.querySelector("#canvas")
    canvas.zoom = INITIAL_ZOOM
    canvas.positionX = 0
    canvas.positionY = 0

    window.addEventListener('resize',resizeCanvas,false)

    canvas.addEventListener('mousemove',function(event){
        if(!canvas.dragging)
            return
        canvas.positionX = (canvas.positionX || 0) + event.movementX
        canvas.positionY = (canvas.positionY || 0) + event.movementY
    })

    canvas.addEventListener('mousedown',function drag(){
        canvas.dragging = true
    })

    canvas.addEventListener('mouseup',function(){
        canvas.dragging = false
    })

    canvas.addEventListener('wheel', function(event){        
        canvas.zoom += canvas.zoom * (event.deltaY / 100)
    })

    function resizeCanvas(){
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
    }
    resizeCanvas()

    return canvas
}

function updateCanvas(canvas) {
    const ctx = canvas.getContext('2d')
    
    const zoom = canvas.zoom
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    const x = canvas.positionX || 0
    const y = canvas.positionY || 0
    
    ctx.resetTransform()
    ctx.fillStyle = BACKGROUND_COLOR
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)
    ctx.translate(canvas.clientWidth / 2 + x, canvas.clientHeight / 2 + y)
    ctx.scale(zoom, zoom)
}

function interpolateColorStyleMapping(mag, magS, magE, colorAtMin, colorAtMax) {
    let int = (mag - magS) / (magE - magS)
    return interpolateColorStyle(int, colorAtMin, colorAtMax)
}

function interpolateColorStyle(int, s, e) {
    int = Math.max(Math.min(int, 1), 0)
    intI = 1 - int
    return `rgba(${s[0] * intI + e[0] * int}, ${s[1] * intI + e[1] * int}, ${s[2] * intI + e[2] * int}, ${s[3] * intI + e[3] * int})`
}

function colorForTrace(mag, magE = 500) {
    const magS = 0
    const colorAtMax = [230, 255, 230, 0.9]
    const colorAtMin = [255, 255, 255, 0.05]

    return interpolateColorStyleMapping(mag, magS, magE, colorAtMin, colorAtMax)
}
