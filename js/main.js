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
        new Planet(new Vector(-200,10), new Vector(), 50),
        new Planet(new Vector(100,100), new Vector(-10,100), 30),
    ])

    
    
    setInterval(()=>{
        
        updateCanvas(canvas)
        
        simulation.update()

        simulation.render(ctx)
        
    }, FIXED_DT * 1000)
}

window.onload = start
