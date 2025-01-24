
function GreenTheme(){
    let left = document.getElementById("left");
    left.style.backgroundColor = "#283618";

    let icons = document.getElementsByClassName("icons-color");
    for (i = 0; i < icons.length; i++){
        icons[i].style.color = "#fefae0";
    }
    
    let blue = document.getElementsByClassName("blue");
    let white = document.getElementsByClassName("white");
    let bar = document.getElementsByClassName("bar");
    for (i = 0; i < blue.length; i++){
        white[i].style.backgroundColor = "white";
        blue[i].style.backgroundColor = "#dda15e";
        bar[i].style.color = "#606c38";
    }
    
    let info = document.getElementById("info");
    let h4 = document.getElementsByTagName("h4");
    
    for (i = 0; i < h4.length; i++){
        info.style.color = "#bc6c25";
        h4[i].style.color = "#bc6c25";
    }

}

function Original(){
    let left = document.getElementById("left");
    left.style.backgroundColor = "";

    let icons = document.getElementsByClassName("icons-color");
    for (i = 0; i < icons.length; i++){
        icons[i].style.color = "";
    }
    
    let blue = document.getElementsByClassName("blue");
    let white = document.getElementsByClassName("white");
    let bar = document.getElementsByClassName("bar");
    for (i = 0; i < blue.length; i++){
        white[i].style.backgroundColor = "";
        blue[i].style.backgroundColor = "";
        bar[i].style.color = "";
    }
    
    let info = document.getElementById("info");
    let h4 = document.getElementsByTagName("h4");
    
    for (i = 0; i < h4.length; i++){
        info.style.color = "";
        h4[i].style.color = "";
    }

}

function BrownTheme(){
    let left = document.getElementById("left");
    left.style.backgroundColor = "#432818";

    let icons = document.getElementsByClassName("icons-color");
    for (i = 0; i < icons.length; i++){
        icons[i].style.color = "#ffe6a7";
    }
    
    let blue = document.getElementsByClassName("blue");
    let white = document.getElementsByClassName("white");
    let bar = document.getElementsByClassName("bar");
    for (i = 0; i < blue.length; i++){
        white[i].style.backgroundColor = "#fefae0";
        blue[i].style.backgroundColor = "#bb9457";
        bar[i].style.color = "#99582a";
    }
    
    let info = document.getElementById("info");
    let h4 = document.getElementsByTagName("h4");
    
    for (i = 0; i < h4.length; i++){
        info.style.color = "#6f1d1b";
        h4[i].style.color = "#6f1d1b";
    }

}