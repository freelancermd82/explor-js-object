
const student = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        return this.name + 'is participating in an exam';
    },
    improveMent: function(subject){
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
    },
    treatDey: function(amount){
        this.money = this.money - amount;
        return this.money;
    }
}
const output = student.exam();
console.log(output);
const reExam = student.improveMent('algebra');
console.log(reExam);
const totalMoney = student.treatDey(110);
console.log(totalMoney);