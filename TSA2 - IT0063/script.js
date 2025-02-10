let prev;
let delay;
let isActive = true;

function showbox(day, inbox) {
    let box = document.getElementById(day);
    let prevday = document.getElementById(prev);
    let insideBox = document.getElementById(inbox);
    let prevDelay = document.getElementById(delay);

    if (isActive) {
        box.style.transform = "translateY(0px)";
        // insideBox.style.backgroundColor = "#FFFFFF";
        box.style.opacity= "100%";
        insideBox.style.opacity = "0%";

        // insideBox.style.transitionDuration = "2.5s";
        insideBox.style.transitionDelay = "0.5s";
        if (prev == day) {
            if (!isActive) {
                isActive = true;
                console.log(prev);
                return;
            } else {
                isActive = false;
                // prev = day;
                return;
            }
        }
        console.log("IF ISACTIVE")
        console.log(isActive);
        isActive = false;
        console.log(isActive);
        prev = day;
        delay = inbox;
    }
    
    if (!isActive) {
        box.style.transform = "translateY(0px)";
        // insideBox.style.backgroundColor = "#FFFFFF";
        box.style.opacity = "100%";
        insideBox.style.opacity = "0%";
        prevDelay.style.transitionDuration = "";
        prevDelay.style.opacity = "100%";
        insideBox.style.transitionDelay = "0.5s";
        prevDelay.style.transitionDelay = "";
        prevday.style.transform = "";
        prevday.style.opacity = "0%";
        prevDelay.style.backgroundColor = "";
        console.log("IF !ISACTIVE")
        console.log(isActive);
        isActive = true;
        console.log(isActive);
        prev = day;
        delay = inbox;
    }
}
