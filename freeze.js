
const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
const keys = Object.keys(bottle);
console.log(keys);
const values = Object.values(bottle);
console.log(values);

const pair = Object.entries(bottle);
console.log(pair);
// if you apply seal in the object . you can not delete property but you can modify object
// Object.seal(bottle);
// if you apply freeze you can not modify and delete--
Object.freeze(bottle);
bottle.price = 100;
bottle.height = 12;
delete bottle.isCleaned;
console.log(bottle);