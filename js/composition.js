class Composition{
    constructor(mass){
        this.mass = mass
        this.element = this.getElementByMass()
    }
    update(mass, dt){
        this.mass = mass * dt
        this.element = this.getElementByMass()
        console.log(this.element);
    }
    getElementByMass(){
        const mass =  this.mass / PLANETS_INITIAL_MAX_MASS
        let mmcs = []
        PERIODIC_TABLE_ELEMENTS.map(element => mmcs.push(mmc(element.relativeMass, mass)))
        return PERIODIC_TABLE_ELEMENTS[mmcs.indexOf(Math.min.apply(Math, mmcs))];
    }
}
