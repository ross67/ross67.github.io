var background = document.getElementById("popup");

var gif = document.getElementById("gif");

var catPic = document.getElementById("img1");

var plane = document.getElementById('plane');

var video = document.getElementById('videoContainer');

var click = false;

var audio = new Audio('catSound.mp3');
audio.play();

function fadeOut(){
        background.style.display = 'none';
        audio.pause();
	}


  function myMove() {

      var pos = 0;
      var id = setInterval(frame, 10);

      function frame() {
          if (pos == window.innerWidth) {
              pos = 0;
          } else {
              pos=pos+2;
              gif.style.left = pos + 'px';
          }
      }
//https://www.w3schools.com/howto/howto_js_animate.asp
  }

 function clicked() {

  document.addEventListener("mousemove", move);
  click = true;

}

 function move(){

  var newX = event.clientX -120;
  var newY = event.clientY -100;

  catPic.style.left = newX + "px";
  catPic.style.top = newY + "px";


}

function playVideo(e){
  console.log("playvideo");
  if(click){
    video.style.visibility = 'visible';
  }

}
