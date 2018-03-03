let popup=document.getElementById('popup')
console.log(popup)
popup.addEventListener("click",closePopup)
popup.style.opacity=1	
function closePopup(){
	for (i in [0,1,2,3,4,5,6,7,8,9]){
	setTimeout(function(){console.log('ok')
		popup.style.opacity=popup.style.opacity-0.1
		console.log(popup.style.opacity)},100*i)}
	setTimeout(function(){popup.style.display='none'},1000)
}