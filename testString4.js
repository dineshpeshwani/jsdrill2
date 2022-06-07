const fullName = require('./string4');

let person1 =  
    {
        "first_name" : "JoHN", 
        "last_name" : "SMith"
    }
let person2 = 
    {
        "first_name" : "JoHN", 
        "middle_name" : "doe", 
        "last_name" : "SMith"
    }

    let fname = person1.first_name;
    let lname = person1.last_name;

console.log(fullName(fname,lname));


