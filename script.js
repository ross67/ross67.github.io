var i = 0;
var txt = 'Ross J.'; /* The text */
var speed = 200; /* The speed/duration of the effect in milliseconds */
var add = true;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }else{
      if(add)
        {
          document.getElementById("title").innerHTML = txt.substring(0,i-1);
          add = false;
        }else{
          document.getElementById("title").innerHTML = txt.substring(0,i);
    }
        setTimeout(typeWriter, speed);
    }

}

// reference: https://www.w3schools.com/howto/howto_js_typewriter.asp


										//then, we grab our video element from the DOM
                    theButton1= document.getElementById("part1");
                    theButton2= document.getElementById("part2");
                    theButton3= document.getElementById("part3");
                    theButton4= document.getElementById("part4");
                    theButton5= document.getElementById("part5");
                    theButton6= document.getElementById("part6");
										theMain= document.getElementById('main');
										theTitle= document.getElementById('title');
										theOverlayButton= document.getElementById('overlaybutton');
										theBackButton= document.getElementById('backbutton');
                    overlay = document.getElementById('overlay');




                    theButton1.onclick= () =>{
											theButton1.style.display='none';
											theButton2.style.display='none';
											theButton3.style.display='none';
                      theButton4.style.display='none';
                      theButton5.style.display='none';
                      theButton6.style.display='none';
											theMain.style.display='none';
											theTitle.style.display='none';
											// theOverlayButton.style.display='block';
											theBackButton.style.display='block';
                      overlay.style.display= 'block';
                      document.getElementById()



                    }
                      theButton2.onclick=() =>{
                        theButton1.style.display='none';
                        theButton2.style.display='none';
                        theButton3.style.display='none';
                        theButton4.style.display='none';
                        theButton5.style.display='none';
                        theButton6.style.display='none';
                        theMain.style.display='none';
                        theTitle.style.display='none';
                        // theOverlayButton.style.display='block';
                        theBackButton.style.display='block';
                        overlay.style.display= 'block';
                        document.getElementById("overlayTitle").innerHTML = "assignment2";
                        document.getElementById('overlaytext').innerHTML = "a dog's journey";
                        document.getElementById('link').href = 'https://ross67.github.io/assignment2/';
;


                      }
											theButton3.onclick=() =>{
                        theButton1.style.display='none';
                        theButton2.style.display='none';
                        theButton3.style.display='none';
                        theButton4.style.display='none';
                        theButton5.style.display='none';
                        theButton6.style.display='none';
                        theMain.style.display='none';
                        theTitle.style.display='none';
                        // theOverlayButton.style.display='block';
                        theBackButton.style.display='block';
                        overlay.style.display= 'block';
                        document.getElementById("overlayTitle").innerHTML = "assignment3";
                        document.getElementById('overlaytext').innerHTML = "comics";
                        document.getElementById('link').href = 'https://ross67.github.io/assignment3/';
											}


                    theButton4.onclick=() =>{
                      theButton1.style.display='none';
                      theButton2.style.display='none';
                      theButton3.style.display='none';
                      theButton4.style.display='none';
                      theButton5.style.display='none';
                      theButton6.style.display='none';
                      theMain.style.display='none';
                      theTitle.style.display='none';
                      // theOverlayButton.style.display='block';
                      theBackButton.style.display='block';
                      overlay.style.display= 'block';
                      document.getElementById("overlayTitle").innerHTML = "assignment4";
                      document.getElementById('overlaytext').innerHTML = "action movie";
                      document.getElementById('link').href = 'https://ross67.github.io/assignment4/';
                    }


                  theButton5.onclick=() =>{
                    theButton1.style.display='none';
                    theButton2.style.display='none';
                    theButton3.style.display='none';
                    theButton4.style.display='none';
                    theButton5.style.display='none';
                    theButton6.style.display='none';
                    theMain.style.display='none';
                    theTitle.style.display='none';
                    // theOverlayButton.style.display='block';
                    theBackButton.style.display='block';
                    overlay.style.display= 'block';
                    document.getElementById("overlayTitle").innerHTML = "assignment5";
                    document.getElementById('overlaytext').innerHTML = "saving gravity";
                    document.getElementById('link').href = 'https://ross67.github.io/assignment5/';
                  }


                theButton6.onclick=() =>{
                  theButton1.style.display='none';
                  theButton2.style.display='none';
                  theButton3.style.display='none';
                  theButton4.style.display='none';
                  theButton5.style.display='none';
                  theButton6.style.display='none';
                  theMain.style.display='none';
                  theTitle.style.display='none';
                  // theOverlayButton.style.display='block';
                  theBackButton.style.display='block';
                  overlay.style.display= 'block';
                  document.getElementById("overlayTitle").innerHTML = "assignment6";
                  document.getElementById('overlaytext').innerHTML = "bonus cat website";
                  document.getElementById('link').href = 'https://ross67.github.io/flyingCat/';
                }


              theTitle.onclick=() =>{
                theButton1.style.display='none';
                theButton2.style.display='none';
                theButton3.style.display='none';
                theButton4.style.display='none';
                theButton5.style.display='none';
                theButton6.style.display='none';
                theMain.style.display='none';
                theTitle.style.display='none';
                // theOverlayButton.style.display='block';
                theBackButton.style.display='block';
                overlay.style.display= 'block';
              }

function on() {
		document.getElementById("overlay").style.display = "block";
		console.log('clickon');
}

function off() {
		document.getElementById("overlay").style.display = "none";
}
