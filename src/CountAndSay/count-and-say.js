export const countAndSay = function (n) {
    return countHandler(n,"1");
};

var countHandler = function(n, number){
   if(n == 1){
        return number;
   } else {
        return countHandler(n-1,wordHandler(number));    
   }
};

var wordHandler = function(number){
    let temp = number.split('');
    let currentScanning = ""
    let scanningCount = 1
    let theWord = ""
    let item  = ""
    for(let i = 0 ; i< temp.length; i++){
        item = temp[i]
        if(currentScanning==""){
            currentScanning = item
        } else if(currentScanning == item) {
            scanningCount++
        } else {
            theWord = theWord+ scanningCount+""+currentScanning
            currentScanning = item
            scanningCount=1;
        }



    }
    theWord = theWord+ scanningCount+""+currentScanning

    return theWord;
 };