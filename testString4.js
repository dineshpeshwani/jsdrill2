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
console.log(fullName(person1));
console.log(fullName(person2));


