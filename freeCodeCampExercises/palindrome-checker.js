
function palindrome(str) {
    var remove = /[\W_]/g
    var lowerStr = str.toLowerCase().replace(remove, '');
    var revertStr = lowerStr.split('').reverse().join('');

    if (revertStr === lowerStr) {
        return true;
    } else {
        return false;
    }
}

palindrome("eye");