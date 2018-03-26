let img=document.getElementById('img')
// let img2=document.getElementById('img2')
// let images = [im1,img2]


    function changeImgForward()
    {
        if (img.getAttribute('src') == "panel1.jpg")
        {
            img.src = "panel2.jpg";
            $("header").addClass("hide");
        }else if(img.getAttribute('src') == "panel2.jpg"){
          img.src ="panel4.jpg";
          $("body").addClass("dead");
          $("#img").addClass("transparent");

        }else if(img.getAttribute('src') == "panel4.jpg"){
          img.src ="panel5.jpg";
          $("body").removeClass("dead");
          $("#img").removeClass("transparent");
        }else if(img.getAttribute('src') == "panel5.jpg"){
          img.src ="panel6.jpg";
        }
    }

    function changeImgBackward()
    {
        if (img.getAttribute('src') == "panel6.jpg")
        {
            img.src = "panel5.jpg";
        }else if(img.getAttribute('src') == "panel5.jpg"){
          img.src ="panel4.jpg";
          $("body").addClass("dead");
        }else if(img.getAttribute('src') == "panel4.jpg"){
          img.src ="panel2.jpg";
        }else if(img.getAttribute('src') == "panel2.jpg"){

          $("header").removeClass("hide");
          img.src ="panel1.jpg";

        }
    }



    function hover(element) {
        element.setAttribute('src', 'arrowHover.png');
    }
    function unhover(element) {
        element.setAttribute('src', 'arrow.png');
    }
