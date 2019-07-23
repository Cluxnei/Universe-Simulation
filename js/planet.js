class Planet{
    constructor(position = new Vector2(), velocity = new Vector2(), radius = 1, density = 1){
        this.position = position
        this.velocity = velocity
        this.acceleration = new Vector2()
        this.forces = new Vector2()
        this.radius = radius
        this.density = density
        this.volume = 4/3 * Math.PI * Math.pow(this.radius, 3)
        this.mass = this.density * this.volume

        this.trace = []
    }
    attractionTo(otherPlanet){
        if(otherPlanet == this)
            return new Vector2()
        const distanceBetweenPlanets = otherPlanet.position.copy().sub(this.position)
        const distanceBetweenPlanetsScalar = distanceBetweenPlanets.magnitute()
        const forceScalar = newtonGravitationLaw(this.mass, otherPlanet.mass,distanceBetweenPlanetsScalar)
        const forceVector = distanceBetweenPlanets.normalize().scale(forceScalar)
        return forceVector
    }
    computeTotalForces(){
        return this.sumulation.planets
            .reduce((forces, planet) => forces.add(this.attractionTo(planet)), new Vector2())
    }
    update(dt) {
        let collidingPlanet = this.collidingPlanet()
        if(collidingPlanet){
            this.mergeWith(collidingPlanet, dt)
        }
        // Compute total forces
        this.forces = this.computeTotalForces()
        // Compute acceleration (Acc = Force / Mass)
        this.acceleration = this.forces.copy().scale(1 / this.mass)
        // Integrate to velocity (Vel = Vel + Acc * dt)
        this.velocity.add(this.acceleration.copy().scale(dt))
        // Integrate to position
        this.position.add(this.velocity.copy().scale(dt))

        let snapshot = { 
            position: this.position.copy(),
            velocity: this.velocity.magnitute()
        }
        if (this.traceStep > TRACE_LENGTH_SKIP_STEPS) {
            this.trace.push(snapshot)
            this.trace = this.trace.slice(Math.max(0, this.trace.length - TRACE_LENGTH_PARTS))
            this.traceStep = 0
        }else {
            this.traceStep = (this.traceStep || 0) + 1
            this.trace[this.trace.length - 1] = snapshot
        }
    }

    render(ctx){
        this.renderPlanet(ctx)

        this.renderTrace(ctx)
    }

    renderPlanet(ctx) {
        ctx.beginPath()
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 360)
        ctx.strokeStyle = this.exceeded_max_acceleration ? '#FF0000' : 'transparent'
        ctx.fillStyle = this.color()
        ctx.stroke()
        ctx.fill()
    }

    renderTrace(ctx) {
        if (this.trace.length > 1) {
          for(let i = 1; i < this.trace.length; i++) {
            ctx.beginPath()
            ctx.moveTo(this.trace[i - 1].position.x, this.trace[i - 1].position.y)
            ctx.lineTo(this.trace[i].position.x, this.trace[i].position.y)
            ctx.strokeStyle = colorForTrace(i, TRACE_LENGTH_PARTS)
            ctx.stroke()
          }
        }
      }

    color(){
        return interpolateColorStyleMapping(this.radius, 10, 100, 
            [184, 233, 134, 0.8],
            [242, 100, 83, 0.8])
    }

    collidingPlanet(){
        return this.sumulation.planets.find(p => this.collidingWith(p))
    }

    collidingWith(planet){
        if(planet == this || planet.mass < this.mass || this.removed)
            return false
        let distanceScalar = planet.position.copy().sub(this.position).magnitute()
        return (distanceScalar < planet.radius + this.radius)
    }

    addMass(mass, position) {
        let increase = (this.mass + mass) / this.mass
        let percent = mass / this.mass
        this.volume *= increase
        this.radius = Math.pow((3 / 4 * 1 / Math.PI * this.volume), (1 / 3))
        this.mass += mass
        // this.position.add(this.position.copy().sub(position).scale(percent))
    }

    mergeWith(planet, dt) {
        let giveMass = MASS_GIVEAWAY_FACTOR * this.mass * dt * 100
    
        if (this.radius < EXISTING_RADIUS_MIN) {
            giveMass = this.mass
        }
    
        planet.addMass(giveMass, this.position)
        this.addMass(-giveMass, planet.position)
    
        if (this.mass <= 0.1) {
            this.removed = true
            this.sumulation.removePlanet(this)
        }
    }
}
