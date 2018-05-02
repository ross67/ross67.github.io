var button = document.getElementById('button');
var gif = document.getElementById('gif');
var video = document.getElementById('video')
var arrow = document.getElementById('arrow')
var text = document.getElementById('text')

video.addEventListener('ended',restart);

function playVideo(){
    gif.style.display="none";
    video.style.display='block';
    arrow.style.display='none';
    button.style.display='none';
    text.style.display = 'none';

    video.autoplay = true;
    video.load();
}

function restart(e){
  gif.style.display="block";
  video.style.display='none';
  arrow.style.display='inline';
  button.style.display='inline';
  text.style.display = 'block';

}
