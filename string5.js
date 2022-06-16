function arrToStr(str){
    if(str === null) return " ";
    else {
        sentence = str.toString();
        result = sentence.replace(/,/g , " ");
        return result;
    }
}
module.exports = arrToStr;
