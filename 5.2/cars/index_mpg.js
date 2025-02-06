//  1. Create a function that receive a car Origin & car Miles_per_Gallon and return all the cars that meet the relevant request.
// 2. Create a function that receive cars array and return the average of the HP between all the cars.
// 3. Create function that receive car property, one of the following: "Miles_per_Gallon", "Cylinders", "Displacement", "Horsepower","Weight_in_lbs","Acceleration"
// and value which can be a number, and the function return all the cars that meet the request for example getCarByProperty(1000,"Weight_in_lbs") => will return all the cars that has weight 1000 and below.

// getCarByProperty(12,"Cylinders") => will return all the cars that has number of Cylinders 12 and below.


//  ## task number one
function getCarsByOriginAndMPG(origin, Miles_per_Gallon) {
    const results = [];
    for (let index = 0; index < carsForRental.length; index++) {
        const car = carsForRental[index];
        if (origin === car.Origin && Miles_per_Gallon === car.Miles_per_Gallon) {
            results.push(car);
        }
    } 
    return results;
}
// ##task number two 
function averageOfHpCars() {
    let sumOfHP = 0;
    for (let index = 0; index < carsForRental.length; index++) {
        const car = carsForRental[index];
        sumOfHP = sumOfHP + car.Horsepower;
    }
    return sumOfHP/carsForRental.length;
}

const allowed_keys =  ["Miles_per_Gallon", "Cylinders", "Displacement", "Horsepower","Weight_in_lbs","Acceleration"];

function validateNumericKey(key) {
    let is_allowed = false;
    for (let i = 0; i < allowed_keys.length; i++) {
        if (allowed_keys[i] === key) {
            return is_allowed = true;
        }
    }
}

// ## task number three
function getCarByProperty(max_value, property_key) {
    if (!validateNumericKey(property_key)) {
        throw new Error(`your key ${property_key} is not related to number value`);
    }
    const results = [];
    for (let i = 0; i < carsForRental.length; i++) {
        const car = carsForRental[i];
        const property_value = car[property_key];
        if (property_value <= max_value) {
            results.push(car);
        }
    }
    return results;
} 

console.log('Task #1', getCarsByOriginAndMPG("USA", 18));
console.log(`task #2`, averageOfHpCars());
console.log('task #3', getCarByProperty(1000, "USA"));