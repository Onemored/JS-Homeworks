const cookie = document.getElementById('cookie');
const counterElement = document.getElementById('clicker__counter');
const startTime = new Date();
const cpsElement = document.getElementById('cps');
let clickCount = counterElement.textContent;
let lastClickTime = cpsElement.textContent;
let isBig = true;

// Обработчик клика
cookie.addEventListener('click', () => {
  // Увеличиваем счетчик
  clickCount++;
  counterElement.textContent = clickCount;
    
  // Получаем текущее время
  const currentTime = new Date();
    
  // Рассчитываем время между кликами
  if (lastClickTime) {
    const timeDiff = (currentTime - lastClickTime) / 1000;
    const cps = 1 / timeDiff;
    console.log(`Скорость клика: ${cps.toFixed(2)} кликов/сек`);
    cpsElement.textContent = cps.toFixed(2);
  }
    
  lastClickTime = currentTime;
    
  // Меняем размер печеньки
  if (isBig) {
    cookie.width = 150;
    cookie.height = 150;
  } else {
    cookie.width = 200;
    cookie.height = 200;
  }
    
  isBig = !isBig;
});