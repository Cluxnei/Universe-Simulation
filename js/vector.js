class Vector2{

    constructor(x = 0, y = 0){
        this.x = x
        this.y = y
    }

    copy(){
        return new Vector2(this.x, this.y)
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

    scale(scaleFactorX = 1, scaleFactorY = scaleFactorX){
        this.x *= scaleFactorX
        this.y *= scaleFactorY
        return this
    }

    magnitute(){
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }

    normalize(){
        let magnitute = this.magnitute()
        this.x /= magnitute
        this.y /= magnitute
        return this
    }
}
