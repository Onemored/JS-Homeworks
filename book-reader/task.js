document.addEventListener('DOMContentLoaded', () => {
  const book = document.getElementById('book');
  const fontSizeControls = document.querySelectorAll('.font-size');
  const textColorControls = document.querySelectorAll('[data-text-color]');
  const bgColorControls = document.querySelectorAll('[data-bg-color]');

  if (!book) {
    console.error('Элемент #book не найден!');
    return;
  }

  function handleFontSizeClick(event) {
    event.preventDefault();
    fontSizeControls.forEach(btn => btn.classList.remove('font-size_active'));
    event.currentTarget.classList.add('font-size_active');

    const size = event.currentTarget.getAttribute('data-size');
    book.classList.remove('book_fs-big', 'book_fs-small');

    if (size === 'big') book.classList.add('book_fs-big');
    else if (size === 'small') book.classList.add('book_fs-small');
  }

  function handleTextColorClick(event) {
    event.preventDefault();
    textColorControls.forEach(btn => btn.classList.remove('color_active'));
    event.currentTarget.classList.add('color_active');

    const color = event.currentTarget.getAttribute('data-text-color');
    book.classList.remove(
      'book_color-black',
      'book_color-gray',
      'book_color-whitesmoke'
    );
    book.classList.add(`book_color-${color}`);
  }

  function handleBgColorClick(event) {
    event.preventDefault();
    bgColorControls.forEach(btn => btn.classList.remove('color_active'));
    event.currentTarget.classList.add('color_active');

    const bgColor = event.currentTarget.getAttribute('data-bg-color');
    book.classList.remove(
      'book_bg-black',
      'book_bg-gray',
      'book_bg-white'
    );
    book.classList.add(`book_bg-${bgColor}`);
  }

  fontSizeControls.forEach(btn => 
    btn.addEventListener('click', handleFontSizeClick)
  );

  textColorControls.forEach(btn =>
    btn.addEventListener('click', handleTextColorClick)
  );

  bgColorControls.forEach(btn =>
    btn.addEventListener('click', handleBgColorClick)
  );

  document.querySelector('.font-size_active')?.classList.add('font-size_active');
  document.querySelector('[data-text-color].color_active')?.classList.add('color_active');
  document.querySelector('[data-bg-color].color_active')?.classList.add('color_active');
});
