class Vector{

    constructor(x = 0, y = 0, z = 0){
        this.x = x
        this.y = y
        this.z = z
    }

    copy(){
        return new Vector(this.x, this.y, this.z)
    }

    add(vector){
        this.x += vector.x
        this.y += vector.y
        this.z += vector.z
        return this
    }

    sub(vector){
        this.x -= vector.x
        this.y -= vector.y
        this.z -= vector.z
        return this
    }

    scale(scaleX = 1, scaleY = undefined, scaleZ = undefined){
        this.x *= scaleX
        this.y *= scaleY || scaleX
        this.z *= scaleZ || scaleX
        return this
    }
    magnitude(){
        return Math.hypot(this.x, this.y, this.z)
    }

    normalize(){
        const magnitude = this.magnitude()
        this.x /= magnitude
        this.y /= magnitude
        this.z /= magnitude
        return this
    }
}
