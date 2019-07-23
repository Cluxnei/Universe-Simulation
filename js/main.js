function require(src){
    let script = document.createElement('script')
    script.src = src + '.js'
    script.setAttribute('defer', '')
    document.head.appendChild(script)
}

require('js/constants')
require('js/helpers')
require('js/Vector')
require('js/planet')
require('js/simulation')

function start(){
    console.log('Start simulation')

    const canvas = initCanvas()
    const ctx = canvas.getContext('2d')

    const simulation = new Simulation([
        new Planet(new Vector(-400,0), new Vector(), 20),
        new Planet(new Vector(400,-100), new Vector(), 20),
    ])

    
    
    setInterval(()=>{
        
        updateCanvas(canvas)
        
        simulation.update()

        simulation.render(ctx)
        
    }, FIXED_DT * 1000)
}

window.onload = start
