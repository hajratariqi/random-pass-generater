function randomPass(){
    // get the check boxes element
    var capitalLetters = document.getElementById('capitalLetters')
    var smallLetters = document.getElementById('smallLetters')
    var numbers = document.getElementById('numbers')
    var specialCharacters = document.getElementById('specialCharacters')  
        // Call the function to get the combined character set
    var password = getCombinedCharacterSet(capitalLetters, smallLetters, numbers, specialCharacters)
    return password
    
}

function getCombinedCharacterSet(capitalLetters, smallLetters, numbers, specialCharacters){
var combined = ''
var capital = 'ABCDEFGHIJKLMNOPQRSTUWXYZ';
var small = 'abcdefghijklmnopqrstuvwxyz'; 
var specialChar = '!@£)?\%$^&*('; 
var num = '1234567890'; 
if(capitalLetters.checked){
   combined += capital    
}
if(smallLetters.checked){
   combined += small
}
if(numbers.checked){
 combined += num
}
if(specialCharacters.checked){
    combined += specialChar
}
return combined  || 'no selected'
}

function randomPasswordGenerator(){
    var passLenght = randomPass()
    var realPass = '' 
    var range = document.getElementById('range').value
    document.getElementById('length').innerHTML = range

    for (var i = 0; i < range; i++) {
        var random = Math.floor(Math.random() * passLenght.length)
        realPass += passLenght[random];
        
    }
    document.getElementById('pass').value = realPass
}

var iconFlag = true;

function showPass(ele){  
    var passInp = document.getElementById('pass')

    if(iconFlag == false){
        ele.src = './eye-open.svg'
        passInp.type = 'text'
        iconFlag = true
    }
    else{
        ele.src = './eye-close.png'
        passInp.type = 'password'
        iconFlag = false
    }
}

var copyPassFlag = false;

function copyPass(ele){
    var weekPass = document.getElementById('weekPass')
    var passInp = document.getElementById('pass')
    
    if(passInp.value.length > 1){
    if(copyPassFlag == false){
        console.log(ele.innerText);
        
        passInp.select()
        navigator.clipboard.writeText(passInp.value);
        
        ele.childNodes[0].src = './copied.png'
        copyPassFlag = true
        ele.childNodes[1].nodeValue = 'Copied'
    }
}
    else{
        weekPass.innerHTML = "Can't copy empty field"
    }
}