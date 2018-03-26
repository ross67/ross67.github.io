let img=document.getElementById('img')
// let img2=document.getElementById('img2')
// let images = [im1,img2]


    function changeImg()
    {
        if (img.getAttribute('src') == "panel1.jpg")
        {
            img.src = "panel2.jpg";
        }else if(img.getAttribute('src') == "panel2.jpg"){
          img.src ="panel4.jpg";
        }else if(img.getAttribute('src') == "panel4.jpg"){
          img.src ="panel6.jpg";
        }

    }


    function hover(element) {
        element.setAttribute('src', 'arrowHover.png');
    }
    function unhover(element) {
        element.setAttribute('src', 'arrow.png');
    }
