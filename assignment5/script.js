var button = document.getElementById('button');
var gif = document.getElementById('gif');
var video = document.getElementById('video')
var arrow = document.getElementById('arrow')

function playVideo(){
    gif.style.display="none";
    video.style.display='block';
    arrow.style.display='none';
    button.style.display='none';
    video.autoplay = true;
    video.load();


}
