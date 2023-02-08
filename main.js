const buyChocolate = () => {
    const chocolateObject = {type: "Milk Chocolate"}
    return chocolateObject
}

const addingFlavoring = (chocolateObject) => {
    chocolateObject.flavor = "Mint"
    return chocolateObject
}

const makeBarkMixture = (chocolateObject) => {
    if (chocolateObject.flavor === "Mint") {
        chocolateObject.mixed = true
    } else {
        chocolateObject.mixed = false
    }
    // return chocolateObject
}

const bakeCandy = (chocolateObject) => {
    if (chocolateObject.mixed === true) {
        chocolateObject.baked = true
    } else {
        chocolateObject.baked = false
    }
    
}

const breakBark = (chocolateObject) => {
    if (chocolateObject.baked === true) {
        return ["Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece"]
    }
}

var chocolateObject = buyChocolate()

let chocolate = addingFlavoring(chocolateObject)
chocolate = makeBarkMixture(chocolateObject)
chocolate = bakeCandy(chocolateObject)
chocolate = breakBark(chocolateObject)
console.log(chocolate)