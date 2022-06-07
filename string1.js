function strToNum(str)
{
    let result = str.replace(/,/g ,"");
    if(isNaN(result) === false)
    {
     return (Number(+result));
    }else{
      return "Invalid Input";
    }
}
module.exports = strToNum;
