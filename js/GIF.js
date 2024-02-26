document.addEventListener('DOMContentLoaded', function() {
    var gif = document.getElementById('animatedGif');
  
    gif.addEventListener('mouseenter', function() {
      gif.classList.remove('paused');
    });
  
    gif.addEventListener('mouseleave', function() {
      gif.classList.add('paused');
    });
  });
  