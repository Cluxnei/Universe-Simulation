class Composition{
    constructor(element){
        this.element = element || PERIODIC_TABLE_ELEMENTS[0]
        this.number = this.element.number - 1
    }
    upgrade(composition){
        if(composition.number >= this.number){
            this.number++
            this.element = PERIODIC_TABLE_ELEMENTS[this.number]
            if(this.number > MAX_ELEMENT)
               MAX_ELEMENT = this.number
        }
    }
}
