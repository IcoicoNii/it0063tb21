// For border change
let prev, curr;
let strArr = [];
// Add to display output
function addToDisplay(btn) {
    let display = document.getElementById("output");
    curr = btn;
    if (display.innerHTML == "Syntax Error!") {
        output.innerHTML = "";
    }
    strArr.push(btn);
    display.innerHTML += btn;
    console.log(strArr)

    rotateColor();
}


// To clear display
function clearDisplay() {
    let display = document.getElementById("output");
    display.innerHTML = "";
    rotateColor();
}

// To compute
function computeResult() {
    let output = document.getElementById("output");
    if (output.innerHTML == false){
        return;
    }
    try {
        output.innerHTML = eval(output.innerHTML);
        console.log(output.innerHTML);
    }
    catch (error) {
        output.innerHTML = "Syntax Error!";
    }
    
    rotateColor();
}

// To delete latest input
function backSpace() {
    let output = document.getElementById("output");
    str = output.innerHTML;
    console.log(str);
    strArr = output.innerHTML.split("");
    
    if (str == "Syntax Error!") {
        output.innerHTML = "";
    } else {
        strArr.pop();
        console.log(strArr);
        
        // let toDelete = str[str.length - 1];
        output.innerHTML = strArr.join("");
    }
    rotateColor();
}

// To change border color
function changeBorder(btn){
    curr = btn;
    let currbtn = document.getElementById(curr);
    let prevbtn = document.getElementById(prev);
    
    currbtn.style.border = "solid black 2px";
    prev = curr;
    prevbtn.style.border = "";
}
let value = 0.1;

function rotateColor(){
    let bgcolor = document.getElementById('background-rotate');
    value += 45;
    bgcolor.style.transform = 'rotate('+value+'deg)';
    console.log('rotate('+value+'deg)');
    console.log(value);
}