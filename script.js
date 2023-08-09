// Code is written by Khushboo Aswani
//getElementById method returns an element with a specified value
let button1 = document.getElementById("start_button");
let button2 = document.getElementById("stop_button");
let button3 = document.getElementById("reset_button");
let timer_text = document.getElementById("timer_text");

//add event listener to all the buttons
//addEventListener method attaches an event handler to an element
button1.addEventListener("click" , Start);
button2.addEventListener("click" , Stop);
button3.addEventListener("click" , Reset);

let check = false;
let check_for_start = false;

let milliSeconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let event_value;
let ms, s , m , h;

//Define the Start function
function Start() {
    if(check_for_start === true) return;

    check = true;
    check_for_start = true;
    event_value = setInterval(function(){
        milliSeconds += 5;
        if(milliSeconds === 1000) {
            milliSeconds = 0;
            seconds++;
        }
        if(seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if(minutes === 60) {
            minutes = 0;
            hours++;
        }
        if(hours === 24) {
            Reset();
        }

        //-> Change to String <-

        // for Seconds
        if(seconds < 10) {
            s = "0" + seconds;
        }
        else {
            s = seconds;
        }

        // for Minutes
        if(minutes < 10) {
            m = "0" + minutes;
        }
        else {
            m = minutes;
        }

        // for Hours
        if(hours < 10) {
            h = "0" + hours;
        }
        else {
            h = hours;
        }

        timer_text.innerHTML = h + " : " + m + " : " + s;
    },5)
}

//Define the Stop function
function Stop() {
    if(check === false) return;
    clearInterval(event_value);
    start_button.innerText = "RESUME";
    check_for_start = false;
}

//Define the Reset function
function Reset() {
    check = false;
    check_for_start = false;
    milliSeconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    timer_text.innerHTML = "00 : 00 : 00";
    clearInterval(event_value);
    start_button.innerText = "START";   
}
