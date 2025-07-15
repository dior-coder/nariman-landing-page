import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

  // Скрипт для кнопок прокрутки (опционально)
  document.querySelector('.scroll-left').addEventListener('click', function() {
    document.querySelector('.reviews-scroll').scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  });
  
  document.querySelector('.scroll-right').addEventListener('click', function() {
    document.querySelector('.reviews-scroll').scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  });