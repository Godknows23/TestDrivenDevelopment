function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join(""); 
    return joinArray; 
}
 
reverseString("my Odin project on Test driven development");

export default reverseString;