const realTimeString = window.document.getElementById('realTime');

export function drawRealTime() {
  const realTime = new Date();
  realTimeString.innerHTML = realTime;
}


