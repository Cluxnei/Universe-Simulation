class Simulation{
    constructor(planets){
        this.planets = planets || this.makeRandom()

        this.planets.map(planet => planet.sumulation = this)
    }
    makeRandom(){
        let planets = []
        for(let i = 0; i < PLANETS_NUMBER; i++){
            let pxrand = rand(-PLANETS_POSITION_RANGE,PLANETS_POSITION_RANGE)
            let pyrand = rand(-PLANETS_POSITION_RANGE,PLANETS_POSITION_RANGE)
            let vxrand = rand(-PLANETS_VELOCITY_RANGE,PLANETS_VELOCITY_RANGE)
            let vyrand = rand(-PLANETS_VELOCITY_RANGE,PLANETS_VELOCITY_RANGE)
            let radius = rand(PLANETS_RADIUS_RANGE_MIN, PLANETS_RADIUS_RANGE_MAX)
            let density = rand(PLANETS_DENSITY_RANGE_MIN, PLANETS_DENSITY_RANGE_MAX)
            let position = new Vector2(pxrand,pyrand)
            let velocity = new Vector2(vxrand,vyrand)
            let planet = new Planet(position,velocity,radius,density)
            planets.push(planet)
        }
        return planets
    }
    update(dt = 0.016){
        this.planets.map(planet => planet.update(dt))
    }
    render(ctx){
        this.planets.map(planet => planet.render(ctx))
    }
    removePlanet(planet){
        this.planets = this.planets.filter(p => p != planet)
    }
}
