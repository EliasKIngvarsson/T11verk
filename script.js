var a

function bangBong(a){
    if(a%7==0&&a%3!==0){console.log("BONG")}
    else if(a%3==0&&a%7!==0){console.log("BANG")}
    else if(a%3==0&&a%7==0){console.log("BANGBONG")}
    else {console.log(a)}

}

const personOne={
    firstName: 'Gunnsteinn',
    age:28
}
const doppelganger={
    firstName: personOne.firstName,
    age:personOne.age+10,
}
console.log(doppelganger)
console.log(personOne === doppelganger)