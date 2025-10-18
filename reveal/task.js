document.addEventListener('scroll', function() {
  // Получаем все элементы с классом 'reveal'
  const reveals = document.querySelectorAll('.reveal');


  // Проходим по каждому элементу
  reveals.forEach(function(reveal) {
    // Получаем позицию элемента относительно окна браузера
    const revealTop = reveal.getBoundingClientRect().top;
    
    // Высота видимой области окна
    const windowHeight = window.innerHeight;
    
    // Проверяем, находится ли элемент в поле зрения (с небольшим отступом)
    if (revealTop < windowHeight - 100) {
      // Добавляем класс 'reveal_active'
      reveal.classList.add('reveal_active');
    }
  });
});