var houseBeginning = new Audio('houseBeginning.mp3');
var houseHorror = new Audio('houseHorror.mp3');
var gunSound = new Audio('gun.mp3');
var phoneSound = new Audio('phone.mp3');
var doorSound = new Audio('door.mp3');
var chainsawSound = new Audio('chainsaw.mp3');
var shoesSound = new Audio('shoes.mp3');



houseBeginning.play();



    function changeImgForward()
    {
        if (img.getAttribute('src') == "panel1.jpg")
        {
            img.src = "panel2.jpg";
            $("header").addClass("hide");
            $("#backArrow").removeClass("hide");
            houseBeginning.volume=0;
            houseHorror.play();

        }else if(img.getAttribute('src') == "panel2.jpg"){
          $('#img').addClass("hide");
          $("svg").removeClass("svg");
          $("svg").addClass("svgAppear");
          $("svg").addClass("room");
          houseHorror.volume=0;
          chainsawSound.play();
          chainsawSound.volume=0.3;

          // $('svg').addClass("room");

        }else if(img.getAttribute('src') == "panel4"){
          img.src ="panel5.jpg";
          $("body").addClass("dead");
          $("#img").addClass("transparent");
          chainsawSound.volume=0;

        }else if(img.getAttribute('src') == "panel5.jpg"){
          $('#img').removeClass("room");
          $("body").removeClass("dead");
          $("#img").removeClass("transparent");

          img.src ="panel6.jpg";
          chainsawSound.volume=0;
        }
    }

    function changeImgBackward()
    {
        if (img.getAttribute('src') == "panel6.jpg")
        {
            location.reload();
        }else if(img.getAttribute('src') == "panel5.jpg"){
            location.reload();
        }else if(img.getAttribute('src') == "panel4.jpg"){
            location.reload();
        }else if(img.getAttribute('src') == "panel2.jpg"){

          $("header").removeClass("hide");
          img.src ="panel1.jpg";

        }
    }

    function openDoor(){
      $("svg").addClass("hide");
      $("#img").removeClass("hide");
      img.src = "panel6.jpg";
      $("#forwardArrow").addClass("hide");
      chainsawSound.volume=0;
    }

    function pickGun(){
      $("svg").addClass("hide");
      $("#img").removeClass("hide");
      img.src = "panel5.jpg";
      $("#forwardArrow").addClass("hide");
      $("body").addClass("dead");
      $("#img").addClass("transparent");
    }

    function pickPhone(){
      $("svg").addClass("hide");
      $("#img").removeClass("hide");
      $("body").addClass("transparent");
      $("#img").addClass("dead");
      img.src = "panel4.jpg";
      $("#forwardArrow").addClass("hide");

    }

    function hover(element) {
        element.setAttribute('src', 'arrowHover.png');
    }
    function unhover(element) {
        element.setAttribute('src', 'arrow.png');
    }
    function doorPlayMe() {
      doorSound.play();
      doorSound.volume = 1;
    }
    function doorPauseMe() {
      doorSound.volume = 0;
    }
    function gunPauseMe() {
      gunSound.volume = 0;
    }
    function gunPlayMe() {
      gunSound.play();
      gunSound.volume = 1;
    }
    function phonePauseMe() {
      phoneSound.volume = 0;
    }
    function phonePlayMe() {
      phoneSound.play();
      phoneSound.volume = 1;
    }
    function chainsawPauseMe() {
      chainsawSound.volume = 0;
    }
    function chainsawPlayMe() {
      chainsawSound.play();
      chainsawSound.volume = 1;
    }
    function shoesPauseMe() {
      shoesSound.volume = 0;
    }
    function shoesPlayMe() {
      shoesSound.play();
      shoesSound.volume = 1;
    }


var door = document.getElementById("door");
door.onclick = openDoor;
var gun = document.getElementById("gun");
gun.onclick = pickGun;
var phone = document.getElementById("phone");
phone.onclick = pickPhone;
var shoes = document.getElementById("Layer_7");
var chainsaw = document.getElementById("Layer_7");

door.onmouseover =  doorPlayMe;
door.onmouseout  =  doorPauseMe;
gun.onmouseover =  gunPlayMe;
gun.onmouseout  =  gunPauseMe;
phone.onmouseover =  phonePlayMe;
phone.onmouseout  =  phonePauseMe;

shoes.onmouseover =  shoesPlayMe;
shoes.onmouseout  =  shoesPauseMe;
