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

    const initialPlanets = [
        new Planet(new Vector(), new Vector(), 10),
        new Planet(new Vector(40,10), new Vector(), 10),
        new Planet(new Vector(-40,-10), new Vector(), 10),
        new Planet(new Vector(-80,0), new Vector(), 10),
    ]

    const simulation = new Simulation(
        // initialPlanets
    )
    
    setInterval(()=>{
        
        updateCanvas(canvas)
        
        simulation.update()

        simulation.render(ctx)
        
    }, FIXED_DT * 1000)

    setInterval(() => {
        console.table({
            'Current Zoom': canvas.zoom,
            'Planet Number': simulation.planets.length,
            'Max Element': PERIODIC_TABLE_ELEMENTS[MAX_ELEMENT].name
        })
    }, LOG_AT * 1000)
}

window.onload = start
