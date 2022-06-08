function strToNum(str)
{
    let result = str.replace(/,/g ,"");
    let result2 = result.replace('$', "");
    if(isNaN(result2) === false)
    {
     return (Number(+result2));
    }else{
      return "Invalid Input";
    }
}
module.exports = strToNum;
