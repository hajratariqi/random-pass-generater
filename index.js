var copyPassFlag = false;

function randomPass(){
    var capitalLetters = document.getElementById('capitalLetters')
    var smallLetters = document.getElementById('smallLetters')
    var numbers = document.getElementById('numbers')
    var specialCharacters = document.getElementById('specialCharacters')  
    var weekPass = document.getElementById('weekPass')

    if(capitalLetters.checked && smallLetters.checked && numbers.checked && specialCharacters.checked){
        weekPass.style.color = 'green'
        weekPass.innerHTML = 'Strong password'
    }else{
        weekPass.innerHTML = 'Week password'
    }

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
    copyPassFlag = false

    if(copyPassFlag == false){
        var ele = document.getElementById('copyButton')
        ele.childNodes[0].src = './copy.png'
        ele.childNodes[1].nodeValue = 'copy'
        copyPassFlag = true
    }


    for (var i = 0; i < range; i++) {
        var random = Math.floor(Math.random() * passLenght.length)
        realPass += passLenght[random];   
    }
    document.getElementById('pass').value = realPass
}

// show password
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

// copy password

function copyPass(ele){
    var weekPass = document.getElementById('weekPass')
    var passInp = document.getElementById('pass')
    
    if(passInp.value.length > 1){

    if(copyPassFlag == false){
        ele.childNodes[0].src = './copy.png'
        ele.childNodes[1].nodeValue = 'copy'
        copyPassFlag = false
    }else{
        passInp.select()
        navigator.clipboard.writeText(passInp.value);       
        ele.childNodes[0].src = './copied.png'
        ele.childNodes[1].nodeValue = 'Copied'
        copyPassFlag = true
    }
}
    else{
        weekPass.innerHTML = "Can't copy empty field"
    }
}