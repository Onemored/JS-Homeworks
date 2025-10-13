const timerElement = document.getElementById('timer');

function timeStringToSeconds(timeStr) {
  const [hours, minutes, seconds] = timeStr.split(':').map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}

let totalSeconds = timeStringToSeconds(timerElement.textContent);

function pad(num) {
  return num.toString().padStart(2, '0');
}

function updateTimer() {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  
  const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    
  timerElement.textContent = formattedTime;
}

const interval = setInterval(() => {
  totalSeconds--;
  updateTimer();
  
  if (totalSeconds <= 0) {
    clearInterval(interval);
    alert('Вы победили в конкурсе!');

    timerElement.textContent = '00:00:00';
    window.location.href = 'https://www.7-zip.org/a/7z2501-x64.exe';
  }
}, 1000);