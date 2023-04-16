const burger = document.querySelector('.burger'),
      sidebar = document.querySelector('.sidebar');

burger.addEventListener('click', (e) => {
   burger.classList.toggle('open');
   sidebar.classList.toggle('open');

});

