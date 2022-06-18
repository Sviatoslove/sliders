var prev = document.getElementById('btn-prev');
var next = document.getElementById('btn-next');
var slides = document.querySelectorAll('.slide');
var dots = document.querySelectorAll('.dot');
var index = 0;

function activeSlide(n) {
  for(slide of slides) {
    slide.classList.remove('active');
  };
  slides[n].classList.add('active');
  var activeSlideData = slides[n].dataset.slide;
  dots.forEach(function(dot, idx) {
    dots[idx].classList.remove('active');
    if(dots[idx].dataset.dot === activeSlideData) {
      dots[idx].classList.add('active')
    };
  });
};

function dotsSlide() {
  dots.forEach(function(dot, idx){
    dots[idx].addEventListener('click', function(event){
      var currTab = event.target.dataset.dot;
      changeClass(event.target)
      for(var i = 0; i < slides.length; i++){
        slides[i].classList.remove('active');
        if(slides[i].dataset.slide === currTab) {
          slides[i].classList.add('active');
          index = i;
        };
      };
    });
  });
};
console.log(index)
function changeClass(el) {
  for(var i = 0; i < dots.length; i++){
    dots[i].classList.remove('active');
  };
  el.classList.add('active');
};

function nextSlide() {
  if(index == slides.length - 1) {
    index -= 2;
    activeSlide(index);
  } else {
    index++;
    activeSlide(index);
  };
};

function prevSlide() {
  if(index == 0) {
    index += 2;
    activeSlide(index);
  } else {
    index--;
    activeSlide(index);
  };
};

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
dotsSlide();