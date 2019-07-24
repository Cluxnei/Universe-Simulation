function require(src){
    let script = document.createElement('script')
    script.src = src + '.js'
    script.setAttribute('defer', '')
    document.head.appendChild(script)
}

require('js/constants')
require('js/helpers')
require('js/vector')
require('js/element')
require('js/periodic-table')
require('js/composition')
require('js/planet')
require('js/simulation')

function start(){
    console.log('Start simulation')
    const canvas = initCanvas()
    const ctx = canvas.getContext('2d')
    
    PERIODIC_TABLE_ELEMENTS = (new PeriodicTable()).atoms

    const simulation = new Simulation()
    
    setInterval(()=>{
        
        updateCanvas(canvas)
        
        simulation.update()

        simulation.render(ctx)
        
    }, FIXED_DT * 1000)
}

window.onload = start
