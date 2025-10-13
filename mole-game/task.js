(() => {
    let playing = true;
    let activeHole = 1;
    let deadMoles = 0; // убитые кроты
    let missedHits = 0; // промахи
    
    // получаем элементы для подсчета очков
    const deadCounter = document.getElementById('dead');
    const lostCounter = document.getElementById('lost');
    
    const stop = () => playing = false;
    
    const getHole = index => document.getElementById(`hole${index}`);
    
    const deactivateHole = index =>
        getHole(index).className = 'hole';
    
    const activateHole = index =>
        getHole(index).className = 'hole hole_has-mole';
    
    const next = () => setTimeout(() => {
        if (!playing) return;
        
        deactivateHole(activeHole);
        activeHole = Math.floor(1 + Math.random() * 9);
        activateHole(activeHole);
        next();
    }, 800);
    
    // функция обработки клика
    const handleClick = (event) => {
        const target = event.target;
        
        if (!target.classList.contains('hole')) return;
        
        if (target.classList.contains('hole_has-mole')) {
            // успешный удар
            deadMoles++;
            deadCounter.textContent = deadMoles;
            deactivateHole(activeHole);
            
            if (deadMoles >= 5) { // условие победы
                alert('Вы победили!');
                resetGame();
            }
        } else {
            // промах
            missedHits++;
            lostCounter.textContent = missedHits;
            
            if (missedHits >= 3) { // условие поражения
                alert('Вы проиграли!');
                resetGame();
            }
        }
    };
    
    // сброс игры
    const resetGame = () => {
        stop();
        deadMoles = 0;
        missedHits = 0;
        deadCounter.textContent = 0;
        lostCounter.textContent = 0;
        playing = true;
        next();
    };
    
    // добавляем обработчики событий
    document.querySelector('.hole-game').addEventListener('click', handleClick);
    
    next();
})();