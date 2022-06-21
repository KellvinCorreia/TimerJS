let hourDom = document.querySelector('.hours')
let minutesDom = document.querySelector('.minutes')
let secondsDom = document.querySelector('.seconds')
let start = document.querySelector('.start')
let pause = document.querySelector('.pause')
let reset = document.querySelector('.reset')
let watch = document.querySelector('.watch')

let hour = 0
let minutes = 0
let seconds = 0
let timer
let blink
let notBlink

function intervalSec() {
  timer = setInterval(function () {
    seconds++
    if (seconds < 10) {
      secondsDom.innerHTML = `0${seconds}`
    } else {
      secondsDom.innerHTML = seconds
    }
    intervalMin()
    intervalHour()
  }, 1000)
}
function intervalMin() {
  if (seconds == 60) {
    seconds = 0
    secondsDom.innerHTML = `0${seconds}`
    minutes++
    minutesDom.innerHTML = minutes
  }
  if (minutes < 10) {
    minutesDom.innerHTML = `0${minutes}`
  } else {
    minutesDom.innerHTML = minutes
  }
}
function intervalHour() {
  if (minutes == 60) {
    seconds = 0
    minutes = 0
    hour++
    hourDom.innerHTML = hour
    secondsDom.innerHTML = '00'
    minutesDom.innerHTML = '00'
  }
  if (hour < 10) {
    hourDom.innerHTML = `0${hour}`
  } else {
    hourDom.innerHTML = hour
  }
  if (hour == 24) {
    hour = 0
    minutes = 0
    seconds = 0
    secondsDom.innerHTML = `0${seconds}`
    minutesDom.innerHTML = `0${minutes}`
    hourDom.innerHTML = `0${hour}`
  }
}
start.addEventListener('click', function () {
  clearInterval(timer)
  clearInterval(blink)
  clearInterval(notBlink)
  intervalSec()
  intervalMin()
  intervalHour()
  watch.classList.remove('timerPause')
})
pause.addEventListener('click', function () {
  clearInterval(timer)
  clearInterval(blink)
  clearInterval(notBlink)
  blink = setInterval(function () {
    watch.classList.add('timerPause')
  }, 500)
  notBlink = setInterval(function () {
    watch.classList.remove('timerPause')
  }, 1000)
})
reset.addEventListener('click', function () {
  clearInterval(timer)
  clearInterval(blink)
  clearInterval(notBlink)
  hour = 0
  minutes = 0
  seconds = 0
  secondsDom.innerHTML = '00'
  minutesDom.innerHTML = '00'
  hourDom.innerHTML = '00'
  watch.classList.remove('timerPause')
})
