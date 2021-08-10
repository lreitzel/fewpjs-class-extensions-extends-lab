class Polygon {
    constructor (sides) {
        this.sides = sides
    }

    get countSides () {
        return this.sides.length;
    }

    get perimeter () {
        return this.sides.reduce((init, current) => init + current);
    }
}

class Triangle extends Polygon {
    get isValid () {
        if (this.sides.length === 3) {
            let one = this.sides[0]
            let two = this.sides[1]
            let three = this.sides[2]
            return ((one + two > three) && (one + three > two) && (three + two > one))
        }else {
            return false
        }
    }
}

class Square extends Polygon {
    get area () {
        let one = this.sides[0]
        return one * one;
    }

    get isValid () {
        let one = this.sides[0]
        let two = this.sides[1]
        let three = this.sides[2]
        let four = this.sides[3]
        return ((one === two) && (two === three) && (three === four))
    }
}