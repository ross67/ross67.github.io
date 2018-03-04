let popup=document.getElementById('popup')
let main=document.getElementById('main')
let pictures=document.getElementsByClassName('things')
let block1=document.getElementById('img1')
let block2=document.getElementById('img2')
let block3=document.getElementById('img3')
let block4=document.getElementById('img4')
let blocks=[block1,block2,block3,block4]
let clicks=[0,0,0,0]
// console.log(popup)
popup.addEventListener("click",closePopup)
// block1.addEventListener("click",clickingPic(block1))
// block2.addEventListener("click",clickingPic(block2))
// block3.addEventListener("click",clickingPic(block3))
// block4.addEventListener("click",clickingPic(block4))
popup.style.opacity=1
main.style.opacity=0
function closePopup(){
	if (popup.style.opacity==1){
		for (i in [0,1,2,3,4,5,6,7,8,9]){
			setTimeout(function(){console.log('ok')
			popup.style.opacity=popup.style.opacity-0.1
			main.style.opacity=popup.style.opacity+1
			// console.log(popup.style.opacity)
		},100*i)}
		setTimeout(function(){popup.style.display='none'},1000)
	}
}
function change(block){
	if (clicks[blocks.indexOf(block)]<2){
		clicks[blocks.indexOf(block)]+=1
		console.log(clicks[blocks.indexOf(block)])
		if (clicks[blocks.indexOf(block)]==2){
			block.style.opacity=0.5
		}
	}
}
