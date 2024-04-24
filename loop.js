
const numbers = [12, 54, 25, 23, 26];
for(const number of numbers){
    console.log(number);
}
//----for of loop can not be used with object
const bottle = {color: 'yellow', price: 50, isCleared: true, capacity: 1};
// for(const key of bottle){
//     console.log(key);
// }
//1. first option loop through an object
const keys = Object.keys(bottle);
console.log(keys);
/**
    3 way to read object properties
    bottle.color
    bottle['color']
    bottle[key]
*/
for(const key of keys){
    console.log(bottle[key]);
}
// for in loop used object
for(const key in bottle){
    console.log(key, bottle[key]);
}
// advanced
const pair = Object.entries(bottle);
console.log(pair);
for(const [key, value] of Object.entries(bottle)){
    console.log(key, value);
}