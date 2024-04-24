
const first = {a: 2, b: 5, c: 3};
const second = {a: 2, c: 3, b: 5};

// if(first === second){
//     console.log('they are same');
// }
// else{
//     console.log('different');
// }

const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);

if(firstString === secondString){
    console.log('same');
}
else{
    console.log('different');
}

function compareObject(first, second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if(firstKeys.length === secondKeys.length){
        return true;
    }
    else{
        return false;
    }
}
const idSame = compareObject(first, second);
console.log(idSame);
