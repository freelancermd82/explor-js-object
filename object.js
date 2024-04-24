
// create object using object literals
const player = {};
player.name = 'Small Nirob';
player.specialty = 'batsman';
player.bat = function(){
    console.log('swing your bat');
}
console.log(player);
player.bat();

const student = {
    name: 'panday',
    job:'web developer',
    bal: function(){
        console.log('throw the ball');
    },
    salary: 12000
}
// 2. object constructor
const person = new Object();
console.log(person);

// 3. object create method
const item = Object.create(null);
console.log(item);

//4. class
class person2{
    name = 'abul';
    adress = 'rangpur';
    constructor(age){
        this.age=  age;
    }
}
const person1 = new person2(56);
console.log(person1);

//5. function

function car(model, price){
    this.model = model;
    this.price = price;
}
const tesla = new car('elon', 32);
console.log(tesla);