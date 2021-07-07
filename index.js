let miliSeconds = 0
let seconds = 0
let minutes = 0
let hours = 0

let started = false

let miliSecondsEl = document.getElementById("mili-seconds-el")
let secondsEl = document.getElementById("seconds-el")
let minutesEl = document.getElementById("minutes-el")
let hoursEl = document.getElementById("hours-el")

let startBtn = document.getElementById("start-btn")
let stopBtn = document.getElementById("stop-btn")
let resetBtn = document.getElementById("reset-btn")

startBtn.addEventListener("click", function() {
    // when startTime() function is called for the first time, we set the value started = true
    // bacause if by mistake we click the start button at the time when stop watch is running
    // this event listener will call the startTime() function again 
    // so inorder to stop it from calling startTime() function again and again we set started = true
    if (started === false) {
        startTime()
    }
})

stopBtn.addEventListener("click", function() {
    stopTime()
})

resetBtn.addEventListener("click", function() {
    resetTime()
})

let startId = undefined

function startTime() {
    started = true
    startId = setInterval(function() {
	    renderMiliSeconds()
    }, 10)
}

function renderMiliSeconds() {
    miliSeconds++
    if (miliSeconds === 100) {
        miliSeconds = 0
        renderSeconds()
    } else {
        miliSecondsEl.textContent = miliSeconds
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

function stopTime() {
    started = false
    clearInterval(startId)
}

function resetTime() {
    stopTime()
    miliSeconds = 0
    seconds = 0
    minutes = 0
    hours = 0
    miliSecondsEl.textContent = "00"
    secondsEl.textContent = "00"
    minutesEl.textContent = "00" + " : "
    hoursEl.textContent = "00" + " :"
}

