let img=document.getElementById('img')
// let img2=document.getElementById('img2')
// let images = [im1,img2]


    function changeImg()
    {
        if (img.getAttribute('src') == "dumb.jpg")
        {
            img.src = "samuel.jpg";
        }else if(img.getAttribute('src') == "samuel.jpg"){
          img.src ="doge.jpg";
        }

    }


    function hover(element) {
        element.setAttribute('src', 'arrowHover.png');
    }
    function unhover(element) {
        element.setAttribute('src', 'arrow.png');
    }
