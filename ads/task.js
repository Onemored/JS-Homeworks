document.addEventListener('DOMContentLoaded', () => {
  const rotators = document.querySelectorAll('.rotator');

  rotators.forEach(rotator => {
    const cases = rotator.querySelectorAll('.rotator__case');
    let currentIndex = 0;

    const rotate = () => {
      cases.forEach(caseEl => {
        caseEl.classList.remove('rotator__case_active');
        caseEl.style.color = '';
      });

      const currentCase = cases[currentIndex];

      currentCase.classList.add('rotator__case_active');
      currentCase.style.color = currentCase.dataset.color || 'black';

      currentIndex = (currentIndex + 1) % cases.length;
    };

    const updateInterval = () => {
      const currentCase = cases[currentIndex];
      const speed = parseInt(currentCase.dataset.speed) || 1000;
      clearInterval(rotator.intervalId);
      rotator.intervalId = setInterval(() => {
        rotate();
        updateInterval();
      }, speed);
    };

    updateInterval();
  });
});