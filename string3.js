const monthNames = 
[
   "January", "February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December"
];

function printMonth(str)
{
    if(str.length > 7 && str.length < 11){
        let num = str.split("/");
        for(let i=0; i<monthNames.length+1; i++){
        if(num[1] == i) return monthNames[i-1];
    }}
    else{return "Invalid date format"};
    
}
module.exports = printMonth;