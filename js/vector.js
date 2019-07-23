class Vector{

    constructor(x = 0, y = 0){
        this.x = x
        this.y = y
    }

    copy(){
        return new Vector(this.x, this.y)
    }

    add(vector){
        this.x += vector.x
        this.y += vector.y
        return this
    }

    sub(vector){
        this.x -= vector.x
        this.y -= vector.y
        return this
    }

    scale(scaleX = 1, scaleY = scaleX){
        this.x *= scaleX
        this.y *= scaleY
        return this
    }
    magnitude(){
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }

    normalize(){
        const magnitude = this.magnitude()
        this.x /= magnitude
        this.y /= magnitude
        return this
    }
}
