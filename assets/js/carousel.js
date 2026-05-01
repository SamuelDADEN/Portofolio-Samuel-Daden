document.querySelectorAll('.carousel').forEach(function(carousel) {
  var slides = carousel.querySelectorAll('.carousel-slide');
  var dots   = carousel.querySelectorAll('.carousel-dot');
  var current = 0;

  function goTo(n) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  carousel.querySelector('.carousel-prev').addEventListener('click', function(e) {
    e.preventDefault(); e.stopPropagation(); goTo(current - 1);
  });
  carousel.querySelector('.carousel-next').addEventListener('click', function(e) {
    e.preventDefault(); e.stopPropagation(); goTo(current + 1);
  });
  dots.forEach(function(dot, i) {
    dot.addEventListener('click', function(e) {
      e.preventDefault(); e.stopPropagation(); goTo(i);
    });
  });
});
