const clock = document.getElementById("webclock");

function webClock() {
  let d = new Date();
  let hours = d.getHours();
  let mins = d.getMinutes();
  let secs = d.getSeconds();
  if (hours < 10) {
    clock.innerText = '0'+hours+':';
  } else {
    clock.innerText = hours+':';
  }
  if (mins < 10) {
    clock.innerText += '0'+mins+':';
  } else {
    clock.innerText += mins+':';
  }
  if (secs < 10) {
    clock.innerText += '0'+secs;
  } else {
    clock.innerText += secs;
  }
}

setInterval(webClock, 1000);
