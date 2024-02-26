document.addEventListener("DOMContentLoaded", function () {
    var video = document.getElementById('preloaderVideo');

    setTimeout(function () {
        video.play();
    }, 1000);

    video.addEventListener('ended', function () {
        video.style.display = 'none'; // Скрыть видео после окончания воспроизведения
    });
});


  
  


document.body.onload = function (){

    setTimeout(function() {
        var preloader = document.getElementById('page-preloader');
        if( !preloader.classList.contains('done'))
        {
            preloader.classList.add('done')
        }
    }, 1000 )
}
