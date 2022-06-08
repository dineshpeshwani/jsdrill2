function fullName(person)
{
    let str;
    if(person.middle_name != undefined)
    {
        str = (person.first_name.concat(" " ,person.middle_name).concat(" ", person.last_name));}
    else{
        str = (person.first_name.concat(" ", person.last_name));}
    
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) 
    {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    let result = str.join(' ');
    return result;
}

module.exports = fullName;