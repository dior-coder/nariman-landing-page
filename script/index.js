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

  // Анимация для блока реквизитов
function initRequisitesAnimation() {
  const requisitesSection = document.getElementById('requisites');
  const columns = requisitesSection.querySelectorAll('.col-md-4');
  
  // Задаем начальные стили
  requisitesSection.style.opacity = '0';
  requisitesSection.style.transform = 'translateY(30px)';
  requisitesSection.style.transition = 'all 0.6s ease-out';
  
  columns.forEach((col, index) => {
    col.style.opacity = '0';
    col.style.transform = 'translateY(20px)';
    col.style.transition = `all 0.5s ease-out ${0.3 + index * 0.2}s`;
  });
  
  // Запускаем анимацию после загрузки
  setTimeout(() => {
    requisitesSection.style.opacity = '1';
    requisitesSection.style.transform = 'translateY(0)';
    
    columns.forEach(col => {
      col.style.opacity = '1';
      col.style.transform = 'translateY(0)';
    });
  }, 500);
}

// Вызываем после загрузки страницы
window.addEventListener('load', function() {
  initRequisitesAnimation();
  
  // Анимация для других блоков (пример)
  document.querySelectorAll('.animate-on-load').forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.1}s`;
    el.classList.add('animate-fade-in-up');
  });
});

document.querySelector('.btn-download-requisites').addEventListener('click', function() {
  // Здесь код для генерации/скачивания PDF
});

document.querySelector('.btn-print-requisites').addEventListener('click', function() {
  window.print();
});