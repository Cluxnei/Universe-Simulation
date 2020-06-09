class Planet{
    constructor(position = new Vector(), velocity = new Vector(), radius = 1, density = 1){
        this.position = position
        this.velocity = velocity
        this.acceleration = new Vector()
        this.forces = new Vector()
        this.radius = radius
        this.initialRadius = radius
        this.density = density
        this.volume = 4/3 * Math.PI * Math.pow(this.radius, 3)
        this.mass = this.density * this.volume
        this.composition = new Composition()
        this.trace = []
        this.simulation = []
        this.geometry = new THREE.DodecahedronBufferGeometry(this.radius, RENDER_DETAILS);
        this.material = new THREE.MeshBasicMaterial({color: this.color()});
        this.sphere = new THREE.Mesh(this.geometry, this.material);
    }
    attractionTo(otherPlanet){
        if(otherPlanet === this)
            return new Vector()
        const distanceBetweenPlanets = otherPlanet.position.copy().sub(this.position)
        const distanceBetweenPlanetsScalar = distanceBetweenPlanets.magnitude()
        const forceScalar = newtonGravitationLaw(this.mass, otherPlanet.mass,distanceBetweenPlanetsScalar)
        return distanceBetweenPlanets.normalize().scale(forceScalar)
    }
    computeTotalForces(){
        return this.simulation.planets
            .reduce((forces, planet) => forces.add(this.attractionTo(planet)), new Vector())
    }
    update(dt, removeEntity) {
        let collidingPlanet = this.collidingPlanet()
        if(collidingPlanet){
            this.mergeWith(collidingPlanet, dt, removeEntity)
        }
        // Compute total forces
        this.forces = this.computeTotalForces()
        // Compute acceleration (Acc = Force / Mass)
        this.acceleration = this.forces.copy().scale(1 / this.mass)

        if (this.acceleration.magnitude() > MAX_ACCELERATION_MAGNITUDE) {
            this.exceeded_max_acceleration = true
            if(STOP_AT_MAX_ACCELERATION_MAGNITUDE){
                this.acceleration.scale(0)
            }else{
                this.acceleration.normalize().scale(MAX_ACCELERATION_MAGNITUDE)
            }
          } else {
            this.exceeded_max_acceleration = false
          }
        // Integrate to velocity (Vel = Vel + Acc * dt)
        this.velocity.add(this.acceleration.copy().scale(dt))
        // Integrate to position
        this.position.add(this.velocity.copy().scale(dt))

        let snapshot = {
            position: this.position.copy(),
            velocity: this.velocity.magnitude()
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
        return this.composition.element.color
    }

    collidingPlanet(){
        return this.simulation.planets.find(p => this.collidingWith(p))
    }

    collidingWith(planet){
        if(planet === this || planet.mass < this.mass || this.removed)
            return false
        let distanceScalar = planet.position.copy().sub(this.position).magnitude()
        return (distanceScalar < planet.radius + this.radius)
    }

    addMass(mass, /*position*/) {
        let increase = (this.mass + mass) / this.mass
        // let percent = mass / this.mass
        this.volume *= increase
        this.radius = ((3 / 4 / Math.PI * this.volume) ** (1 / 3))
        this.mass += mass
        // this.position.add(this.position.copy().sub(position).scale(percent))
    }

    mergeWith(planet, dt, removeEntity) {
        let giveMass = MASS_GIVEAWAY_FACTOR * this.mass * dt * 100

        if (this.radius < EXISTING_RADIUS_MIN) {
            giveMass = this.mass
        }
        planet.composition.upgrade(this.composition)

        planet.addMass(giveMass/*, this.position*/)
        this.addMass(-giveMass/*, planet.position*/)

        if (this.mass <= 0.1) {
            this.removed = true
            removeEntity(this.sphere)
            this.simulation.removePlanet(this)
        }
    }
}
