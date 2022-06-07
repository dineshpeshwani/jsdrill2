function printMonth(str)
{
    let num = str.substr(3,1);
    let num2 =  str.substr(4,1);
    if(num2 == "/")
    {
        if(num == 1){return("Januray")}
        else if(num == 2){return("feburary");}
        else if(num == 3){return("March");}
        else if(num == 4){return("April");}
        else if(num == 5){return("May");}
        else if(num == 6){return("June");}
        else if(num == 7){return("July");}
        else if(num == 8){return("August");}
        else if(num == 9){return("September");}
    }
    else if(num2 == 0){return("october");}
    else if(num2 == 1){return("November");}
    else if(num2 == 2){return("December");}    
}

module.exports = printMonth;