class Simulation{
    constructor(planets){
        this.planets = planets || this.randomPlanets()
        this.planets.forEach(planet => planet.simulation = this)
    }
    randomPlanets(){
        let planets = []
        for(let i = 0; i < PLANETS_NUMBER; i++){
            const props = {
                position: new Vector(
                    rand(-PLANETS_POSITION_RANGE,PLANETS_POSITION_RANGE),
                    rand(-PLANETS_POSITION_RANGE,PLANETS_POSITION_RANGE),
                    rand(-PLANETS_POSITION_RANGE,PLANETS_POSITION_RANGE),
                ),
                velocity: new Vector(
                    rand(-PLANETS_VELOCITY_RANGE,PLANETS_VELOCITY_RANGE),
                    rand(-PLANETS_VELOCITY_RANGE,PLANETS_VELOCITY_RANGE),
                    rand(-PLANETS_VELOCITY_RANGE,PLANETS_VELOCITY_RANGE),
                ),
                radius: rand(PLANETS_RADIUS_RANGE_MIN, PLANETS_RADIUS_RANGE_MAX),
                density: rand(PLANETS_DENSITY_RANGE_MIN, PLANETS_DENSITY_RANGE_MAX),
            }
            const planet = new Planet(props.position, props.velocity, props.radius, props.density)
            planets.push(planet)
        }
        return planets
    }
    update(dt = 0.016, removeEntity = undefined){
        this.planets.forEach(planet => planet.update(dt, removeEntity))
    }
    removePlanet(planet){
        this.planets = this.planets.filter(p => p !== planet)
    }
}
