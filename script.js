let popup=document.getElementById('popup')
let main=document.getElementById('main')
let pictures=document.getElementsByClassName('things')
let ending1=document.getElementById('ending1')
let ending2=document.getElementById('ending2')
let ending3=document.getElementById('ending3')
let endings=[ending1,ending2,ending3]
let endingsPlayed=0
let randomNumber=0
let block1=document.getElementById('img1')
let block2=document.getElementById('img2')
let block3=document.getElementById('img3')
let block4=document.getElementById('img4')
let blocks=[block1,block2,block3,block4]
let k=1
let timesPlayed=0
let endingPercents=[60,30,10]
let clicks=[0,0,0,0]
let soundSample=new Howl({
	src:['sampleSound.wav'],
	onend:function(){checkingEnding()},
})

let introSound=soundSample
let sound11=soundSample
let sound12=soundSample
let sound21=soundSample
let sound22=soundSample
let sound31=soundSample
let sound32=soundSample
let sound41=soundSample
let sound42=soundSample
let sounds1=[sound11,sound21,sound31,sound41]
let sounds2=[sound12,sound22,sound32,sound42]
let ambiance=soundSample
let endSound1=soundSample
let endSound2=soundSample
let endSound3=soundSample
let endSounds=[endSound1,endSound2,endSound3]
let allSounds=sounds1.concat(sounds2.concat(endSounds.concat([ambiance])))

// console.log(popup)
//popup.addEventListener("click",fadeOut(main,popup))
// block1.addEventListener("click",clickingPic(block1))
// block2.addEventListener("click",clickingPic(block2))
// block3.addEventListener("click",clickingPic(block3))
// block4.addEventListener("click",clickingPic(block4))

popup.style.opacity=1
main.style.opacity=0
introSound.play()
function fadeOut(screenOut,screenIn){
	for (s in allSounds){
	allSounds[s].fade(1,0,500)
	allSounds[s].stop()
	}
	console.log(screenOut.style.opacity)
	if (screenOut.style.opacity>=1){
		screenOut.style.opacity=1
		k=1
		console.log(screenIn)
		screenIn.style.visibility="visible"
		for (i in [0,1,2,3,4,5,6,7,8,9]){
			setTimeout(function(){
				k+=1
				screenOut.style.opacity=1-k*0.1
				screenIn.style.opacity=k*0.1
		},100*i)}
		setTimeout(function(){screenOut.style.visibility='hidden'},1000)
	}
}
function change(block){
	if ((clicks[blocks.indexOf(block)]<2)&&(clicks[0]+clicks[1]+clicks[2]+clicks[3])<(timesPlayed+1)*2) {
		for (s in allSounds){
			allSounds[s].fade(1,0,500)
			allSounds[s].stop()
		}
		if (clicks[blocks.indexOf(block)]==1){
			block.style.opacity=0.5
			sounds2[blocks.indexOf(block)].play()
		}else{
			sounds1[blocks.indexOf(block)].play()
		}
		clicks[blocks.indexOf(block)]+=1
	}
}
function checkingEnding(){
	console.log('ok')
	if ((clicks[0]+clicks[1]+clicks[2]+clicks[3])==(timesPlayed+1)*2){
		console.log('ye')
		randomNumber=Math.random()
		if (randomNumber<0.6){
			fadeOut(main,endings[0])
			console.log(endings[0])
			endSounds[0].play()
		} else if (randomNumber<0.9) {
			fadeOut(main,endings[1])
			console.log(endings[1])
			endSounds[1].play()
		} else {
			fadeOut(main,endings[2])
			console.log(endings[2])
			endSounds[2].play()
		}
		for (i in [0,1]){endings.unshift(endings.pop())}
		timesPlayed+=1
	}
}