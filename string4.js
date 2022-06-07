function fullName(first_Name, last_Name)
{
    let str = (first_Name.concat(" " ,last_Name));
    //titleCase(name1);
    //return result;
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) 
    {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    let result = str.join(' ');
    return result;
}
/*function titleCase(str) 
{
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) 
    {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    let result = str.join(' ');
    return result;
}*/
module.exports = fullName;