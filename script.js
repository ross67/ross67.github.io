var i = 0;
var txt = 'Ross J.'; /* The text */
var speed = 200; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }else{
          document.getElementById("name").innerHTML = txt.substring(0,i);
    }

}

// reference: https://www.w3schools.com/howto/howto_js_typewriter.asp

                    theButton1= document.getElementById("part1");
                    theButton2= document.getElementById("part2");
                    theButton3= document.getElementById("part3");
                    theButton4= document.getElementById("part4");
                    theButton5= document.getElementById("part5");
                    theButton6= document.getElementById("part6");
										theMain= document.getElementById('main');
										theTitle= document.getElementById('name');
										linkButton= document.getElementById('continue');
										theBackButton= document.getElementById('backbutton');
                    overlay = document.getElementById('overlay');
                    overlayTitle = document.getElementById('overlayTitle');


                    theTitle.onclick= () =>{
                      console.log("clicked");
                      theButton1.style.display='none';
                      theButton2.style.display='none';
                      theButton3.style.display='none';
                      theButton4.style.display='none';
                      theButton5.style.display='none';
                      theButton6.style.display='none';
                      theMain.style.display='none';
                      theTitle.style.display='none';
                      linkButton.style.display = 'none';
                      theBackButton.style.display='block';
                      overlay.style.display= 'block';
                      document.getElementById("overlayTitle").innerHTML = "About Me ";
                      document.getElementById('overlaytext').innerHTML = "Hello and welcome! My name is Ross Jiang, an amateur interactive media artist, part-time computer scientist and full-time language enthusiast based in Abu Dhabi, United Arab Emirates. All of the projects you see here are results of my collaboration with mostly strangers before this class. Through the projects in this portfolio, I have found new ways to express myself I did not know possible before. I thoroughly enjoyed the countless hours I spent on these projects because I had to constantly reinvent myself and redefine what I can and cannot do to benefit the team. It wasn't easy, but we did it.";

;

                    }

                    theButton1.onclick= () =>{
											theButton1.style.display='none';
											theButton2.style.display='none';
											theButton3.style.display='none';
                      theButton4.style.display='none';
                      theButton5.style.display='none';
                      theButton6.style.display='none';
											theMain.style.display='none';
											theTitle.style.display='none';
											theBackButton.style.display='block';
                      overlay.style.display= 'block';
                      document.getElementById("overlayTitle").innerHTML = "Movie Promotional Website";
                      document.getElementById('overlaytext').innerHTML = "A promotional website for our 30 minute film festival. On the first day of Communications Lab class, each group was given 30 minutes to produce a short film. Later I created this website for the film. This is the first website I have ever created";





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
                        theBackButton.style.display='block';
                        overlay.style.display= 'block';
                        document.getElementById("overlayTitle").innerHTML = "An Audio Journal of a Dog's Day ";
                        document.getElementById('overlaytext').innerHTML = "Wandering the streets of Abu Dhabi, a poor little doggy is looking for its owner. From a dog's perspective, you will encounter different people and events. There are also multiple endings to the story. ";
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
                        theBackButton.style.display='block';
                        overlay.style.display= 'block';
                        overlaytext.style.height= '30%';
                        document.getElementById("overlayTitle").innerHTML = "Surviving a Horror Movie: an Interactive Cartoon";
                        document.getElementById('overlaytext').innerHTML = "You decide to explore a haunted house. All of a sudden, you find yourself being chased by an angry grandma with a chainsaw. What would you do? Choose wisely.";
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

                      document.getElementById("overlayTitle").innerHTML = "Video Guide to Making an Action Movie";
                      document.getElementById('overlaytext').innerHTML = "Have you ever wondered how some awesome action movies are made? Look no further than this comprehensive guide for beginners on how you can make your own action movie at home with low to no budget.";
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
                    theBackButton.style.display='block';
                    overlay.style.display= 'block';
                    document.getElementById("overlayTitle").innerHTML = "Animated Adventure: Save Gravity";
                    document.getElementById('overlaytext').innerHTML = "Imagine one day, your world is suddenly flipped upside down. You have to go through a series of challenges to change your world back to normal. You will definitly appreciate gravity a lot of after this.";
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
                  overlay.style.display= 'block';
                  theBackButton.style.display='block';
                  document.getElementById("overlayTitle").innerHTML = "Bonus Cat Website";
                  document.getElementById('overlaytext').innerHTML = "For all you cat lovers, here is a website that shows you cats can fly and has absolutely no other purpose.";
                  document.getElementById('link').href = 'https://ross67.github.io/flyingCat/';
                }



function on() {
		document.getElementById("overlay").style.display = "block";
		console.log('clickon');
}

function off() {
		document.getElementById("overlay").style.display = "none";
}
