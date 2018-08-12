var songs = ["song1.mp3","song2.mp3","song3.mp3","song4.mp3","song5.mp3",];
var poster = ["poster1.jpg","poster2.jpg","poster3.jpg","poster4.jpg","poster5.jpg"];

var songTitle = document.getElementById("songTitle");
var fillBar = document.getElementById("fill");

var song = new Audio();
var currentSong = 0; //it point to the current song

window.onload = playSong; // it will call the func, when window is load

function playSong(){
	
	song.src = songs[currentSong]; //set the srcof 0 song

	songTitle.textContent = songs[currentSong]; //set the title

	song.play(); //play the song
}

function playOrPauseSong(){
	if(song.paused){
		song.play();
		$("#play img").attr("src","img/pause.png");
	}
	else{
		song.pause();
		$("#play img").attr("src","img/play.png")
	}
}
 
song.addEventListener('timeupdate', function(){
	
	var position = song.currentTime / song.duration;

	fillBar.style.width = position * 100 + '%';
});

function next(){

	currentSong++;
	if(currentSong > 4){
		currentSong = 0;
	}
	playSong();
	$("#play img").attr("src","img/pause.png");
	$("#image img").attr("src",poster[currentSong]);
}





















