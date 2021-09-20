let milliSeconds = 0
let seconds = 0
let minutes = 0
let hours = 0

let timeStarted = false

let milliSecondsEl = document.getElementById("milli-seconds-el")
let secondsEl = document.getElementById("seconds-el")
let minutesEl = document.getElementById("minutes-el")
let hoursEl = document.getElementById("hours-el")

let startBtn = document.getElementById("start-btn")
let stopBtn = document.getElementById("stop-btn")
let resetBtn = document.getElementById("reset-btn")

//  when startTime() function is called for the first time, we set timeStarted = true
//  bacause if by mistake we click the start button at the time when stop watch is already 
//  running startTime() function will be called again so inorder to stop it from calling startTime() 
//  function again and again we set timeStarted = true
startBtn.addEventListener("click", function() {
    if (timeStarted === false) {
        startTime()
    }
})

stopBtn.addEventListener("click", stopTime)
resetBtn.addEventListener("click", resetTime)

let startId = undefined

// startId = When setInterval function is called it will return an ID
function startTime() {
    timeStarted = true
    startId = setInterval(renderMilliSeconds, 10)
}

function renderMilliSeconds() {
    milliSeconds++
    if (milliSeconds === 100) {
        milliSeconds = 0
        renderSeconds()
    } else {
        milliSecondsEl.textContent = milliSeconds
    }
}

function renderSeconds() {
    seconds++
    if (seconds === 60) {
        seconds = 0
        renderMinutes()
    } else if (seconds < 10) {
        secondsEl.textContent = "0" + seconds
    } else {
        secondsEl.textContent = + seconds 
    }
}

function renderMinutes() {
    minutes++
    if (minutes === 60) {
        minutes = 0
        renderHours()
    } else if (minutes < 10) {
        minutesEl.textContent = "0" + minutes + " : "
    } else {
        minutesEl.textContent = minutes + " : "
    }    
}

function renderHours() {
    hours++
    if (hours < 10) {
        hoursEl.textContent = "0" + hours +" :"
    } else {
        hoursEl.textContent = hours + " :"
    }
}

// To clear the Interval or stop the time we will pass startId in clearInterval function
function stopTime() {
    timeStarted = false
    clearInterval(startId)
}

function resetTime() {
    stopTime()
    milliSeconds = 0
    seconds = 0
    minutes = 0
    hours = 0
    milliSecondsEl.textContent = "00"
    secondsEl.textContent = "00"
    minutesEl.textContent = "00" + " : "
    hoursEl.textContent = "00" + " :"
}
