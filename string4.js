function fullName(first_Name, last_Name)
{
    let str = (first_Name.concat(" " ,last_Name));
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) 
    {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    let result = str.join(' ');
    return result;
}

module.exports = fullName;